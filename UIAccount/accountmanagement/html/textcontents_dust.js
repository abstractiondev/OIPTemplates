(function(){dust.register("textcontents.dust",body_0);function body_0(chk,ctx){return chk.section(ctx.getPath(false,["TextContentsSource","TextContentCollection","CollectionContent"]),ctx,{"block":body_1},null).write("<script>/*    $(function() {$(\"textarea.mdd_editor\").MarkdownDeep({help_location: \"../assets/lib/markdowndeep/mdd_help.html\",disableTabHandling:true});});*/$(function() {$(\".open-textcontenteditor\").on(\"click\",function () {var me = $(this);ConnectInputField(me, \"contentinfo\", \"TextContentEditor\", \"ContentSourceInfo\", \"\", true);ConnectInputField(me, \"title\", \"TextContentEditor\", \"Title\", \"\");ConnectInputField(me, \"subtitle\", \"TextContentEditor\", \"SubTitle\", \"\");ConnectInputField(me, \"author\", \"TextContentEditor\", \"Author\", \"\");ConnectInputField(me, \"excerpt\", \"TextContentEditor\", \"Excerpt\", \"\");ConnectInputField(me, \"body\", \"TextContentEditor\", \"Body\", \"\");ConnectInputField(me, \"categories\", \"TextContentEditor\", \"Categories\", \"\", false, \"Object_\", true);ConnectInputField(me, \"locations\", \"TextContentEditor\", \"Locations\", \"\", false, \"Object_\", true);/*ConnectInputField(me, \"parentcategory\", \"TextContentEditor\", \"ParentCategory\", \"\", false, \"Object_\");*/var id = me.data(\"id\");var imageid = me.data(\"imageid\");var fileuploadClass;if(imageid != null){fileuploadClass = \"fileupload-exists\";/* TODO: Retrieive FileExt to have existing image properly set from input format */$(\"#TextContentEdit_ExistingImage\").attr(\"src\", \"../../AaltoGlobalImpact.OIP/MediaContent/\" + imageid + \"_256x256_crop.jpg\");} else {fileuploadClass = \"fileupload-new\";}var fileUploadCtrl = $(\"#TextContentEdit_FileUpload\");fileUploadCtrl.removeClass('fileupload-exists');fileUploadCtrl.removeClass('fileupload-new');fileUploadCtrl.addClass(fileuploadClass);fileUploadCtrl.attr(\"data-name\", \"File_\" + id + \"_ImageData\");InitializeModalClasses();$('#edit-textcontent').modal('show');});});</script><!-- modals locations--><div id=\"edit-textcontent\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Edit Text Content</h3></div><form id=\"TextContentditForm\" method=\"post\" class=\"form-horizontal\" enctype=\"multipart/form-data\"><div class=\"modal-body\"><input id=\"TextContentEditor_ContentSourceInfo\" name=\"ContentSourceInfo\" type=\"hidden\" /><fieldset><div class=\"control-group\"><label class=\"control-label\">Content Image</label><div class=\"controls\"><div id=\"TextContentEdit_FileUpload\" class=\"fileupload fileupload-exists\" data-provides=\"fileupload\" data-name=\"myimage\"><div class=\"fileupload-new thumbnail\" style=\"width: 200px; height: 150px;\"><img src=\"http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image\" /></div><div class=\"fileupload-preview fileupload-exists thumbnail\" style=\"max-width: 200px; max-height: 150px; line-height: 20px;\"><img id=\"TextContentEdit_ExistingImage\" src=\"\"></div><div><span class=\"btn btn-file\"><span class=\"fileupload-new\">Select image</span><span class=\"fileupload-exists\">Change</span><input type=\"file\" /></span><a href=\"#\" class=\"btn fileupload-exists\" data-dismiss=\"fileupload\">Remove</a></div></div></div></div>").partial("textinput_singleline.dust",ctx,{"field_id":"TextContentEditor_Title","field_label":"Title"}).partial("textinput_singleline.dust",ctx,{"field_id":"TextContentEditor_SubTitle","field_label":"SubTitle"}).partial("textinput_singleline.dust",ctx,{"field_id":"TextContentEditor_Author","field_label":"Author"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"TextContentEditor_Excerpt","field_label":"Excerpt"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"TextContentEditor_Body","field_label":"Body"}).partial("dropdown_select.dust",ctx,{"field_id":"TextContentEditor_Categories","is_multiple":"true","item_collection":ctx.getPath(false,["CategoriesSource","CategoryCollection","CollectionContent"]),"item_type":"category","field_label":"Categories","field_name":"Categories"}).partial("dropdown_select.dust",ctx,{"field_id":"TextContentEditor_Locations","is_multiple":"true","item_collection":ctx.getPath(false,["Locations","AddressAndLocationCollection","CollectionContent","AddressAndLocation"]),"item_type":"location","field_label":"Locations","field_name":"Locations"}).write("</fieldset></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\" type=\"submit\">Save changes</button></div></form></div>");}function body_1(chk,ctx){return chk.write("<div class=\"cards cards-profile pull-left texts\"><fieldset><div class=\"gallery\" style=\"clear: both;\"><div class=\"element thumbnail pull-left sampleFilterOnefalse sampleFilterTwofalse\">").exists(ctx.get("ImageData"),ctx,{"block":body_2},null).write("<div class=\"clearfix\"></div><div class=\"image-data\"><span class=\"pull-right\">").partial("objectdeleteicon.dust",ctx,{"object_delete_title":body_3}).write("</span><span class=\"pull-right\"><a data-toggle=\"modal\" role=\"button\" class=\"open-textcontenteditor\" href=\"#\" data-contentinfo=\"").reference(ctx.get("RelativeLocation"),ctx,"h").write(":").reference(ctx.get("MasterETag"),ctx,"h").write("\"data-id=\"").reference(ctx.get("ID"),ctx,"h").write("\"").exists(ctx.get("ImageData"),ctx,{"block":body_4},null).exists(ctx.get("Title"),ctx,{"block":body_5},null).exists(ctx.get("SubTitle"),ctx,{"block":body_6},null).exists(ctx.get("Author"),ctx,{"block":body_7},null).exists(ctx.get("Excerpt"),ctx,{"block":body_8},null).exists(ctx.get("Body"),ctx,{"block":body_9},null).write("data-categories=\"").exists(ctx.get("Categories"),ctx,{"block":body_10},null).write("\"data-locations=\"").exists(ctx.get("Locations"),ctx,{"block":body_13},null).write("\"><i class=\"icon-edit\"></i></a></span><span class=\"title\">").reference(ctx.get("Title"),ctx,"h").write("</span>").exists(ctx.get("SubTitle"),ctx,{"block":body_16},null).exists(ctx.get("ExcerptRendered"),ctx,{"block":body_17},null).write("</div></div><div class=\"clearfix\"></div></div></fieldset></div>");}function body_2(chk,ctx){return chk.write("<div style=\"max-width: 220px\"><img src=\"../../AaltoGlobalImpact.OIP/MediaContent/").reference(ctx.getPath(false,["ImageData","ID"]),ctx,"h").write("_256x256_crop").reference(ctx.getPath(false,["ImageData","FileExt"]),ctx,"h").write("\" /></div>");}function body_3(chk,ctx){return chk.reference(ctx.get("Title"),ctx,"h");}function body_4(chk,ctx){return chk.write("data-imageid=\"").reference(ctx.getPath(false,["ImageData","ID"]),ctx,"h").write("\" ");}function body_5(chk,ctx){return chk.write("data-title=\"").reference(ctx.get("Title"),ctx,"h").write("\" ");}function body_6(chk,ctx){return chk.write("data-subtitle=\"").reference(ctx.get("SubTitle"),ctx,"h").write("\" ");}function body_7(chk,ctx){return chk.write("data-author=\"").reference(ctx.get("Author"),ctx,"h").write("\" ");}function body_8(chk,ctx){return chk.write("data-excerpt=\"").reference(ctx.get("Excerpt"),ctx,"h").write("\" ");}function body_9(chk,ctx){return chk.write("data-body=\"").reference(ctx.get("Body"),ctx,"h").write("\" ");}function body_10(chk,ctx){return chk.section(ctx.get("Categories"),ctx,{"block":body_11},null);}function body_11(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_12},null);}function body_12(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write(",");}function body_13(chk,ctx){return chk.section(ctx.get("Locations"),ctx,{"block":body_14},null);}function body_14(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_15},null);}function body_15(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write(",");}function body_16(chk,ctx){return chk.write("<span class=\"title\">").reference(ctx.get("SubTitle"),ctx,"h").write("</span>");}function body_17(chk,ctx){return chk.write("<span class=\"title\">").reference(ctx.get("ExcerptRendered"),ctx,"h",["s"]).write("</span>");}return body_0;})();