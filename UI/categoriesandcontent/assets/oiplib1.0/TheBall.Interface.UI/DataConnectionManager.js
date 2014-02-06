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
                    this.ChangeListeners = [];
                }
                return TrackingExtension;
            })();
            UI.TrackingExtension = TrackingExtension;
            var TrackedObject = (function () {
                function TrackedObject() {
                }
                TrackedObject.GetRelativeUrl = function (currObject) {
                    return currObject.RelativeLocation;
                };
                TrackedObject.UpdateObject = function (currObject, triggeredTick, dcm) {
                    //var fetchUrl = TrackedObject.GetRelativeUrl(currObject);
                    var fetchUrl = currObject.UIExtension.FetchedUrl;
                    console.log("Fetching from url: " + fetchUrl);
                    $.ajax({
                        url: fetchUrl, cache: false,
                        success: function (updatedObject) {
                            dcm.TrackedObjectStorage[updatedObject.ID] = updatedObject;
                            updatedObject.UIExtension = currObject.UIExtension;
                            updatedObject.UIExtension.LastUpdatedTick = triggeredTick;
                            updatedObject.UIExtension.ChangeListeners.forEach(function (func) {
                                return func(updatedObject);
                            });
                        }
                    });
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
                    var currProcessedTick;
                    for (var i = 0; i < idList.length; i++) {
                        var currItem = idList[i];
                        if (currItem.charAt(0) == "T") {
                            currTimestamp = currItem;
                            if (currTimestamp <= this.LastProcessedTick)
                                break;
                            continue;
                        }

                        // If curr processed is undefined, we set it from here, thus it will be last
                        if (!currProcessedTick)
                            currProcessedTick = currTimestamp;
                        var currID = currItem.substr(2);
                        var currModification = currItem.substr(0, 1);
                        var currTracked = this.TrackedObjectStorage[currID];
                        if (currTracked) {
                            console.log("Checking for update basis: " + currTracked.ID + " " + currTracked.UIExtension.LastUpdatedTick + " vs " + currTimestamp);
                        } else {
                            console.log("Not tracked update for id: " + currID);
                        }
                        if (currTracked && currTracked.UIExtension.LastUpdatedTick < currTimestamp) {
                            console.log("Updating...");
                            TrackedObject.UpdateObject(currTracked, currTimestamp, this);
                        }
                    }
                    if (currProcessedTick) {
                        console.log("Processed up to tick: " + currProcessedTick);
                        this.LastProcessedTick = currProcessedTick;
                    }
                };
                DataConnectionManager.prototype.PerformAsyncPoll = function () {
                    var priv = this;
                    $.ajax({
                        url: "../TheBall.Interface/StatusSummary/default.json", cache: false,
                        success: function (data) {
                            console.log("Polled status...");
                            priv.ProcessStatusData(data);
                        }
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
