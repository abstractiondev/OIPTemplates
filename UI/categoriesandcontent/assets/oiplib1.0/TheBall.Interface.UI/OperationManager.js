/**
* Created by kalle on 10.2.2014.
*/
var TheBall;
(function (TheBall) {
    (function (Interface) {
        /// <reference path="jquery.d.ts" />
        /// <reference path="DataConnectionManager.ts" />
        (function (UI) {
            var BinaryFileItem = (function () {
                function BinaryFileItem(inputElement, file, content) {
                    this.inputElement = inputElement;
                    this.file = file;
                    this.content = content;
                }
                BinaryFileItem.prototype.GetEmbeddedPropertyContent = function () {
                    if (!this.file || !this.file.name || !this.content)
                        return null;
                    return this.file.name + ":" + this.content;
                };
                return BinaryFileItem;
            })();
            UI.BinaryFileItem = BinaryFileItem;
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

                    if (typeof String.prototype.startsWith != 'function') {
                        // see below for better implementation!
                        String.prototype.startsWith = function (str) {
                            return this.lastIndexOf(str, 0) === 0;
                        };
                    }
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
                    var realKey;
                    for (var key in objectData) {
                        if (key.startsWith("File_"))
                            realKey = key.replace("File_", "File_" + id + "_");
                        else if (key.startsWith("Object_"))
                            realKey = key.replace("Object_", "Object_" + id + "_");
                        else if (key.startsWith("FileEmbedded_"))
                            realKey = key.replace("FileEmbedded_", "FileEmbedded_" + id + "_");
                        else
                            realKey = id + "_" + key;
                        var $hiddenInput = this.getHiddenInput(realKey, objectData[key]);
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

                OperationManager.prototype.setSelectFileButtonEvents = function () {
                };

                OperationManager.prototype.setRemoveFileButtonEvents = function ($removeButton, $fileInput, $hiddenInput, $imagePreview, noImageUrl) {
                    var me = this;
                    $removeButton.off("click.oip").on("click.oip", function () {
                        var fileFieldName = $fileInput.attr("data-oipfile-propertyname");
                        me.reset_field($fileInput);
                        $imagePreview.attr('src', noImageUrl);
                        me.clearImageValue($fileInput, $hiddenInput, fileFieldName);
                    });
                };

                OperationManager.prototype.setFileInputEvents = function ($fileInput, $hiddenInput, $imagePreview) {
                    var me = this;
                    var fileFieldName = $fileInput.data("oipfile-propertyname");
                    var changeEventName = "change.oip";
                    $fileInput.off(changeEventName).on(changeEventName, function () {
                        var input = this;
                        if (input.files && input.files[0]) {
                            var reader = new FileReader();
                            reader.onload = function (e) {
                                $imagePreview.attr('src', e.target.result);
                                me.setImageValues($fileInput, $hiddenInput, fileFieldName);
                            };
                            reader.readAsDataURL(input.files[0]);
                        }
                    });
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
                };

                OperationManager.prototype.InitiateBinaryFileElements = function (fileInputID, propertyName) {
                    var jQueryClassSelector = this.BinaryFileSelectorBase;
                    var inputFileSelector = "input" + jQueryClassSelector + "[type='file']";

                    //var hiddenInputSelector = "input" + jQueryClassSelector + "[type='hidden']";
                    //var previewImgSelector = "img" + jQueryClassSelector;
                    var inputFileWithNameSelector = inputFileSelector + "[name]";

                    //var hiddenInputWithNameSelector = hiddenInputSelector + "[name]";
                    var fileGroupIDDataName = "oipfile-filegroupid";
                    var objectIDDataName = "oipfile-objectid";
                    var propertyDataName = "oipfile-propertyname";
                    var buttonTypeDataName = "oipfile-buttontype";
                    var buttonTypeSelect = "select";
                    var buttonTypeRemove = "remove";
                    var dataAttrPrefix = "data-";

                    var $fileInput = $("#" + fileInputID);
                    $fileInput.addClass("oipfile");
                    $fileInput.attr(dataAttrPrefix + propertyDataName, propertyName);
                    var currentGroupID = $fileInput.attr(dataAttrPrefix + fileGroupIDDataName);
                    var currentGroupDataSelectorString = "[data-" + fileGroupIDDataName + "='" + currentGroupID + "']";

                    var previewImgSelector = "img.oipfile" + currentGroupDataSelectorString;
                    var $previevImg = $(previewImgSelector);
                    if ($previevImg.length === 0) {
                        $previevImg = $("<img class='oipfile' />");
                        $previevImg.attr(dataAttrPrefix + fileGroupIDDataName, currentGroupID);
                        $previevImg.insertBefore($fileInput);
                    }
                    var hiddenInputSelector = "input.oipfile[type='hidden']" + currentGroupDataSelectorString;
                    var $hiddenInput = $(hiddenInputSelector);
                    if ($hiddenInput.length === 0) {
                        $hiddenInput = $("<input class='oipfile' type='hidden'>");
                        $hiddenInput.attr(dataAttrPrefix + fileGroupIDDataName, currentGroupID);
                        $hiddenInput.insertBefore($fileInput);
                    }

                    this.setFileInputEvents($fileInput, $hiddenInput, $previevImg);

                    var selectButtonSelector = ".oipfile" + currentGroupDataSelectorString + "[data-" + buttonTypeDataName + "='" + buttonTypeSelect + "']";
                    var $selectButton = $(selectButtonSelector);
                    if ($selectButton.length === 0) {
                        // Create select button
                        $selectButton = $("<a class='button oipfile'>Select</a>");
                        $selectButton.attr(dataAttrPrefix + fileGroupIDDataName, currentGroupID);
                        $selectButton.attr(dataAttrPrefix + buttonTypeDataName, buttonTypeSelect);
                        $selectButton.insertAfter($fileInput);
                    }
                    var removeButtonSelector = ".oipfile" + currentGroupDataSelectorString + "[data-" + buttonTypeDataName + "='" + buttonTypeRemove + "']";
                    var $removeButton = $(removeButtonSelector);
                    if ($removeButton.length === 0) {
                        // Create remove button
                        $removeButton = $("<a class='button oipfile'>Remove</a>");
                        $removeButton.attr(dataAttrPrefix + fileGroupIDDataName, currentGroupID);
                        $removeButton.attr(dataAttrPrefix + buttonTypeDataName, buttonTypeRemove);
                        $removeButton.insertAfter($selectButton);
                        this.setRemoveFileButtonEvents($removeButton, $fileInput, $hiddenInput, $previevImg, "../assets/noimage.jpg");
                    }
                };

                OperationManager.prototype.readFileFromInputAsync = function (fileInput) {
                    if (fileInput.files && fileInput.files[0]) {
                        var file = fileInput.files[0];
                        return this.readFileAsync(fileInput, file);
                    }
                    var emptyDeferred = $.Deferred();
                    emptyDeferred.resolve(new BinaryFileItem(fileInput, null, null));
                    return emptyDeferred.promise();
                };

                OperationManager.prototype.readFileAsync = function (fileInput, file) {
                    var reader = new FileReader();
                    var deferred = $.Deferred();

                    reader.onload = function (event) {
                        deferred.resolve(new BinaryFileItem(fileInput, file, event.target.result));
                    };

                    reader.onerror = function () {
                        deferred.reject(this);
                    };
                    reader.readAsDataURL(file);
                    return deferred.promise();
                };

                OperationManager.prototype.PrepareBinaryFileContents = function (objectID, callBack) {
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
                        return new BinaryFileItem(inputElement, null, null);
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
