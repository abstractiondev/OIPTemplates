(function(){dust.register("identity.dust",body_0);function body_0(chk,ctx){return chk.section(ctx.getPath(false,["GroupContainerSource","GroupContainer"]),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<form id=\"form-id-1\" method=\"post\" class=\"form-horizontal\" enctype=\"multipart/form-data\">").section(ctx.get("GroupContainerSource"),ctx,{"block":body_2},null).section(ctx.get("GroupProfile"),ctx,{"block":body_3},null).write("</form>");}function body_2(chk,ctx){return chk.write("<input name=\"ContentSourceInfo\" value=\"").reference(ctx.getPath(false,["GroupContainer","RelativeLocation"]),ctx,"h").write(":").reference(ctx.get("ETag"),ctx,"h").write("\" type=\"hidden\" />");}function body_3(chk,ctx){return chk.write("<fieldset id=\"profile\"><!-- group profile image and group icon image --><div class=\"span12\"><div style=\"float:left\"><div class=\"control-group\"><label class=\"control-label\">Group Profile Image</label><div class=\"controls\">").section(ctx.get("ProfileImage"),ctx,{"block":body_4},null).write("</div></div></div><div class=\"clearfix\" style=\"float:left\"><div class=\"control-group\"><label class=\"control-label\">Group Icon Image</label><div class=\"controls\">").section(ctx.get("IconImage"),ctx,{"block":body_10},null).write("</div></div></div></div><!-- end group profile image and group icon image --><div class=\"control-group\"><label class=\"control-label\" for=\"").reference(ctx.get("ID"),ctx,"h").write("_GroupName\">Group name</label><div class=\"controls\"><input name=\"").reference(ctx.get("ID"),ctx,"h").write("_GroupName\"  id=\"").reference(ctx.get("ID"),ctx,"h").write("_GroupName\" type=\"text\" value=\"").reference(ctx.get("GroupName"),ctx,"h").write("\"></div></div><div class=\"control-group\"><label class=\"control-label\" for=\"").reference(ctx.get("ID"),ctx,"h").write("_Description\">Description</label><div class=\"controls\"><textarea id=\"").reference(ctx.get("ID"),ctx,"h").write("_Description\" name=\"").reference(ctx.get("ID"),ctx,"h").write("_Description\" rows=\"6\" placeholder=\"add org name\">").reference(ctx.get("Description"),ctx,"h").write("</textarea></div></div><div class=\"control-group\"><label class=\"control-label\" for=\"").reference(ctx.get("ID"),ctx,"h").write("_OrganizationsAndGroupsLinkedToUs\">Organisations and groups linked to us</label><div class=\"controls\"><textarea id=\"").reference(ctx.get("ID"),ctx,"h").write("_OrganizationsAndGroupsLinkedToUs\" name=\"").reference(ctx.get("ID"),ctx,"h").write("_OrganizationsAndGroupsLinkedToUs\" rows=\"6\" placeholder=\"add org name\">").reference(ctx.get("OrganizationsAndGroupsLinkedToUs"),ctx,"h").write("</textarea></div></div><footer><div class=\"control-group controls pull-right\"><div class=\"form-actions\" style=\"padding:0;margin:0;border-top:0;background-color: transparent\"><button value=\"true\" name=\"btnCancel\"  class=\"btn\">Cancel</button><button type=\"submit\" class=\"btn btn-primary\" name=\"RootSourceAction\" id=\"RootSourceAction\" value=\"Save\">Save changes</button></div></div></footer></fieldset>");}function body_4(chk,ctx){return chk.exists(ctx.getPath(false,["ImageData","ID"]),ctx,{"else":body_5,"block":body_7},null);}function body_5(chk,ctx){return chk.partial("fileupload.dust",ctx,{"initial_class_mode":"fileupload-new","container_id":body_6,"field_name":"ImageData"});}function body_6(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h");}function body_7(chk,ctx){return chk.partial("fileupload.dust",ctx,{"initial_class_mode":"fileupload-exists","container_id":body_8,"field_name":"ImageData","content_id":body_9,"imagesuffix":"256x256_crop.jpg"});}function body_8(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h");}function body_9(chk,ctx){return chk.reference(ctx.getPath(false,["ImageData","ID"]),ctx,"h");}function body_10(chk,ctx){return chk.exists(ctx.getPath(false,["ImageData","ID"]),ctx,{"else":body_11,"block":body_13},null);}function body_11(chk,ctx){return chk.partial("fileupload.dust",ctx,{"initial_class_mode":"fileupload-new","container_id":body_12,"field_name":"ImageData"});}function body_12(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h");}function body_13(chk,ctx){return chk.partial("fileupload.dust",ctx,{"initial_class_mode":"fileupload-exists","container_id":body_14,"field_name":"ImageData","content_id":body_15,"imagesuffix":"64x64_crop.jpg"});}function body_14(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h");}function body_15(chk,ctx){return chk.reference(ctx.getPath(false,["ImageData","ID"]),ctx,"h");}return body_0;})();