(function(){dust.register("searchresultsTest.dust",body_0);function body_0(chk,ctx){return chk.write("<div>Query string: ").reference(ctx.get("QueryString"),ctx,"h").write("</div><div>Index name: ").reference(ctx.get("IndexName"),ctx,"h").write("</div><div>Last request time: ").reference(ctx.get("LastRequestTime"),ctx,"h").write("</div><div>Last completion time: ").reference(ctx.get("LastCompletionTime"),ctx,"h").write("</div><div>Last query duration: ").reference(ctx.get("LastCompletionDurationMs"),ctx,"h").write(" ms</div><div>Is completed (according to last request): ").reference(ctx.get("IsQueryCompleted"),ctx,"h").write("</div><div>Results:</div><div>").section(ctx.get("QueryResultObjects"),ctx,{"block":body_1},null).write("</div>");}function body_1(chk,ctx){return chk.reference(ctx.get("ObjectDomainName"),ctx,"h").write("/").reference(ctx.get("ObjectName"),ctx,"h").write("/").reference(ctx.get("ObjectID"),ctx,"h").write(" : ").reference(ctx.get("Rank"),ctx,"h").write("<br>");}return body_0;})();