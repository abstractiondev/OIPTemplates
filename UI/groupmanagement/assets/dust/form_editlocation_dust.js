(function(){dust.register("form_editlocation.dust",body_0);function body_0(chk,ctx){return chk.write("<script>$(function() {$(\".open-locationeditor\").on(\"click\",function () {var me = $(this);ConnectInputField(me, \"contentinfo\", \"LocationEditor\", \"ContentSourceInfo\", \"\", true);ConnectInputField(me, \"location___locationname\", \"LocationEditor\", \"Location___LocationName\", \"\");var id = me.data(\"id\");/*$(\".fileupload-preview img\").remove();$(\"#CategoryEditor_ImageData\").val(\"\"); *//*SetElementVisibility(\"CategoryEditor_Image_Add\", imageAddVisibility);SetElementVisibility(\"CategoryEditor_Image_ChangeAndRemove\", imageChangeAndRemoveVisibility);SetElementName(\"CategoryEditor_ImageData\", id + \"_ImageData\");*/InitializeModalClasses();$('#edit-category').modal('show');});});</script><div id=\"edit-location\" class=\"modal hide fade full-screen\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Edit Location</h3></div><form id=\"LocationEditForm\" method=\"post\" class=\"form-horizontal full-screen-content\" enctype=\"multipart/form-data\"><div class=\"modal-body\"><input id=\"LocationEditor_ContentSourceInfo\" name=\"ContentSourceInfo\" type=\"hidden\" /><fieldset>").partial("textinput_singleline.dust",ctx,{"field_id":"LocationEditor_Location___LocationName","field_label":"Location Name"}).write("</fieldset></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\" type=\"submit\">Save changes</button></div></form></div>");}return body_0;})();