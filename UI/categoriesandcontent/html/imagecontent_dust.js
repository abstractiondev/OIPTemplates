(function(){dust.register("imagecontent.dust",body_0);function body_0(chk,ctx){return chk.section(ctx.getPath(false,["ImageContentsSource","ImageCollection","CollectionContent"]),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<div class=\"cards cards-profile pull-left images\"><fieldset><div class=\"gallery\" style=\"clear: both;\"><div class=\"element thumbnail pull-left sampleFilterOnefalse sampleFilterTwofalse\">").exists(ctx.get("ImageData"),ctx,{"block":body_2},null).write("<div class=\"clearfix\"></div><div class=\"image-data\"><span class=\"pull-right\">").partial("objectdeleteicon.dust",ctx,{"object_delete_title":body_3}).write("</span><span class=\"pull-right\"><a data-toggle=\"modal\" role=\"button\" class=\"open-imagecontenteditor\" href=\"#\" data-contentinfo=\"").reference(ctx.get("RelativeLocation"),ctx,"h").write(":").reference(ctx.get("MasterETag"),ctx,"h").write("\"data-id=\"").reference(ctx.get("ID"),ctx,"h").write("\"").exists(ctx.get("ImageData"),ctx,{"block":body_4},null).exists(ctx.get("Title"),ctx,{"block":body_5},null).exists(ctx.get("Caption"),ctx,{"block":body_6},null).write("data-categories=\"").exists(ctx.get("Categories"),ctx,{"block":body_7},null).write("\"data-locations=\"").exists(ctx.get("Locations"),ctx,{"block":body_10},null).write("\"><i class=\"icon-edit\"></i></a></span><span class=\"title\">").reference(ctx.get("Title"),ctx,"h").write("</span>").exists(ctx.get("Caption"),ctx,{"block":body_13},null).write("</div></div><div class=\"clearfix\"></div></div></fieldset></div>");}function body_2(chk,ctx){return chk.write("<div style=\"max-width: 220px\"><img src=\"../../AaltoGlobalImpact.OIP/MediaContent/").reference(ctx.getPath(false,["ImageData","ID"]),ctx,"h").write("_64x64_crop").reference(ctx.getPath(false,["ImageData","AdditionalFormatFileExt"]),ctx,"h").write("\" /></div>");}function body_3(chk,ctx){return chk.reference(ctx.get("Title"),ctx,"h");}function body_4(chk,ctx){return chk.write("data-imageid=\"").reference(ctx.getPath(false,["ImageData","ID"]),ctx,"h").write("\" data-imageext=\"").reference(ctx.getPath(false,["ImageData","AdditionalFormatFileExt"]),ctx,"h").write("\" ");}function body_5(chk,ctx){return chk.write("data-title=\"").reference(ctx.get("Title"),ctx,"h").write("\" ");}function body_6(chk,ctx){return chk.write("data-subtitle=\"").reference(ctx.get("Caption"),ctx,"h").write("\" ");}function body_7(chk,ctx){return chk.section(ctx.get("Categories"),ctx,{"block":body_8},null);}function body_8(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_9},null);}function body_9(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write(",");}function body_10(chk,ctx){return chk.section(ctx.get("Locations"),ctx,{"block":body_11},null);}function body_11(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_12},null);}function body_12(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h").write(",");}function body_13(chk,ctx){return chk.write("<span class=\"title\">").reference(ctx.get("Caption"),ctx,"h").write("</span>");}return body_0;})();