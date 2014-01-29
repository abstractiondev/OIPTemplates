/**
 * Created by kalle on 27.1.2014.
 */

/// <reference path="jquery.d.ts" />


module TheBall.Interface.UI {
    class StatusData {
        ChangeItemTrackingList: string[];
    }

    export class TrackingExtension {
        LastUpdatedTick: string;
        FetchedUrl: string;
    }
    export class TrackedObject {
        ID: string;
        RelativeLocation;
        UIExtension: TrackingExtension;
        GetRelativeUrl(): string {
            var me: any = this;
            return me.RelativeLocation;
        }
        UpdateObject(triggeredTick: string) {
            // TODO: Relative location fetch and firing the display change renderings
        }
    }

    var TrackedObjectStorage: { [ID: string]: TrackedObject } = {};

    class DataConnectionManager {

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
                var currTracked = TrackedObjectStorage[currID];
                if (currTracked && currTracked.UIExtension.LastUpdatedTick < currTimestamp) {
                    currTracked.UpdateObject(currTimestamp);
                }
            }
        }
        PerformAsyncPoll() {
            $.ajax({
                url: "../../TheBall.Interface/StatusSummary/default.json", cache: false,
                success: this.ProcessStatusData
            });
        }

        ProcessFetchedData(jsonData: TrackedObject) {
            if (jsonData.RelativeLocation) {
                var currTracked = TrackedObjectStorage[jsonData.ID];
                if (currTracked) {
                    var currExtension = currTracked.UIExtension;
                    TrackedObjectStorage[jsonData.ID] = jsonData;
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