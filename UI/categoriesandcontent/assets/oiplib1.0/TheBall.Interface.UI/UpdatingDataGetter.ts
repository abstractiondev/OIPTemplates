/**
 * Created by kalle on 12.5.2014.
 */
/// <reference path="jquery.d.ts" />

module TheBall.Interface.UI {
    export class ResourceLocatedObject {
        constructor(public isJSONUrl:boolean, public urlKey:string,
            public onUpdate? :UpdateDataObjectEvent[],
            public boundToElements? :JQuery[],
            public boundToObjects? :ResourceLocatedObject[],
            public dataSourceObjects? :ResourceLocatedObject[]) {
            // Initialize to empty arrays if not given
            this.onUpdate = onUpdate || [];
            this.boundToElements = boundToElements || [];
            this.boundToObjects = boundToObjects || [];
            this.dataSourceObjects = dataSourceObjects || [];
        }
    }

    export interface UpdateDataObjectEvent {
        (objectToUpdate: ResourceLocatedObject, sourceObjects:ResourceLocatedObject[]): boolean;
    }

    export class UpdatingDataGetter {
        TrackedURLDictionary: { [URL:string]: ResourceLocatedObject} = {};

        registerSourceUrls(sourceUrls:string[]) {
            sourceUrls.forEach(sourceUrl => {
                if(!this.TrackedURLDictionary[sourceUrl]) {
                    var sourceIsJson = sourceUrl.indexOf("/") != -1;
                    if(!sourceIsJson)
                        throw "Local source URL needs to be defined before using as source";
                    var source = new ResourceLocatedObject(sourceIsJson, sourceUrl);
                }
            });
        }

        RegisterDataToElements(boundToElements:JQuery, sourceUrls:string[], onUpdate:UpdateDataObjectEvent) {
            this.registerSourceUrls(sourceUrls);
        }

        RegisterDataURL(url:string, sourceUrls:string[],
                    onUpdate:UpdateDataObjectEvent) {
            this.registerSourceUrls(sourceUrls);
        }
    }
}