(function(){dust.register("option_display_category.dust",body_0);function body_0(chk,ctx){return chk.write("CAT ").exists(ctx.get("Title"),ctx,{"else":body_1,"block":body_2},null);}function body_1(chk,ctx){return chk.reference(ctx.get("CategoryName"),ctx,"h");}function body_2(chk,ctx){return chk.reference(ctx.get("Title"),ctx,"h");}return body_0;})();