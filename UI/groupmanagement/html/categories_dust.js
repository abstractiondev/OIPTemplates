(function(){dust.register("categories.dust",body_0);function body_0(chk,ctx){return chk.write("<div><fieldset id=\"current-categories\"><div id=\"gallery-3\" class=\"gallery\" style=\"clear: both;\">").section(ctx.getPath(false,["CategoriesSource","CategoryCollection","CollectionContent"]),ctx,{"block":body_1},null).write("<div class=\"clearfix\"></div></div></fieldset></div><script>var ConnectInputField = function(me, dataName, fieldIDPrefix, fieldName, defaultValue, suppressNameChange, fieldTypePrefix){var fieldID = fieldIDPrefix + \"_\" + fieldName;var content = me.data(dataName);var id = me.data(\"id\");var inputField = $(\"#\" + fieldID);if(fieldTypePrefix == undefined)fieldTypePrefix = \"\";if(suppressNameChange == undefined || suppressNameChange == false) {inputField.attr(\"name\", fieldTypePrefix + id + \"_\" + fieldName);}if(content == null && defaultValue) {content = defaultValue;}inputField.val(content);};var SetElementName = function(id, name){$(\"#\" + id).attr(\"name\", name);};var SetElementVisibility = function(id, isVisible){var activeElement = $(\"#\" + id);if(isVisible) {activeElement.show();} else {activeElement.hide();}};/*    $(function() {$(\"textarea.mdd_editor\").MarkdownDeep({help_location: \"../assets/lib/markdowndeep/mdd_help.html\",disableTabHandling:true});});*/$(function() {$(\".open-objectdelete\").on(\"click\", function() {var me = $(this);ConnectInputField(me, \"objectid\", \"ObjectDelete\", \"ObjectID\", \"\", true);ConnectInputField(me, \"domainname\", \"ObjectDelete\", \"ObjectDomainName\", \"\", true);ConnectInputField(me, \"objectname\", \"ObjectDelete\", \"ObjectName\", \"\", true);$(\"#DeleteObjectFormHeader\").html(\"Delete \" + me.data(\"objectname\") + \": '\" + me.data(\"deletetitle\") + \"'?\");$('#delete-object').modal('show');});$(\".open-categoryeditor\").on(\"click\",function () {var me = $(this);ConnectInputField(me, \"contentinfo\", \"CategoryEditor\", \"ContentSourceInfo\", \"\", true);ConnectInputField(me, \"categoryname\", \"CategoryEditor\", \"CategoryName\", \"\");ConnectInputField(me, \"title\", \"CategoryEditor\", \"Title\", \"\");ConnectInputField(me, \"excerpt\", \"CategoryEditor\", \"Excerpt\", \"\");ConnectInputField(me, \"parentcategory\", \"CategoryEditor\", \"ParentCategory\", \"\", false, \"Object_\");var id = me.data(\"id\");var imageid = me.data(\"imageid\");var imageAddVisibility;var imageChangeAndRemoveVisibility;/*if(imageid == null){imageAddVisibility = true;imageChangeAndRemoveVisibility = false;$(\"#CategoryEditor_ImgNew\").attr(\"src\", \"http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image\");} else {imageAddVisibility = false;imageChangeAndRemoveVisibility = true;$(\"#CategoryEditor_ExistingImage\").attr(\"src\", \"../../AaltoGlobalImpact.OIP/MediaContent/\" + imageid + \"_256x256_crop.jpg\");} */var fileuploadClass;if(imageid != null){fileuploadClass = \"fileupload-exists\";$(\"#CategoryEdit_ExistingImage\").attr(\"src\", \"../../AaltoGlobalImpact.OIP/MediaContent/\" + imageid + \"_256x256_crop.jpg\");} else {fileuploadClass = \"fileupload-new\";}/*$(\".fileupload-preview img\").remove();$(\"#CategoryEditor_ImageData\").val(\"\"); *//*SetElementVisibility(\"CategoryEditor_Image_Add\", imageAddVisibility);SetElementVisibility(\"CategoryEditor_Image_ChangeAndRemove\", imageChangeAndRemoveVisibility);SetElementName(\"CategoryEditor_ImageData\", id + \"_ImageData\");*/var fileUploadCtrl = $(\"#CategoryEdit_FileUpload\");fileUploadCtrl.removeClass('fileupload-exists');fileUploadCtrl.removeClass('fileupload-new');fileUploadCtrl.addClass(fileuploadClass);fileUploadCtrl.attr(\"data-name\", \"File_\" + id + \"_ImageData\");$(\"textarea.mdd_editor\").MarkdownDeep({help_location: \"../assets/lib/markdowndeep/mdd_help.html\",disableTabHandling:true});$('#edit-category').modal('show');});});</script><!-- modals locations--><div id=\"edit-category\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Edit Category</h3></div><form id=\"CategoryEditForm\" method=\"post\" class=\"form-horizontal\" enctype=\"multipart/form-data\"><div class=\"modal-body\"><input id=\"CategoryEditor_ContentSourceInfo\" name=\"ContentSourceInfo\" type=\"hidden\" /><fieldset><div class=\"control-group\"><label class=\"control-label\">Category Image</label><div class=\"controls\"><div id=\"CategoryEdit_FileUpload\" class=\"fileupload fileupload-exists\" data-provides=\"fileupload\" data-name=\"myimage\"><div class=\"fileupload-new thumbnail\" style=\"width: 200px; height: 150px;\"><img src=\"http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image\" /></div><div class=\"fileupload-preview fileupload-exists thumbnail\" style=\"max-width: 200px; max-height: 150px; line-height: 20px;\"><img id=\"CategoryEdit_ExistingImage\" src=\"\"></div><div><span class=\"btn btn-file\"><span class=\"fileupload-new\">Select image</span><span class=\"fileupload-exists\">Change</span><input type=\"file\" /></span><a href=\"#\" class=\"btn fileupload-exists\" data-dismiss=\"fileupload\">Remove</a></div></div></div></div>").partial("textinput_singleline.dust",ctx,{"field_id":"CategoryEditor_CategoryName","field_label":"Category Name"}).partial("textinput_singleline.dust",ctx,{"field_id":"CategoryEditor_Title","field_label":"Title"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"CategoryEditor_Excerpt","field_label":"Excerpt"}).write("<div class=\"control-group\"><label class=\"control-label\" for=\"CategoryEditor_ParentCategory\">Parent Category</label><div class=\"controls\"><select name=\"\" id=\"CategoryEditor_ParentCategory\"><option value=\"\" selected>None</option>").section(ctx.getPath(false,["CategoriesSource","CategoryCollection","CollectionContent"]),ctx,{"block":body_10},null).write("</select></div></div></fieldset></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\" type=\"submit\">Save changes</button></div></form></div><div id=\"delete-object\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3 id=\"DeleteObjectFormHeader\">Delete Object</h3></div><form id=\"ObjectDeleteForm\" method=\"post\" class=\"form-horizontal\" enctype=\"multipart/form-data\"><div class=\"modal-body\"><input id=\"ObjectDelete_ExecuteOperation\" name=\"ExecuteOperation\"value=\"DeleteSpecifiedInformationObject\" type=\"hidden\" /><input id=\"ObjectDelete_ObjectDomainName\" name=\"ObjectDomainName\"value=\"\" type=\"hidden\" /><input id=\"ObjectDelete_ObjectName\" name=\"ObjectName\"value=\"\" type=\"hidden\" /><input id=\"ObjectDelete_ObjectID\" name=\"ObjectID\"value=\"\" type=\"hidden\" /><fieldset><div class=\"control-group\"><!-- Text input--><label for=\"name-image-group-input\" class=\"control-label\">Delete...</label><div class=\"controls\"><!--<input type=\"checkbox\">--><p class=\"help-block\">If you delete this object the links and tags to it will be <em>removed</em> from other objects.</p></div></div></fieldset></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Cancel</button><button class=\"btn btn-danger\">Delete</button></div></form></div>");}function body_1(chk,ctx){return chk.write("<div class=\"element thumbnail pull-left sampleFilterOnefalse sampleFilterTwofalse\">").exists(ctx.get("ImageData"),ctx,{"block":body_2},null).write("<div class=\"clearfix\"></div><div class=\"image-data\"><span class=\"pull-right\">").partial("objectdeleteicon.dust",ctx,{"object_delete_title":body_3}).write("</span><span class=\"pull-right\"><a data-toggle=\"modal\" role=\"button\" class=\"open-categoryeditor\" href=\"#\" data-contentinfo=\"").reference(ctx.get("RelativeLocation"),ctx,"h").write(":").reference(ctx.get("MasterETag"),ctx,"h").write("\"").exists(ctx.get("ImageData"),ctx,{"block":body_4},null).write("data-id=\"").reference(ctx.get("ID"),ctx,"h").write("\" data-categoryname=\"").reference(ctx.get("CategoryName"),ctx,"h").write("\" ").exists(ctx.get("Title"),ctx,{"block":body_5},null).exists(ctx.get("ParentCategory"),ctx,{"block":body_6},null).exists(ctx.get("Excerpt"),ctx,{"block":body_7},null).write("><i class=\"icon-edit\"></i></a></span><span class=\"title\">").reference(ctx.get("CategoryName"),ctx,"h").write("</span>").exists(ctx.get("Title"),ctx,{"block":body_8},null).exists(ctx.get("ExcerptRendered"),ctx,{"block":body_9},null).write("</div></div>");}function body_2(chk,ctx){return chk.write("<div style=\"max-width: 220px\"><img src=\"../../AaltoGlobalImpact.OIP/MediaContent/").reference(ctx.getPath(false,["ImageData","ID"]),ctx,"h").write("_256x256_crop.jpg\" /></div>");}function body_3(chk,ctx){return chk.reference(ctx.get("Title"),ctx,"h");}function body_4(chk,ctx){return chk.write("data-imageid=\"").reference(ctx.getPath(false,["ImageData","ID"]),ctx,"h").write("\" ");}function body_5(chk,ctx){return chk.write("data-title=\"").reference(ctx.get("Title"),ctx,"h").write("\"");}function body_6(chk,ctx){return chk.write("data-parentcategory=\"").reference(ctx.getPath(false,["ParentCategory","ID"]),ctx,"h").write("\"");}function body_7(chk,ctx){return chk.write("data-excerpt=\"").reference(ctx.get("Excerpt"),ctx,"h").write("\"");}function body_8(chk,ctx){return chk.write("<span class=\"title\">").reference(ctx.get("Title"),ctx,"h").write("</span>");}function body_9(chk,ctx){return chk.write("<span class=\"title\">").reference(ctx.get("ExcerptRendered"),ctx,"h",["s"]).write("</span>");}function body_10(chk,ctx){return chk.write("<option name=\"").reference(ctx.get("ID"),ctx,"h").write("\" value=\"").reference(ctx.get("ID"),ctx,"h").write("\">").exists(ctx.get("Title"),ctx,{"else":body_11,"block":body_12},null).write("</option>");}function body_11(chk,ctx){return chk.reference(ctx.get("CategoryName"),ctx,"h");}function body_12(chk,ctx){return chk.reference(ctx.get("Title"),ctx,"h");}return body_0;})();