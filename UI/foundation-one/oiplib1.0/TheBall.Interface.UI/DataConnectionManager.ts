/**
 * Created by kalle on 27.1.2014.
 */

/// <reference path="jquery.d.ts" />


module TheBall.Interface.UI {
    class StatusData {
        ChangeItemTrackingList: string[];
    }

    class TrackingExtension {
        LastUpdatedTick: string;
    }
    class TrackedObject {
        ID: string;
        UIExtension: TrackingExtension;
        GetRelativeUrl(): string {
            var me: any = this;
            return me.RelativeLocation;
        }
        UpdateObject(triggeredTick:string) {
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
    }
}