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
                function OperationManager(dcm, binaryFileSelectorBase) {
                    this.getHiddenInput = function (key, dataContent) {
                        var dataValue = dataContent ? dataContent.toString() : "";
                        var $input = $('<input type="hidden">').attr('name', key).val(dataValue);
                        return $input;
                    };
                    if (!dcm)
                        dcm = new TheBall.Interface.UI.DataConnectionManager();
                    if (!binaryFileSelectorBase)
                        binaryFileSelectorBase = ".oipfile";
                    this.DCM = dcm;
                    this.BinaryFileSelectorBase = binaryFileSelectorBase;
                    var $body = $("body");
                    var formHtml = "<form style='margin:0px;width:0px;height:0px;background-color: transparent;border: 0px none transparent;padding: 0px;overflow: hidden;visibility:hidden'  enctype='multipart/form-data' id='OperationManager_DynamicIFrameForm' " + "method='post' target='OperationManager_IFrame'></form> ";
                    var iFrameHtml = "<iframe style='margin:0px;width:0px;height:0px;background-color: transparent;border: 0px none transparent;padding: 0px;overflow: hidden;visibility: hidden' name='OperationManager_IFrame' src='about:blank'></iframe>";
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

                OperationManager.prototype.SaveIndependentObject = function (objectID, objectRelativeLocation, objectETag, objectData) {
                    var $form = this.$submitForm;
                    $form.empty();
                    var id = objectID;
                    var contentSourceInfo = objectRelativeLocation + ":" + objectETag;
                    $form.append(this.getHiddenInput("ContentSourceInfo", contentSourceInfo));
                    for (var key in objectData) {
                        var $hiddenInput = this.getHiddenInput(id + "_" + key, objectData[key]);
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
                    this.SaveIndependentObject(obj.ID, obj.RelativeLocation, obj.MasterETag, dataContents);
                };

                OperationManager.prototype.DeleteIndependentObject = function (domainName, objectName, objectID) {
                    var $form = this.$submitForm;
                    $form.empty();
                    $form.append(this.getHiddenInput("ObjectDomainName", domainName));
                    $form.append(this.getHiddenInput("ObjectName", objectName));
                    $form.append(this.getHiddenInput("ObjectID", objectID));
                    $form.append(this.getHiddenInput("ExecuteOperation", "DeleteSpecifiedInformationObject"));
                    $form.submit();
                    $form.empty();
                };

                OperationManager.prototype.DeleteObject = function (objectID) {
                    var obj = this.DCM.TrackedObjectStorage[objectID];
                    if (!obj)
                        throw "Object not found with ID: " + objectID;
                    var contentSourceInfo = obj.RelativeLocation + ":" + obj.MasterETag;
                    var objectID = obj.ID;
                    var domainName = obj.SemanticDomainName;
                    var objectName = obj.Name;
                    this.DeleteIndependentObject(domainName, objectName, objectID);
                };

                OperationManager.prototype.ExecuteOperationWithForm = function (operationName, operationParameters) {
                    var $form = this.$submitForm;
                    $form.empty();
                    $form.append(this.getHiddenInput("ExecuteOperation", operationName));
                    for (var key in operationParameters) {
                        var $hiddenInput = this.getHiddenInput(key, operationParameters[key]);
                        $form.append($hiddenInput);
                    }
                    $form.submit();
                    $form.empty();
                };
                OperationManager.prototype.ExecuteOperationWithAjax = function (operationFullName, contentObject) {
                    var jsonData = JSON.stringify(contentObject);
                    $.ajax({
                        type: "POST",
                        url: "?operation=" + operationFullName,
                        dataType: "json",
                        contentType: "application/json",
                        data: jsonData,
                        success: function () {
                        },
                        error: function () {
                        }
                    });
                };

                OperationManager.prototype.setButtonMode = function ($button, mode) {
                    var buttonText = mode == "add" ? "Add Image" : "Remove Image";
                    $button.attr('data-mode', mode);
                    $button.html(buttonText);
                };

                OperationManager.prototype.reset_field = function (e) {
                    e.wrap('<form>').parent('form').trigger('reset');
                    e.unwrap();
                };

                OperationManager.prototype.setImageValues = function ($file, $hidden, fileFieldName) {
                    $hidden.attr('name', '');
                    $file.attr('name', fileFieldName);
                };

                OperationManager.prototype.clearImageValue = function ($file, $hidden, fileFieldName) {
                    $hidden.attr('name', fileFieldName);
                    $file.attr('name', '');
                };

                OperationManager.prototype.hookEvents = function (buttonSelector) {
                    var noImageUrl = "";
                    $(document).on("click", buttonSelector, function () {
                        var currMode = $(this).attr('data-mode');
                        if (currMode == "remove") {
                            var $file = $("");
                            var $image = $("");
                            var $hidden = $("");
                            var fileFieldName = "";
                            var $button = null;
                            this.reset_field($file);
                            $image.attr('src', noImageUrl);
                            this.setButtonMode($button, "add");
                            this.clearImageValue($file, $hidden, fileFieldName);
                        }
                    });
                    /*
                    $file.change(function() {
                    var input = this;
                    if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                    $(imageSelector).attr('src', e.target.result);
                    alert(e.target.result);
                    setButtonMode($button, "remove");
                    setImageValues($file, $hidden, fileFieldName);
                    };
                    alert(input.files[0]);
                    reader.readAsDataURL(input.files[0]);
                    }
                    });
                    */
                };

                OperationManager.prototype.InitiateBinaryFileElements = function () {
                    var jQueryClassSelector = this.BinaryFileSelectorBase;
                    var inputFileSelector = "input" + jQueryClassSelector + "[type='file']";
                    var hiddenInputSelector = "input" + jQueryClassSelector + "[type='hidden']";
                    var previewImgSelector = "img" + jQueryClassSelector;
                    var inputFileWithNameSelector = inputFileSelector + "[name]";
                    var hiddenInputWithNameSelector = hiddenInputSelector + "[name]";
                    var objectIDDataName = "oipfile-objectid";
                    var propertyName = "oipfile-propertyname";
                };

                OperationManager.prototype.readFileFromInputAsync = function (fileInput) {
                    if (fileInput.files && fileInput.files[0]) {
                        var file = fileInput.files[0];
                        return this.readFileAsync(fileInput, file);
                    }
                    var emptyDeferred = $.Deferred();
                    emptyDeferred.resolve({ "inputElement": fileInput });
                    return emptyDeferred.promise();
                };

                OperationManager.prototype.readFileAsync = function (fileInput, file) {
                    var reader = new FileReader();
                    var deferred = $.Deferred();

                    reader.onload = function (event) {
                        deferred.resolve({
                            "inputElement": fileInput,
                            "file": file,
                            "content": event.target.result });
                    };

                    reader.onerror = function () {
                        deferred.reject(this);
                    };
                    reader.readAsDataURL(file);
                    return deferred.promise();
                };

                OperationManager.prototype.PrepareBinaryFileContents = function (callBack) {
                    var me = this;
                    var jQueryClassSelector = this.BinaryFileSelectorBase;
                    var inputFileSelector = "input" + jQueryClassSelector + "[type='file']";
                    var hiddenInputSelector = "input" + jQueryClassSelector + "[type='hidden']";
                    var previewImgSelector = "img" + jQueryClassSelector;
                    var inputFileWithNameSelector = inputFileSelector + "[name]";
                    var hiddenInputWithNameSelector = hiddenInputSelector + "[name]";

                    var $filesToAdd = $(inputFileWithNameSelector);
                    var $fileReadingPromises = $filesToAdd.map(function (index, element) {
                        var inputElement = element;
                        return me.readFileFromInputAsync(inputElement);
                    });
                    var $filesToRemove = $(hiddenInputWithNameSelector);
                    var $fileRemoveData = $filesToRemove.map(function (index, element) {
                        var inputElement = element;
                        return { "inputElement": inputElement, "file": null, "content": null };
                    });
                    var concatCallbackArray = $fileReadingPromises.add($fileRemoveData);
                    $.when.apply($, concatCallbackArray).then(function () {
                        var args = arguments;
                        callBack(args);
                    });
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
