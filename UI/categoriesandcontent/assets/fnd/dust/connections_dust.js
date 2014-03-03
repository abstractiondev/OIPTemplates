(function(){dust.register("connections.dust",body_0);function body_0(chk,ctx){return chk.section(ctx.get("Connections"),ctx,{"block":body_1},null).write("<div id=\"LeftSideConnectionTree\"></div><div id=\"RightSideConnectionTree\"></div><button onclick=\"OpenAddConnectionForm()\">Add Connection</button><script type=\"text/javascript\">var UpdateConnectionThisSide = function(connectionID) {tOP.ExecuteOperationWithForm(\"UpdateConnectionThisSideCategories\", { \"ConnectionID\": connectionID});};var UpdateConnectionOtherSide = function(connectionID) {tOP.ExecuteOperationWithForm(\"UpdateConnectionOtherSideCategories\", { \"ConnectionID\": connectionID});};var OpenAddConnectionForm = function() {$(\"#OPInitiateIntegrationConnectionModal\").foundation('reveal', 'open');};var SetCategoryLinksFromTreeSelections = function(connectionID) {var leftNodes = $(\"#LeftSideConnectionTree\").dynatree('getSelectedNodes');var leftIDs = $.map(leftNodes, function(node) {return node.data.ID;});var rightNodes = $(\"#RightSideConnectionTree\").dynatree('getSelectedNodes');var rightIDs = $.map(rightNodes, function(node) {return node.data.ID;});if(leftIDs.length == 0 || rightIDs.length == 0)return;var addLink = {SourceCategoryID: leftIDs[0],TargetCategoryID: rightIDs[0],LinkingType: \"ONE2ONE\"};var conn = GetConnectionByID(connectionID);var existingLinks = $.map(conn.CategoryLinks, function(catLink) {return {SourceCategoryID: catLink.SourceCategoryID,TargetCategoryID: catLink.TargetCategoryID,LinkingType: catLink.LinkingType};});existingLinks.push(addLink);var parameterObj = {ConnectionID: connectionID,LinkItems: existingLinks};tOP.ExecuteOperationWithAjax(\"TheBall.Interface.SetCategoryLinkingForConnection\", parameterObj);};var PopulateTreeConnectors = function(connectionID) {var conn = GetConnectionByID(connectionID);$(\"#LeftSideConnectionTree\").dynatree({onActivate: function(node) {},persist: false,children: conn.UI_ThisSideCategories,checkbox: true,selectMode: 1});$(\"#RightSideConnectionTree\").dynatree({onActivate: function(node) {},persist: false,children: conn.UI_OtherSideCategories,checkbox: true,selectMode: 1});};</script>");}function body_1(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write("<button onclick=\"UpdateConnectionThisSide('").reference(ctx.get("ID"),ctx,"h").write("')\">Update this side ").reference(ctx.get("Description"),ctx,"h").write("</button><button onclick=\"UpdateConnectionOtherSide('").reference(ctx.get("ID"),ctx,"h").write("')\">Update other side ").reference(ctx.get("Description"),ctx,"h").write("</button><button onClick=\"PopulateTreeConnectors('").reference(ctx.get("ID"),ctx,"h").write("')\">Populate Tree Connectors</button><button onclick=\"SetCategoryLinksFromTreeSelections('").reference(ctx.get("ID"),ctx,"h").write("')\">Set Category Links</button><table><tr><th>Linking Info</th></tr>").section(ctx.get("CategoryLinks"),ctx,{"block":body_3},null).write("</table>");}function body_3(chk,ctx){return chk.write("<tr><td>").reference(ctx.get("SourceCategoryID"),ctx,"h").write(" - ").reference(ctx.get("TargetCategoryID"),ctx,"h").write(" - ").reference(ctx.get("LinkingType"),ctx,"h").write("</td></tr>");}return body_0;})();