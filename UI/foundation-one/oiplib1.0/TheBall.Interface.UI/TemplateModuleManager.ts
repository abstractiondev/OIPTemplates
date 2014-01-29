/**
 * Created by kalle on 29.1.2014.
 */


/// <reference path="jquery.d.ts" />
/// <reference path="DataConnectionManager.ts" />
/// <reference path="dustjs-linkedin.d.ts" />
/// <reference path="DustLIRenderer.ts" />

module TheBall.Interface.UI {

    export interface DataPreparerCallback {
        (jsonContents: TemplateDataSource[]): any;
    }

    export class TemplateHook {
        constructor(public templateName:string,
            public jQuerySelector:string,
            public dataSources:TemplateDataSource[],
            public preRenderingDataProcessor:DataPreparerCallback) {
        }
    }

    export class TemplateDataSource {
        RelativeUrl: string;
        ObjectID: string;
        FetchPromise: any;
        DCM: DataConnectionManager;
        GetObjectContent() : TrackedObject {
            return this.DCM.TrackedObjectStorage[this.ObjectID];
        }
    }

    export class TemplateModuleManager {
        DCM : DataConnectionManager;
        constructor() {
            this.DCM = new TheBall.Interface.UI.DataConnectionManager();
        }

        DataSourceFetchStorage: { [RelativeUrl: string]: TemplateDataSource } = {};
        private TemplateHookStorage: TemplateHook[] = [];

        InitiateTemplateDataSource(relativeUrl: string): TemplateDataSource {
            var existingTemplate = this.DataSourceFetchStorage[relativeUrl];
            var me = this;
            if (!existingTemplate) {
                existingTemplate = new TemplateDataSource();
                existingTemplate.RelativeUrl = relativeUrl;
                this.DataSourceFetchStorage[relativeUrl] = existingTemplate;
                existingTemplate.FetchPromise = $.ajax({
                    url: relativeUrl, cache: false,
                    success: function (jsonData: TrackedObject) {
                        if(jsonData.ID) {
                            var id = jsonData.ID;
                            me.DCM.TrackedObjectStorage[id] = jsonData;
                        }
                        existingTemplate.DCM = me.DCM;
                        existingTemplate.ObjectID = jsonData.ID;
                    }
                });
            }
            return existingTemplate;
        }

        RegisterTemplate(templateName:string, jQuerySelector:string, dataSourceUrls:string[], preRenderingDataProcessor:DataPreparerCallback) {
            this.TemplateHookStorage.push(new TemplateHook(templateName,
                jQuerySelector,
                dataSourceUrls.map(url => this.InitiateTemplateDataSource(url)),
                preRenderingDataProcessor));
        }

        ActivateTemplate(templateName: string, dataSources: TemplateDataSource[], contextPreparer: DataPreparerCallback, selectorString: string) {
            var me = this;
            var promises: any[];
            console.log("Promise iteration");
            promises = dataSources.map(obj => obj.FetchPromise);
            $.when.apply($, promises).then(() => {
                console.log("Root object fetch");
                var dustRootObject = contextPreparer(dataSources);
                console.log("Rendering dust: " + templateName);
                dust.render(templateName, dustRootObject,(error, output) => {
                    console.log("Done rendering");
                    console.log(output);
                    $(selectorString).each(function() {
                        var item = $(this);
                        console.log("Replacing: " + item.html())
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
        }

        ActivateAllTemplates() {
            var me = this;
            this.TemplateHookStorage.forEach(function(tHook) {
                me.ActivateTemplate(tHook.templateName,
                    tHook.dataSources,
                    tHook.preRenderingDataProcessor,
                    tHook.jQuerySelector);
            });
        }
    }

}