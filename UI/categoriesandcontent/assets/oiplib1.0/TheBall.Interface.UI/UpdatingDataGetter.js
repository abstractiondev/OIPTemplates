/**
* Created by kalle on 12.5.2014.
*/
/// <reference path="jquery.d.ts" />
var TheBall;
(function (TheBall) {
    (function (Interface) {
        (function (UI) {
            var ResourceLocatedObject = (function () {
                function ResourceLocatedObject(isJSONUrl, urlKey, onUpdate, boundToElements, boundToObjects, dataSourceObjects) {
                    this.isJSONUrl = isJSONUrl;
                    this.urlKey = urlKey;
                    this.onUpdate = onUpdate;
                    this.boundToElements = boundToElements;
                    this.boundToObjects = boundToObjects;
                    this.dataSourceObjects = dataSourceObjects;
                    // Initialize to empty arrays if not given
                    this.onUpdate = onUpdate || [];
                    this.boundToElements = boundToElements || [];
                    this.boundToObjects = boundToObjects || [];
                    this.dataSourceObjects = dataSourceObjects || [];
                }
                return ResourceLocatedObject;
            })();
            UI.ResourceLocatedObject = ResourceLocatedObject;

            var UpdatingDataGetter = (function () {
                function UpdatingDataGetter() {
                    this.TrackedURLDictionary = {};
                }
                UpdatingDataGetter.prototype.registerSourceUrls = function (sourceUrls) {
                    var _this = this;
                    sourceUrls.forEach(function (sourceUrl) {
                        if (!_this.TrackedURLDictionary[sourceUrl]) {
                            var sourceIsJson = sourceUrl.indexOf("/") != -1;
                            if (!sourceIsJson)
                                throw "Local source URL needs to be defined before using as source";
                            var source = new ResourceLocatedObject(sourceIsJson, sourceUrl);
                        }
                    });
                };

                UpdatingDataGetter.prototype.RegisterDataToElements = function (boundToElements, sourceUrls, onUpdate) {
                    this.registerSourceUrls(sourceUrls);
                };

                UpdatingDataGetter.prototype.RegisterDataURL = function (url, sourceUrls, onUpdate) {
                    this.registerSourceUrls(sourceUrls);
                };
                return UpdatingDataGetter;
            })();
            UI.UpdatingDataGetter = UpdatingDataGetter;
        })(Interface.UI || (Interface.UI = {}));
        var UI = Interface.UI;
    })(TheBall.Interface || (TheBall.Interface = {}));
    var Interface = TheBall.Interface;
})(TheBall || (TheBall = {}));
//# sourceMappingURL=UpdatingDataGetter.js.map
