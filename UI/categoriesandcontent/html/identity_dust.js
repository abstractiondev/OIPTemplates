(function(){dust.register("identity.dust",body_0);function body_0(chk,ctx){return chk.section(ctx.getPath(false,["GroupContainerSource","GroupContainer"]),ctx,{"block":body_1},null).partial("modal_executeoperation_begin.dust",ctx,{"form_name":"IdentityDeleteCustomUI","map_data_values":"CustomUIName","header_title":"Delete Custom UI","operation_name":"DeleteCustomUI"}).partial("hiddeninput.dust",ctx,{"field_name":"CustomUIName"}).partial("modal_executeoperation_end.dust",ctx,{"accept_button_label":"Delete!"}).partial("modal_executeoperation_begin.dust",ctx,{"form_name":"IdentityCreateOrUpdateCustomUI","operation_name":"CreateOrUpdateCustomUI","map_data_values":"CustomUIName"}).partial("textinput_singleline.dust",ctx,{"field_id":"IdentityCreateCustomUI_CustomUIName","field_name":"CustomUIName","field_label":"Custom UI name"}).write("<input type=\"file\" name=\"CustomUIContents\" />").partial("modal_executeoperation_end.dust",ctx,{"accept_button_label":"Upload Custom UI!"});}function body_1(chk,ctx){return chk.write("<form id=\"form-id-1\" method=\"post\" class=\"form-horizontal\" enctype=\"multipart/form-data\">").section(ctx.get("GroupContainerSource"),ctx,{"block":body_2},null).section(ctx.get("GroupProfile"),ctx,{"block":body_3},null).write("</form>");}function body_2(chk,ctx){return chk.write("<input name=\"ContentSourceInfo\" value=\"").reference(ctx.getPath(false,["GroupContainer","RelativeLocation"]),ctx,"h").write(":").reference(ctx.get("MasterETag"),ctx,"h").write("\" type=\"hidden\" />");}function body_3(chk,ctx){return chk.write("<fieldset id=\"profile\"><!-- group profile image and group icon image --><div class=\"span12\"><div style=\"float:left\"><div class=\"control-group\"><label class=\"control-label\">Group Profile Image</label><div class=\"controls\">").section(ctx.get("ProfileImage"),ctx,{"block":body_4},null).write("</div></div></div><div class=\"clearfix\" style=\"float:left\"><div class=\"control-group\"><label class=\"control-label\">Group Icon Image</label><div class=\"controls\">").section(ctx.get("IconImage"),ctx,{"block":body_11},null).write("</div></div></div></div><!-- end group profile image and group icon image -->").partial("textinput_singleline.dust",ctx,{"field_id":body_18,"field_name":body_19,"field_value":body_20,"field_label":"Group name"}).partial("textinput_multiline.dust",ctx,{"field_id":body_21,"field_name":body_22,"field_value":body_23,"field_label":"Description","rows":"6"}).partial("textinput_multiline.dust",ctx,{"field_id":body_24,"field_name":body_25,"field_value":body_26,"field_label":"Organisations and groups linked to us","rows":"6"}).partial("textinput_singleline.dust",ctx,{"field_id":body_27,"field_label":"Www site name to publish content","field_name":body_28,"field_value":body_29}).exists(ctx.getPath(false,["CustomUICollection","CollectionContent"]),ctx,{"block":body_30},null).partial("executeoperation_button.dust",ctx,{"form_name":"IdentityCreateOrUpdateCustomUI","button_label":"Add Custom UI","icon_class_name":"icon-plus-sign"}).write("<footer><div class=\"control-group controls pull-right\"><div class=\"form-actions\" style=\"padding:0;margin:0;border-top:0;background-color: transparent\"><button value=\"true\" name=\"btnCancel\"  class=\"btn\">Cancel</button><button type=\"submit\" class=\"btn btn-primary\" name=\"RootSourceAction\" id=\"RootSourceAction\" value=\"Save\">Save changes</button></div></div></footer></fieldset>");}function body_4(chk,ctx){return chk.exists(ctx.getPath(false,["ImageData","ID"]),ctx,{"else":body_5,"block":body_7},null);}function body_5(chk,ctx){return chk.partial("fileupload.dust",ctx,{"initial_class_mode":"fileupload-new","container_id":body_6,"field_name":"ImageData"});}function body_6(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h");}function body_7(chk,ctx){return chk.partial("fileupload.dust",ctx,{"initial_class_mode":"fileupload-exists","container_id":body_8,"field_name":"ImageData","content_id":body_9,"imagesuffix":body_10});}function body_8(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h");}function body_9(chk,ctx){return chk.reference(ctx.getPath(false,["ImageData","ID"]),ctx,"h");}function body_10(chk,ctx){return chk.write("256x256_crop").reference(ctx.getPath(false,["ImageData","FileExt"]),ctx,"h");}function body_11(chk,ctx){return chk.exists(ctx.getPath(false,["ImageData","ID"]),ctx,{"else":body_12,"block":body_14},null);}function body_12(chk,ctx){return chk.partial("fileupload.dust",ctx,{"initial_class_mode":"fileupload-new","container_id":body_13,"field_name":"ImageData"});}function body_13(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h");}function body_14(chk,ctx){return chk.partial("fileupload.dust",ctx,{"initial_class_mode":"fileupload-exists","container_id":body_15,"field_name":"ImageData","content_id":body_16,"imagesuffix":body_17});}function body_15(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h");}function body_16(chk,ctx){return chk.reference(ctx.getPath(false,["ImageData","ID"]),ctx,"h");}function body_17(chk,ctx){return chk.write("64x64_crop").reference(ctx.getPath(false,["ImageData","FileExt"]),ctx,"h");}function body_18(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_GroupName");}function body_19(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_GroupName");}function body_20(chk,ctx){return chk.reference(ctx.get("GroupName"),ctx,"h");}function body_21(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_Description");}function body_22(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_Description");}function body_23(chk,ctx){return chk.reference(ctx.get("Description"),ctx,"h");}function body_24(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_OrganizationsAndGroupsLinkedToUs");}function body_25(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_OrganizationsAndGroupsLinkedToUs");}function body_26(chk,ctx){return chk.reference(ctx.get("OrganizationsAndGroupsLinkedToUs"),ctx,"h");}function body_27(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_WwwSiteToPublishTo");}function body_28(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write("_WwwSiteToPublishTo");}function body_29(chk,ctx){return chk.reference(ctx.get("WwwSiteToPublishTo"),ctx,"h");}function body_30(chk,ctx){return chk.write("<div class=\"control-group\"><label class=\"control-label\" for=\"CustomUIList\">Custom UIs</label><div class=\"controls\" id=\"CustomUIList\">").section(ctx.getPath(false,["CustomUICollection","CollectionContent"]),ctx,{"block":body_31},null).write("</div></div>");}function body_31(chk,ctx){return chk.write("<div><span>").reference(ctx.get("Content"),ctx,"h").write("</span><span>").partial("executeoperation_button_begin.dust",ctx,{"form_name":"IdentityDeleteCustomUI"}).write("data-customuiname=\"").reference(ctx.get("Content"),ctx,"h").write("\"").partial("executeoperation_button_end.dust",ctx,{"icon_class_name":"icon-remove-sign"}).write("</span><span>").partial("executeoperation_button_begin.dust",ctx,{"form_name":"IdentityCreateOrUpdateCustomUI"}).write("data-customuiname=\"").reference(ctx.get("Content"),ctx,"h").write("\"").partial("executeoperation_button_end.dust",ctx,{"icon_class_name":"icon-upload-alt"}).write("</span></div>");}return body_0;})();