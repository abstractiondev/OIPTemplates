/**
* Created by kalle on 29.1.2014.
*/
var TheBall;
(function (TheBall) {
    (function (Interface) {
        /// <reference path="jquery.d.ts" />
        /// <reference path="DataConnectionManager.ts" />
        /// <reference path="dustjs-linkedin.d.ts" />
        (function (UI) {
            var TemplateHook = (function () {
                function TemplateHook(templateName, jQuerySelector, dataSources, preRenderingDataProcessor, postRenderingDataProcessor, hiddenElementRendering) {
                    this.templateName = templateName;
                    this.jQuerySelector = jQuerySelector;
                    this.dataSources = dataSources;
                    this.preRenderingDataProcessor = preRenderingDataProcessor;
                    this.postRenderingDataProcessor = postRenderingDataProcessor;
                    this.hiddenElementRendering = hiddenElementRendering;
                }
                return TemplateHook;
            })();
            UI.TemplateHook = TemplateHook;

            var TemplateDataSource = (function () {
                function TemplateDataSource() {
                    this.UsedInTemplates = [];
                }
                TemplateDataSource.prototype.GetObjectContent = function () {
                    return this.DCM.TrackedObjectStorage[this.ObjectID];
                };

                /*
                RefreshObjectChange(trackedObject:TrackedObject, currTimestamp:string) {
                console.log("Refreshing object: " + trackedObject.ID + " used in: " + this.UsedInTemplates.join());
                this.TMM.RefreshNamedTemplates(currTimestamp, this.UsedInTemplates);
                }*/
                TemplateDataSource.prototype.RefreshTemplates = function (currTimestamp) {
                    this.TMM.RefreshNamedTemplates(currTimestamp, this.UsedInTemplates);
                };
                return TemplateDataSource;
            })();
            UI.TemplateDataSource = TemplateDataSource;

            var TemplateModuleManager = (function () {
                function TemplateModuleManager(dcm) {
                    this.DataSourceFetchStorage = {};
                    this.TemplateHookStorage = {};
                    if (!dcm)
                        dcm = new TheBall.Interface.UI.DataConnectionManager();
                    this.DCM = dcm;
                }
                TemplateModuleManager.prototype.CreateFetchPromise = function (fetchUrl, fetchCallBack) {
                    return $.ajax({
                        url: fetchUrl, cache: false,
                        success: fetchCallBack
                    });
                };

                TemplateModuleManager.prototype.CreateVoidFetchPromise = function (fetchUrl) {
                    return this.CreateFetchPromise(fetchUrl, null);
                };

                TemplateModuleManager.prototype.InitialObjectFetchCB = function (trackedObject, existingDataSource) {
                    var me = this;
                    if (trackedObject.ID) {
                        var id = trackedObject.ID;
                        trackedObject.UIExtension = new TheBall.Interface.UI.TrackingExtension();
                        trackedObject.UIExtension.FetchedUrl = existingDataSource.RelativeUrl;
                        trackedObject.UIExtension.ChangeListeners.push(function (refreshedObject, currTimestamp) {
                            existingDataSource.FetchPromise = me.CreateVoidFetchPromise(refreshedObject.RelativeLocation);
                            existingDataSource.RefreshTemplates(currTimestamp);
                        });
                        trackedObject.UIExtension.LastUpdatedTick = ""; //me.DCM.LastProcessedTick;
                        this.DCM.SetObjectInStorage(trackedObject);
                    }
                    existingDataSource.ObjectID = trackedObject.ID;
                };

                TemplateModuleManager.prototype.InitiateTemplateDataSource = function (relativeUrl, templateName) {
                    var existingDataSource = this.DataSourceFetchStorage[relativeUrl];
                    var me = this;
                    if (!existingDataSource) {
                        existingDataSource = new TemplateDataSource();
                        existingDataSource.DCM = me.DCM;
                        existingDataSource.TMM = me;
                        existingDataSource.RelativeUrl = relativeUrl;
                        this.DataSourceFetchStorage[relativeUrl] = existingDataSource;
                        existingDataSource.FetchPromise = this.CreateFetchPromise(relativeUrl, function (trackedObject) {
                            me.InitialObjectFetchCB(trackedObject, existingDataSource);
                        });
                    }
                    existingDataSource.UsedInTemplates.push(templateName);
                    return existingDataSource;
                };

                TemplateModuleManager.prototype.RegisterTemplate = function (templateName, jQuerySelector, dataSourceUrls, preRenderingDataProcessor, postRenderingDataProcessor, hiddenElementRendering) {
                    var _this = this;
                    if (this.TemplateHookStorage[templateName])
                        throw "Template name already registered: " + templateName;
                    this.TemplateHookStorage[templateName] = new TemplateHook(templateName, jQuerySelector, dataSourceUrls.map(function (url) {
                        return _this.InitiateTemplateDataSource(url, templateName);
                    }), preRenderingDataProcessor, postRenderingDataProcessor, hiddenElementRendering);
                };

                TemplateModuleManager.prototype.ActivateTemplate = function (templateName, dataSources, contextPreparer, postRenderingDataProcessor, hiddenElementRendering, selectorString) {
                    this.RefreshTemplate("", templateName, dataSources, contextPreparer, postRenderingDataProcessor, hiddenElementRendering, selectorString);
                };

                TemplateModuleManager.prototype.RefreshTemplate = function (currTimestamp, templateName, dataSources, contextPreparer, postRenderingDataProcessor, hiddenElementRendering, selectorString) {
                    var me = this;
                    var promises;
                    var $matchedElements = $(selectorString);
                    var $visibleElements = $matchedElements.filter(":visible");
                    var $hiddenElements = $matchedElements.filter(":hidden");

                    if ($hiddenElements.length > 0) {
                        var $hiddenElementsToUpdate = $hiddenElements.not("[data-oiptimestamp=='" + currTimestamp + "'][data-oipvisible=='false']");
                        hiddenElementRendering(dataSources, $hiddenElementsToUpdate);
                        $hiddenElementsToUpdate.each(function () {
                            var $item = $(this);
                            $item.attr('data-oiptimestamp', currTimestamp);
                            $item.attr('data-oipvisible', 'false');
                        });
                    }

                    // If no visible, don't do anything
                    if ($visibleElements.length == 0)
                        return;

                    var $visibleToUpdate = $visibleElements.not("[data-oiptimestamp=='" + currTimestamp + "'][data-oipvisible=='true']");
                    if ($visibleToUpdate.length == 0)
                        return;

                    console.log("Promise iteration");
                    promises = dataSources.map(function (obj) {
                        return obj.FetchPromise;
                    });
                    $.when.apply($, promises).then(function () {
                        console.log("Root object fetch");
                        var dustRootObject = contextPreparer(dataSources);
                        console.log("Rendering dust: " + templateName);
                        dust.render(templateName, dustRootObject, function (error, output) {
                            console.log("Done rendering");
                            console.log(output);
                            $visibleToUpdate.each(function () {
                                var $item = $(this);
                                $item.html(output);
                                $item.attr('data-oiptimestamp', currTimestamp);
                                $item.attr('data-oipvisible', 'true');
                            });
                            if (postRenderingDataProcessor)
                                postRenderingDataProcessor(dataSources, $visibleToUpdate);
                        });
                    });
                };

                TemplateModuleManager.prototype.ActivateNamedTemplates = function (templateNames) {
                    var me = this;
                    for (var i = 0; i < templateNames.length; i++) {
                        var index = templateNames[i];
                        var tHook = this.TemplateHookStorage[index];
                        me.ActivateTemplate(tHook.templateName, tHook.dataSources, tHook.preRenderingDataProcessor, tHook.postRenderingDataProcessor, tHook.hiddenElementRendering, tHook.jQuerySelector);
                    }
                };

                TemplateModuleManager.prototype.RefreshNamedTemplates = function (currTimestamp, templateNames) {
                    var me = this;
                    for (var i = 0; i < templateNames.length; i++) {
                        var index = templateNames[i];
                        var tHook = this.TemplateHookStorage[index];
                        me.RefreshTemplate(currTimestamp, tHook.templateName, tHook.dataSources, tHook.preRenderingDataProcessor, tHook.postRenderingDataProcessor, tHook.hiddenElementRendering, tHook.jQuerySelector);
                    }
                };

                TemplateModuleManager.prototype.ActivateAllTemplates = function () {
                    var me = this;
                    for (var index in this.TemplateHookStorage) {
                        var tHook = this.TemplateHookStorage[index];
                        me.ActivateTemplate(tHook.templateName, tHook.dataSources, tHook.preRenderingDataProcessor, tHook.postRenderingDataProcessor, tHook.hiddenElementRendering, tHook.jQuerySelector);
                    }
                };

                TemplateModuleManager.prototype.RefreshAllTemplates = function (currTimestamp) {
                    var me = this;
                    for (var index in me.TemplateHookStorage) {
                        var tHook = me.TemplateHookStorage[index];
                        me.RefreshTemplate(currTimestamp, tHook.templateName, tHook.dataSources, tHook.preRenderingDataProcessor, tHook.postRenderingDataProcessor, tHook.hiddenElementRendering, tHook.jQuerySelector);
                    }
                };
                return TemplateModuleManager;
            })();
            UI.TemplateModuleManager = TemplateModuleManager;
        })(Interface.UI || (Interface.UI = {}));
        var UI = Interface.UI;
    })(TheBall.Interface || (TheBall.Interface = {}));
    var Interface = TheBall.Interface;
})(TheBall || (TheBall = {}));
//# sourceMappingURL=TemplateModuleManager.js.map
