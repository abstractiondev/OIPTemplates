(function(){dust.register("textinput_singleline.dust",body_0);function body_0(chk,ctx){return chk.write("<div class=\"control-group\"><label class=\"control-label\" for=\"").reference(ctx.get("field_id"),ctx,"h").write("\">").reference(ctx.get("field_label"),ctx,"h").write("</label><div class=\"controls\"><input name=\"\"  id=\"").reference(ctx.get("field_id"),ctx,"h").write("\" type=\"text\"></div></div>");}return body_0;})();