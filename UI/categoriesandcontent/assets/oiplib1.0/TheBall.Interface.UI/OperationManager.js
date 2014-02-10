/**
* Created by kalle on 10.2.2014.
*/
var TheBall;
(function (TheBall) {
    (function (Interface) {
        /// <reference path="jquery.d.ts" />
        /// <reference path="DataConnectionManager.ts" />
        (function (UI) {
            var OperationManager = (function () {
                function OperationManager(dcm) {
                    this.getHiddenInput = function (key, dataContent) {
                        var dataValue = dataContent ? dataContent.toString() : "";
                        var $input = $('<input type="hidden">').attr('name', key).val(dataValue);
                        return $input;
                    };
                    if (!dcm)
                        dcm = new TheBall.Interface.UI.DataConnectionManager();
                    this.DCM = dcm;
                    var $body = $("body");
                    var formHtml = "<form enctype='multipart/form-data' id='OperationManager_DynamicIFrameForm' " + "method='post' target='OperationManager_IFrame'></form> ";
                    var iFrameHtml = "<iframe name='OperationManager_IFrame' src='about:blank'></iframe>";
                    $body.append(formHtml);
                    $body.append(iFrameHtml);
                    this.$submitForm = $("#OperationManager_DynamicIFrameForm");
                }
                OperationManager.prototype.CreateObject = function (domainName, objectName, dataContents) {
                    var $form = this.$submitForm;
                    $form.empty();
                    $form.append(this.getHiddenInput("ObjectDomainName", domainName));
                    $form.append(this.getHiddenInput("ObjectName", objectName));
                    $form.append(this.getHiddenInput("ExecuteOperation", "CreateSpecifiedInformationObjectWithValues"));
                    for (var key in dataContents) {
                        var $hiddenInput = this.getHiddenInput(key, dataContents[key]);
                        $form.append($hiddenInput);
                    }
                    $form.submit();
                    $form.empty();
                };
                OperationManager.prototype.SaveObject = function (objectID, objectETag, dataContents) {
                    var obj = this.DCM.TrackedObjectStorage[objectID];
                    if (!obj)
                        throw "Object not found with ID: " + objectID;
                    if (obj.MasterETag != objectETag)
                        throw "Object ETag mismatch on save: " + objectID;
                    var $form = this.$submitForm;
                    $form.empty();
                    var id = obj.ID;
                    var contentSourceInfo = obj.RelativeLocation + ":" + obj.MasterETag;
                    $form.append(this.getHiddenInput("ContentSourceInfo", contentSourceInfo));
                    for (var key in dataContents) {
                        var $hiddenInput = this.getHiddenInput(id + "_" + key, dataContents[key]);
                        $form.append($hiddenInput);
                    }
                    $form.submit();
                    $form.empty();
                };
                OperationManager.prototype.DeleteObject = function (objectID) {
                    var obj = this.DCM.TrackedObjectStorage[objectID];
                    if (!obj)
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
                };
                return OperationManager;
            })();
            UI.OperationManager = OperationManager;
        })(Interface.UI || (Interface.UI = {}));
        var UI = Interface.UI;
    })(TheBall.Interface || (TheBall.Interface = {}));
    var Interface = TheBall.Interface;
})(TheBall || (TheBall = {}));
//# sourceMappingURL=OperationManager.js.map
