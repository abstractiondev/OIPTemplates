(function(){dust.register("modal_addobject_begin.dust",body_0);function body_0(chk,ctx){return chk.write("<div id=\"add-").reference(ctx.get("form_name"),ctx,"h").write("\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>").reference(ctx.get("header_title"),ctx,"h").write("</h3></div><div class=\"modal-body\"><form method=\"post\" class=\"form-horizontal\" enctype=\"multipart/form-data\"><fieldset><input type=\"hidden\" name=\"ObjectDomainName\" value=\"").reference(ctx.get("object_domain"),ctx,"h").write("\" /><input type=\"hidden\" name=\"ObjectName\" value=\"").reference(ctx.get("object_type"),ctx,"h").write("\" /><input type=\"hidden\" name=\"ExecuteOperation\" value=\"CreateSpecifiedInformationObjectWithValues\" />");}return body_0;})();