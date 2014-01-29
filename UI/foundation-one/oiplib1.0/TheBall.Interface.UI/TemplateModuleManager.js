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
                }
                return TemplateDataSource;
            })();
            UI.TemplateDataSource = TemplateDataSource;

            function InitiateTemplateDataSource(relativeUrl) {
                var existingTemplate = DataSourceFetchStorage[relativeUrl];
                if (!existingTemplate) {
                    existingTemplate = new TemplateDataSource();
                    existingTemplate.RelativeUrl = relativeUrl;
                    DataSourceFetchStorage[relativeUrl] = existingTemplate;
                    existingTemplate.FetchPromise = $.ajax({
                        url: relativeUrl, cache: false,
                        success: function (jsonData) {
                            existingTemplate.ObjectID = jsonData.ID;
                        }
                    });
                }
                return existingTemplate;
            }
            UI.InitiateTemplateDataSource = InitiateTemplateDataSource;

            var DataSourceFetchStorage = {};

            var TemplateModuleManager = (function () {
                function TemplateModuleManager() {
                }
                TemplateModuleManager.prototype.ActivateTemplate = function (templateName, dataSources, contextPreparer, selectorString) {
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
                return TemplateModuleManager;
            })();
            UI.TemplateModuleManager = TemplateModuleManager;
        })(Interface.UI || (Interface.UI = {}));
        var UI = Interface.UI;
    })(TheBall.Interface || (TheBall.Interface = {}));
    var Interface = TheBall.Interface;
})(TheBall || (TheBall = {}));
//# sourceMappingURL=TemplateModuleManager.js.map
