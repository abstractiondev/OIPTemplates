(function(){dust.register("form_edittextcontent.dust",body_0);function body_0(chk,ctx){return chk.write("<script>$(function() {$(\".open-textcontenteditor\").on(\"click\",function () {var me = $(this);ConnectInputField(me, \"contentinfo\", \"TextContentEditor\", \"ContentSourceInfo\", \"\", true);ConnectInputField(me, \"title\", \"TextContentEditor\", \"Title\", \"\");ConnectInputField(me, \"subtitle\", \"TextContentEditor\", \"SubTitle\", \"\");ConnectInputField(me, \"author\", \"TextContentEditor\", \"Author\", \"\");ConnectInputField(me, \"excerpt\", \"TextContentEditor\", \"Excerpt\", \"\");ConnectInputField(me, \"body\", \"TextContentEditor\", \"Body\", \"\");ConnectInputField(me, \"categories\", \"TextContentEditor\", \"Categories\", \"\", false, \"Object_\", true);ConnectInputField(me, \"locations\", \"TextContentEditor\", \"Locations\", \"\", false, \"Object_\", true);/*ConnectInputField(me, \"parentcategory\", \"TextContentEditor\", \"ParentCategory\", \"\", false, \"Object_\");*/var id = me.data(\"id\");var imageid = me.data(\"imageid\");var imageext = me.data(\"imageext\");var fileuploadClass;if(imageid != null){fileuploadClass = \"fileupload-exists\";$(\"#TextContentEdit_ExistingImage\").attr(\"src\", \"../../AaltoGlobalImpact.OIP/MediaContent/\" + imageid + \"_256x256_crop\" + imageext);} else {fileuploadClass = \"fileupload-new\";}var fileUploadCtrl = $(\"#TextContentEdit_FileUpload\");fileUploadCtrl.removeClass('fileupload-exists');fileUploadCtrl.removeClass('fileupload-new');fileUploadCtrl.addClass(fileuploadClass);fileUploadCtrl.attr(\"data-name\", \"File_\" + id + \"_ImageData\");InitializeModalClasses();$('#edit-textcontent').modal('show');});});</script><div id=\"edit-textcontent\" class=\"modal hide fade full-screen\"><form id=\"TextContentditForm\" method=\"post\" class=\"form-horizontal full-screen-content\" enctype=\"multipart/form-data\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Edit Text Content</h3></div><div class=\"modal-body\"><input id=\"TextContentEditor_ContentSourceInfo\" name=\"ContentSourceInfo\" type=\"hidden\" /><fieldset><div class=\"control-group\"><label class=\"control-label\">Content Image</label><div class=\"controls\"><div id=\"TextContentEdit_FileUpload\" class=\"fileupload fileupload-exists\" data-provides=\"fileupload\" data-name=\"myimage\"><div class=\"fileupload-new thumbnail\" style=\"width: 200px; height: 150px;\"><img src=\"http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image\" /></div><div class=\"fileupload-preview fileupload-exists thumbnail\" style=\"max-width: 200px; max-height: 150px; line-height: 20px;\"><img id=\"TextContentEdit_ExistingImage\" src=\"\"></div><div><span class=\"btn btn-file\"><span class=\"fileupload-new\">Select image</span><span class=\"fileupload-exists\">Change</span><input type=\"file\" /></span><a href=\"#\" class=\"btn fileupload-exists\" data-dismiss=\"fileupload\">Remove</a></div></div></div></div>").partial("textinput_singleline.dust",ctx,{"field_id":"TextContentEditor_Title","field_label":"Title"}).partial("textinput_singleline.dust",ctx,{"field_id":"TextContentEditor_SubTitle","field_label":"SubTitle"}).partial("textinput_singleline.dust",ctx,{"field_id":"TextContentEditor_Author","field_label":"Author"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"TextContentEditor_Excerpt","field_label":"Excerpt"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"TextContentEditor_Body","field_label":"Body"}).partial("dropdown_select.dust",ctx,{"field_id":"TextContentEditor_Categories","is_multiple":"true","item_collection":ctx.getPath(false,["CategoriesSource","CategoryCollection","CollectionContent"]),"item_type":"category","field_label":"Categories","field_name":"Categories"}).partial("dropdown_select.dust",ctx,{"field_id":"TextContentEditor_Locations","is_multiple":"true","item_collection":ctx.getPath(false,["Locations","AddressAndLocationCollection","CollectionContent"]),"item_type":"location","field_label":"Locations","field_name":"Locations"}).write("</fieldset></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\" type=\"submit\">Save changes</button></div></form></div>");}return body_0;})();