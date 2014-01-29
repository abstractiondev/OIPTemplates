/**
* Created by kalle on 27.1.2014.
*/
var TheBall;
(function (TheBall) {
    (function (Interface) {
        /// <reference path="jquery.d.ts" />
        (function (UI) {
            var StatusData = (function () {
                function StatusData() {
                }
                return StatusData;
            })();
            UI.StatusData = StatusData;

            var TrackingExtension = (function () {
                function TrackingExtension() {
                }
                return TrackingExtension;
            })();
            UI.TrackingExtension = TrackingExtension;
            var TrackedObject = (function () {
                function TrackedObject() {
                }
                TrackedObject.prototype.GetRelativeUrl = function () {
                    var me = this;
                    return me.RelativeLocation;
                };
                TrackedObject.prototype.UpdateObject = function (triggeredTick) {
                    // TODO: Relative location fetch and firing the display change renderings
                };
                return TrackedObject;
            })();
            UI.TrackedObject = TrackedObject;

            var DataConnectionManager = (function () {
                function DataConnectionManager() {
                    this.TrackedObjectStorage = {};
                    this.LastProcessedTick = "";
                }
                DataConnectionManager.prototype.ProcessStatusData = function (statusData) {
                    var idList = statusData.ChangeItemTrackingList;
                    var currTimestamp;
                    for (var i = 0; i < idList.length; i++) {
                        var currItem = idList[i];
                        if (currItem.charAt(0) == "T") {
                            currTimestamp = currItem;
                            if (currTimestamp <= this.LastProcessedTick)
                                break;
                            continue;
                        }
                        var currID = currItem.substr(2);
                        var currModification = currItem.substr(0, 1);
                        var currTracked = this.TrackedObjectStorage[currID];
                        if (currTracked && currTracked.UIExtension.LastUpdatedTick < currTimestamp) {
                            currTracked.UpdateObject(currTimestamp);
                        }
                    }
                };
                DataConnectionManager.prototype.PerformAsyncPoll = function () {
                    $.ajax({
                        url: "../../TheBall.Interface/StatusSummary/default.json", cache: false,
                        success: this.ProcessStatusData
                    });
                };

                DataConnectionManager.prototype.ProcessFetchedData = function (jsonData) {
                    if (jsonData.RelativeLocation) {
                        var currTracked = this.TrackedObjectStorage[jsonData.ID];
                        if (currTracked) {
                            var currExtension = currTracked.UIExtension;
                            this.TrackedObjectStorage[jsonData.ID] = jsonData;
                            currTracked = jsonData;
                            jsonData.UIExtension = currExtension;
                        }
                    }
                };

                DataConnectionManager.prototype.FetchAndProcessJSONData = function (dataUrl) {
                    $.ajax({
                        url: dataUrl, cache: false,
                        success: this.ProcessFetchedData
                    });
                };
                return DataConnectionManager;
            })();
            UI.DataConnectionManager = DataConnectionManager;
        })(Interface.UI || (Interface.UI = {}));
        var UI = Interface.UI;
    })(TheBall.Interface || (TheBall.Interface = {}));
    var Interface = TheBall.Interface;
})(TheBall || (TheBall = {}));
//# sourceMappingURL=DataConnectionManager.js.map
