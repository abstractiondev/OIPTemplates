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
        //JQuerySelector:string;
        //DataSourceDeclaration:TemplateDataSource[]
        //datasourceprocessor
        //templatename
    }
    export class TemplateDataSource {
        RelativeUrl: string;
        ObjectID: string;
        FetchPromise: any;
    }

    export function InitiateTemplateDataSource(relativeUrl: string): TemplateDataSource {
        var existingTemplate = DataSourceFetchStorage[relativeUrl];
        if (!existingTemplate) {
            existingTemplate = new TemplateDataSource();
            existingTemplate.RelativeUrl = relativeUrl;
            DataSourceFetchStorage[relativeUrl] = existingTemplate;
            existingTemplate.FetchPromise = $.ajax({
                url: relativeUrl, cache: false,
                success: function (jsonData: TrackedObject) {
                    existingTemplate.ObjectID = jsonData.ID;
                }
            });
        }
        return existingTemplate;
    }

    var DataSourceFetchStorage: { [RelativeUrl: string]: TemplateDataSource } = {};

    export class TemplateModuleManager {
        ActivateTemplate(templateName: string, dataSources: TemplateDataSource[], contextPreparer: DataPreparerCallback, selectorString: string) {
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
    }

}