(function(){dust.register("navbar.dust",body_0);function body_0(chk,ctx){return chk.section(ctx.getPath(false,["GroupContainerSource","GroupContainer","GroupProfile"]),ctx,{"block":body_1},null).section(ctx.getPath(false,["AccountContainer","AccountContainer","AccountModule","Profile"]),ctx,{"block":body_2},null).write("<li><a tabindex=\"-1\" href=\"/TheBallLogin.aspx?SignOut=true\">Logout</a></li></ul><li class=\"hidden-phone\"><a class=\"brand\" href=\"index.html\">@ Open Innovation Platform</a></li></ul></div></div><!-- .navbar change-->");}function body_1(chk,ctx){return chk.write("<div class=\"navbar\"><div class=\"navbar-inner\"><ul class=\"nav pull-left\"><li id=\"group-menu\" class=\"dropdown\"><a href=\"#\" role=\"button\" class=\"dropdown-toggle active\" data-toggle=\"dropdown\"><i class=\"icon-user\"></i> ").reference(ctx.get("GroupName"),ctx,"h").write("<i class=\"icon-caret-down\"></i></a><ul class=\"dropdown-menu\"><li><a tabindex=\"-1\" href=\"../../wwwsite/html/index.html\">").reference(ctx.get("GroupName"),ctx,"h").write("'s web presence preview</a></li><li class=\"divider\"></li><li class=\"divider visible-phone\"></li>");}function body_2(chk,ctx){return chk.write("<li><a tabindex=\"-1\" href=\"/auth/account/\">").reference(ctx.get("FirstName"),ctx,"h").write(" ").reference(ctx.get("LastName"),ctx,"h").write("'s Account Home</a></li><li class=\"divider\"></li>");}return body_0;})();