(function(){dust.register("form_begin.dust",body_0);function body_0(chk,ctx){return chk.write("<form id=\"").reference(ctx.get("form_id"),ctx,"h").write("\" method=\"post\" target=\"OperationManager_IFrame\" enctype=\"multipart/form-data\"><fieldset>").notexists(ctx.get("no_operation"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.exists(ctx.get("operation_name"),ctx,{"else":body_2,"block":body_3},null);}function body_2(chk,ctx){return chk.write("<input type=\"hidden\" name=\"ContentSourceInfo\" value=\"\" />");}function body_3(chk,ctx){return chk.write("<input type=\"hidden\" name=\"ExecuteOperation\" value=\"").reference(ctx.get("operation_name"),ctx,"h").write("\" />");}return body_0;})();