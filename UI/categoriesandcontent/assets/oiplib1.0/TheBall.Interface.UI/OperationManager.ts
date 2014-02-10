/**
 * Created by kalle on 10.2.2014.
 */

/// <reference path="jquery.d.ts" />
/// <reference path="DataConnectionManager.ts" />


module TheBall.Interface.UI {
    export class OperationManager {
        private $submitForm;
        private DCM:DataConnectionManager;
        constructor(dcm:DataConnectionManager) {
            if(!dcm)
                dcm = new TheBall.Interface.UI.DataConnectionManager();
            this.DCM = dcm;
            var $body = $("body");
            var formHtml = "<form enctype='multipart/form-data' id='OperationManager_DynamicIFrameForm' " +
                "method='post' target='OperationManager_IFrame'></form> ";
            var iFrameHtml = "<iframe name='OperationManager_IFrame' src='about:blank'></iframe>";
            $body.append(formHtml);
            $body.append(iFrameHtml);
            this.$submitForm = $("#OperationManager_DynamicIFrameForm");
        }

        getHiddenInput = function (key:string, dataContent) {
            var dataValue = dataContent ? dataContent.toString() : "";
            var $input = $('<input type="hidden">').attr('name', key).val(dataValue);
            return $input;
        };

        CreateObject(domainName:string, objectName:string, dataContents:any) {
            var $form = this.$submitForm;
            $form.empty();
            $form.append(this.getHiddenInput("ObjectDomainName", domainName));
            $form.append(this.getHiddenInput("ObjectName", objectName));
            $form.append(this.getHiddenInput("ExecuteOperation", "CreateSpecifiedInformationObjectWithValues"));
            for(var key in dataContents) {
                var $hiddenInput = this.getHiddenInput(key, dataContents[key]);
                $form.append($hiddenInput);
            }
            $form.submit();
            $form.empty();
        }
        SaveObject(objectID:string, objectETag:string, dataContents:any) {
            var obj = this.DCM.TrackedObjectStorage[objectID];
            if(!obj)
                throw "Object not found with ID: " + objectID;
            if(obj.MasterETag != objectETag)
                throw "Object ETag mismatch on save: " + objectID;
            var $form = this.$submitForm;
            $form.empty();
            var id = obj.ID;
            var contentSourceInfo = obj.RelativeLocation + ":" + obj.MasterETag;
            $form.append(this.getHiddenInput("ContentSourceInfo", contentSourceInfo));
            for(var key in dataContents) {
                var $hiddenInput = this.getHiddenInput(id + "_" + key, dataContents[key]);
                $form.append($hiddenInput);
            }
            $form.submit();
            $form.empty();
        }
        DeleteObject(objectID:string) {
            var obj = this.DCM.TrackedObjectStorage[objectID];
            if(!obj)
                throw "Object not found with ID: " + objectID;
            var $form = this.$submitForm;
            $form.empty();
            var contentSourceInfo = obj.RelativeLocation + ":" + obj.MasterETag;
            var objectID = obj.ID;
            var domainName = obj.SemanticDomainName;
            var objectName = obj.Name;
            $form.append(this.getHiddenInput("ObjectDomainName", domainName));
            $form.append(this.getHiddenInput("ObjectName", objectName));
            $form.append(this.getHiddenInput("ObjectID", objectID));
            $form.append(this.getHiddenInput("ExecuteOperation", "DeleteSpecifiedInformationObject"));
            $form.submit();
            $form.empty();
        }
        /*
         <input id="ObjectDelete_ExecuteOperation" name="ExecuteOperation"
         value="DeleteSpecifiedInformationObject" type="hidden" />
         <input id="ObjectDelete_ObjectDomainName" name="ObjectDomainName"
         value="" type="hidden" />
         <input id="ObjectDelete_ObjectName" name="ObjectName"
         value="" type="hidden" />
         <input id="ObjectDelete_ObjectID" name="ObjectID"
         value="" type="hidden" />




         */
    }
}
