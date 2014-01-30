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
        GetRelativeUrl(): string {
            var me: any = this;
            return me.RelativeLocation;
        }
        UpdateObject(triggeredTick: string, dcm:DataConnectionManager) {
            // TODO: Relative location fetch and firing the display change renderings
            $.ajax( { url : this.GetRelativeUrl(), cache: false,
                success: function(updatedObject:TrackedObject) {
                    dcm.TrackedObjectStorage[updatedObject.ID] = updatedObject;
                    this.UIExtension.ChangeListeners.forEach(func => func(updatedObject));
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
                console.log("Checking for update basis");
                if (currTracked && currTracked.UIExtension.LastUpdatedTick < currTimestamp) {
                    console.log("Updating...");
                    currTracked.UpdateObject(currTimestamp, this);
                }
            }
        }
        PerformAsyncPoll() {
            var priv = this;
            console.log(priv.TrackedObjectStorage);
            $.ajax({
                url: "../TheBall.Interface/StatusSummary/default.json", cache: false,
                success: function(data:StatusData) {
                    console.log("Ajax done...");
                    console.log(priv.TrackedObjectStorage);
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