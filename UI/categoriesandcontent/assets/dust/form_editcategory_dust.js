(function(){dust.register("form_editcategory.dust",body_0);function body_0(chk,ctx){return chk.write("<script>$(function() {$(\".open-categoryeditor\").on(\"click\",function () {var me = $(this);ConnectInputField(me, \"contentinfo\", \"CategoryEditor\", \"ContentSourceInfo\", \"\", true);ConnectInputField(me, \"title\", \"CategoryEditor\", \"Title\", \"\");ConnectInputField(me, \"excerpt\", \"CategoryEditor\", \"Excerpt\", \"\");ConnectInputField(me, \"parentcategory\", \"CategoryEditor\", \"ParentCategory\", \"\", false, \"Object_\");var id = me.data(\"id\");var imageid = me.data(\"imageid\");var imageext = me.data(\"imageext\");var imageAddVisibility;var imageChangeAndRemoveVisibility;/*if(imageid == null){imageAddVisibility = true;imageChangeAndRemoveVisibility = false;$(\"#CategoryEditor_ImgNew\").attr(\"src\", \"http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image\");} else {imageAddVisibility = false;imageChangeAndRemoveVisibility = true;$(\"#CategoryEditor_ExistingImage\").attr(\"src\", \"../../AaltoGlobalImpact.OIP/MediaContent/\" + imageid + \"_256x256_crop.jpg\");} */var fileuploadClass;if(imageid != null){fileuploadClass = \"fileupload-exists\";$(\"#CategoryEdit_ExistingImage\").attr(\"src\", \"../../AaltoGlobalImpact.OIP/MediaContent/\" + imageid + \"_256x256_crop\" + imageext);} else {fileuploadClass = \"fileupload-new\";}/*$(\".fileupload-preview img\").remove();$(\"#CategoryEditor_ImageData\").val(\"\"); *//*SetElementVisibility(\"CategoryEditor_Image_Add\", imageAddVisibility);SetElementVisibility(\"CategoryEditor_Image_ChangeAndRemove\", imageChangeAndRemoveVisibility);SetElementName(\"CategoryEditor_ImageData\", id + \"_ImageData\");*/var fileUploadCtrl = $(\"#CategoryEdit_FileUpload\");fileUploadCtrl.removeClass('fileupload-exists');fileUploadCtrl.removeClass('fileupload-new');fileUploadCtrl.addClass(fileuploadClass);fileUploadCtrl.attr(\"data-name\", \"File_\" + id + \"_ImageData\");InitializeModalClasses();$('#edit-category').modal('show');});});</script><div id=\"edit-category\" class=\"modal hide fade full-screen\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Edit Category</h3></div><form id=\"CategoryEditForm\" method=\"post\" class=\"form-horizontal full-screen-content\" enctype=\"multipart/form-data\"><div class=\"modal-body\"><input id=\"CategoryEditor_ContentSourceInfo\" name=\"ContentSourceInfo\" type=\"hidden\" /><fieldset><div class=\"control-group\"><label class=\"control-label\">Category Image</label><div class=\"controls\"><div id=\"CategoryEdit_FileUpload\" class=\"fileupload fileupload-exists\" data-provides=\"fileupload\" data-name=\"myimage\"><div class=\"fileupload-new thumbnail\" style=\"width: 200px; height: 150px;\"><img src=\"http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image\" /></div><div class=\"fileupload-preview fileupload-exists thumbnail\" style=\"max-width: 200px; max-height: 150px; line-height: 20px;\"><img id=\"CategoryEdit_ExistingImage\" src=\"\"></div><div><span class=\"btn btn-file\"><span class=\"fileupload-new\">Select image</span><span class=\"fileupload-exists\">Change</span><input type=\"file\" /></span><a href=\"#\" class=\"btn fileupload-exists\" data-dismiss=\"fileupload\">Remove</a></div></div></div></div>").partial("textinput_singleline.dust",ctx,{"field_id":"CategoryEditor_Title","field_label":"Title"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"CategoryEditor_Excerpt","field_label":"Excerpt"}).write("</fieldset></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\" type=\"submit\">Save changes</button></div></form></div>");}return body_0;})();