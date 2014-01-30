/**
* Created by kalle on 29.1.2014.
*/
var TheBall;
(function (TheBall) {
    (function (Interface) {
        /// <reference path="jquery.d.ts" />
        /// <reference path="DataConnectionManager.ts" />
        /// <reference path="dustjs-linkedin.d.ts" />
        /// <reference path="DustLIRenderer.ts" />
        (function (UI) {
            var TemplateHook = (function () {
                function TemplateHook(templateName, jQuerySelector, dataSources, preRenderingDataProcessor) {
                    this.templateName = templateName;
                    this.jQuerySelector = jQuerySelector;
                    this.dataSources = dataSources;
                    this.preRenderingDataProcessor = preRenderingDataProcessor;
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
                TemplateDataSource.prototype.RefreshObjectChange = function (trackedObject) {
                    this.TMM.ActivateNamedTemplates(this.UsedInTemplates);
                };
                return TemplateDataSource;
            })();
            UI.TemplateDataSource = TemplateDataSource;

            var TemplateModuleManager = (function () {
                function TemplateModuleManager() {
                    this.DataSourceFetchStorage = {};
                    this.TemplateHookStorage = {};
                    this.DCM = new TheBall.Interface.UI.DataConnectionManager();
                }
                TemplateModuleManager.prototype.InitiateTemplateDataSource = function (relativeUrl, templateName) {
                    var existingTemplate = this.DataSourceFetchStorage[relativeUrl];
                    var me = this;
                    if (!existingTemplate) {
                        existingTemplate = new TemplateDataSource();
                        existingTemplate.DCM = me.DCM;
                        existingTemplate.TMM = me;
                        existingTemplate.RelativeUrl = relativeUrl;
                        this.DataSourceFetchStorage[relativeUrl] = existingTemplate;
                        existingTemplate.FetchPromise = $.ajax({
                            url: relativeUrl, cache: false,
                            success: function (jsonData) {
                                if (jsonData.ID) {
                                    var id = jsonData.ID;
                                    me.DCM.TrackedObjectStorage[id] = jsonData;
                                }
                                existingTemplate.ObjectID = jsonData.ID;
                            }
                        });
                    }
                    existingTemplate.UsedInTemplates.push(templateName);
                    return existingTemplate;
                };

                TemplateModuleManager.prototype.RegisterTemplate = function (templateName, jQuerySelector, dataSourceUrls, preRenderingDataProcessor) {
                    var _this = this;
                    if (this.TemplateHookStorage[templateName])
                        throw "Template name already registered: " + templateName;
                    this.TemplateHookStorage[templateName] = new TemplateHook(templateName, jQuerySelector, dataSourceUrls.map(function (url) {
                        return _this.InitiateTemplateDataSource(url, templateName);
                    }), preRenderingDataProcessor);
                };

                TemplateModuleManager.prototype.ActivateTemplate = function (templateName, dataSources, contextPreparer, selectorString) {
                    var me = this;
                    var promises;
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
                            $(selectorString).each(function () {
                                var item = $(this);
                                console.log("Replacing: " + item.html());
                                item.html(output);
                            });
                            console.log("Done jQuerying...");
                        });
                        /*
                        $(selectorString).each(() => {
                        console.log("Rendering dust: " + templateName);
                        dust.render(templateName, dustRootObject,(error, output) => {
                        console.log("Done rendering");
                        console.log(output);
                        var item = $(this);
                        if(item) {
                        console.log("Replacing: " + item.html())
                        item.html(output);
                        } else {
                        console.log("No item!");
                        }
                        });
                        });*/
                    });
                };

                TemplateModuleManager.prototype.ActivateNamedTemplates = function (templateNames) {
                    var me = this;
                    for (var index in templateNames) {
                        var tHook = this.TemplateHookStorage[index];
                        me.ActivateTemplate(tHook.templateName, tHook.dataSources, tHook.preRenderingDataProcessor, tHook.jQuerySelector);
                    }
                };

                TemplateModuleManager.prototype.ActivateAllTemplates = function () {
                    var me = this;
                    for (var index in this.TemplateHookStorage) {
                        var tHook = this.TemplateHookStorage[index];
                        me.ActivateTemplate(tHook.templateName, tHook.dataSources, tHook.preRenderingDataProcessor, tHook.jQuerySelector);
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
