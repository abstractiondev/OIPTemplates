(function(){dust.register("category_treeeditor.dust",body_0);function body_0(chk,ctx){return chk.write("<p><div id=\"nesttest\" class=\"dd\"><ol class=\"dd-list\">").section(ctx.getPath(false,["NodeSummarySource","CategoriesWithChildren"]),ctx,{"block":body_1},null).write("</ol></div></p><script>$('.dd').nestable({ });</script><p><button onclick=\"javascript:SaveCategoryHierarchy();\">Save Category Hierarchy</button></p>");}function body_1(chk,ctx){return chk.partial("category_treeitem.dust",ctx,null);}return body_0;})();