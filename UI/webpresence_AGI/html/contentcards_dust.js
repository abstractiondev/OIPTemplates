(function(){dust.register("contentcards.dust",body_0);function body_0(chk,ctx){return chk.section(ctx.get("content"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<div class='").reference(ctx.get("content_type"),ctx,"h").write("' id='contentCardDataId-").reference(ctx.get("id"),ctx,"h").write("'><div class='content-card' style='width: 210px;'><a href='#' class='cardClickableWrapper' data-itemurl=\"").reference(ctx.get("itemUrl"),ctx,"h").write("\"><img src='").reference(ctx.get("image"),ctx,"h").write("' alt='image' id='contentCardImage-dataID-").reference(ctx.get("id"),ctx,"h").write("'>").section(ctx.get("categories"),ctx,{"block":body_2},null).write("<div class='content-card-title' style='font-size:95%; font-weight:bold; color:#000000;' id='contentCardTitle-dataID-").reference(ctx.get("id"),ctx,"h").write("'>").reference(ctx.get("title"),ctx,"h").write("</div><div class='content-card-excerpt'><span class='content-card-spanExcerpt'>").reference(ctx.get("excerpt"),ctx,"h",["s"]).write("</span></div><div class='content-card-line'><hr></div><div class='content-card-excerpt' id='contentCardAuthor-dataID-").reference(ctx.get("id"),ctx,"h").write("'><i class='icon-pencil content-card-spanAuthor'></i>&nbsp;<span class='content-card-spanAuthor'>").reference(ctx.get("author"),ctx,"h").write("</span></div><div class='content-card-excerpt' id='contentCardDate-dataID-").reference(ctx.get("id"),ctx,"h").write("'><i class='icon-calendaralt-cronjobs content-card-spanAuthor'></i></i>&nbsp;<span class='content-card-spanAuthor'>").reference(ctx.get("publishedDate"),ctx,"h").write("</span></div></a></div></div>");}function body_2(chk,ctx){return chk.write("<div class='content-card-fancyTag'><span class='fancyTag'>").reference(ctx.get("Title"),ctx,"h").write("</span></div>");}return body_0;})();