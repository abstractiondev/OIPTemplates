/**
 * Created by kalle on 27.1.2014.
 */

/// <reference path="jquery.d.ts" />


module TheBall.Interface.UI {
    export interface TrackerEvent {
        (trackedObject: TrackedObject): void;
    }

    export class StatusData {
        ChangeItemTrackingList: string[];
    }

    export class TrackingExtension {
        LastUpdatedTick: string;
        FetchedUrl: string;
        ChangeListeners : TrackerEvent[] = [];
    }
    export class TrackedObject {
        ID: string;
        RelativeLocation;
        UIExtension: TrackingExtension;
        static GetRelativeUrl(currObject:TrackedObject): string {
            return currObject.RelativeLocation;
        }
        static UpdateObject(currObject:TrackedObject, triggeredTick: string, dcm:DataConnectionManager) {
            //var fetchUrl = TrackedObject.GetRelativeUrl(currObject);
            var fetchUrl = currObject.UIExtension.FetchedUrl;
            console.log("Fetching from url: " + fetchUrl);
            $.ajax( { url : fetchUrl, cache: false,
                success: function(updatedObject:TrackedObject) {
                    dcm.TrackedObjectStorage[updatedObject.ID] = updatedObject;
                    updatedObject.UIExtension = currObject.UIExtension;
                    updatedObject.UIExtension.LastUpdatedTick = triggeredTick;
                    updatedObject.UIExtension.ChangeListeners.forEach(func => func(updatedObject));
                }
            });
        }
    }

    export class DataConnectionManager {
        TrackedObjectStorage: { [ID: string]: TrackedObject } = {};
        LastProcessedTick: string = "";

        ProcessStatusData(statusData: StatusData) {
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
                if(!currProcessedTick)
                    currProcessedTick = currTimestamp;
                var currID = currItem.substr(2);
                var currModification = currItem.substr(0, 1);
                var currTracked = this.TrackedObjectStorage[currID];
                if(currTracked) {
                    console.log("Checking for update basis: " + currTracked.ID + " " +
                        currTracked.UIExtension.LastUpdatedTick + " vs " + currTimestamp);
                } else {
                    console.log("Not tracked update for id: " + currID);
                }
                if (currTracked && currTracked.UIExtension.LastUpdatedTick < currTimestamp) {
                    console.log("Updating...");
                    TrackedObject.UpdateObject(currTracked, currTimestamp, this);
                }
            }
            if(currProcessedTick) {
                console.log("Processed up to tick: " + currProcessedTick)
                this.LastProcessedTick = currProcessedTick;
            }
        }
        PerformAsyncPoll() {
            var priv = this;
            $.ajax({
                url: "../../TheBall.Interface/StatusSummary/default.json", cache: false,
                success: function(data:StatusData) {
                    console.log("Polled status...");
                    priv.ProcessStatusData(data);
                }
            });
        }

        ProcessFetchedData(jsonData: TrackedObject) {
            if (jsonData.RelativeLocation) {
                var currTracked = this.TrackedObjectStorage[jsonData.ID];
                if (currTracked) {
                    var currExtension = currTracked.UIExtension;
                    this.TrackedObjectStorage[jsonData.ID] = jsonData;
                    currTracked = jsonData;
                    jsonData.UIExtension = currExtension;
                }
            }
        }

        FetchAndProcessJSONData(dataUrl: string) {
            $.ajax({
                url: dataUrl, cache: false,
                success: this.ProcessFetchedData
            });
        }

    }
}