(function(){dust.register("nodetiles.dust",body_0);function body_0(chk,ctx){return chk.write("<div class=\"row-fluid filter option-set clearfix \" data-filter-group=\"DynCat\"><div class=\"filter-box\"><button type=\"button\" class=\"btn btn-filter\" data-toggle=\"collapse\" data-target=\".isotope-sort\">Filter</button><ul class=\"isotope-sort categories\"><li class=\"isotope-sort-item\"><a class=\"filter badge active selected\" style=\"color: black;\" href=\"#\" data-filter-value=\".nodetile\"><i class=\"icon-home\"></i></a>            </li>").section(ctx.get("RootCategories"),ctx,{"block":body_1},null).write("</ul><a class=\"badge\" style=\"color: black\" href=\"http://ams.welearnit.org\"><i class=\"icon-signin\"></i> Ammattilaissanomat</a></div><style type=\"text/css\">html {overflow-y: auto;overflow-x: hidden;}.nodetile {width: 220px;margin: 9px;border: solid;padding: 5px;border: 1px solid #d3d3d3;/*border-radius: 7px;*/background-color: #f8fff8;/*background-color: blue;*/-moz-box-shadow: 1px 1px 10px #b3b3b3;-webkit-box-shadow: 1px 1px 10px #b3b3b3;box-shadow: 1px 1px 10px #b3b3b3;}div.excerpt {font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size: 14px;color: #333;line-height: 1.4285;}.tileimagecontainer {}.tileimage {width: 100%;}.embedimage {width: 100%;height:176px;}</style><div id=\"container\">").section(ctx.get("Nodes"),ctx,{"block":body_4},null).write("</div></div><script src='../assets/js/jquery.isotope.min.js'></script><!--filter and masonry script--><script src='../assets/js/jquery.isotope.init.js'></script><!--custom settings--><script>$(function(){var $container = $('#container'),filters = {};$container.isotope({itemSelector : '.nodetile',animationEngine: 'jquery',animationOptions: {duration: 750,easing: 'linear',queue: false},});var loaded = 0;var numImages = $(\"img\").length;$(\"img\").load(function() {++loaded;if (loaded === numImages) {$container.isotope('reLayout');}});/* filter buttons */$('a.filter').click(function(){var $this = $(this);/* don't proceed if already selected */if ( $this.hasClass('selected') ) {return false;}/*alert(\"FILTERING!\");*/var $optionSet = $this.parents('.option-set');/* change selected class */$optionSet.find('.selected').removeClass('selected');$this.addClass('selected');/*// store filter value in object// i.e. filters.color = 'red'*/var group = $optionSet.attr('data-filter-group');filters[ group ] = $this.attr('data-filter-value');/* // convert object into array */var isoFilters = [];for ( var prop in filters ) {isoFilters.push( filters[ prop ] )}var selector = isoFilters.join('');$container.isotope({ filter: selector });var $allPlayers = $(\".playerobject\").parent();/*var hiddenPlayers = $allPlayers.parent().parent(\".isotope-hidden\");var visiblePlayers = $allPlayers.parent().parent(\":not(.isotope-hidden)\");*/var $hiddenPlayers = $allPlayers.filter(\".isotope-hidden\");var $visiblePlayers = $allPlayers.filter(\":not(.isotope-hidden)\");var $hiddenObjects = $hiddenPlayers.children(\".playerobject\");var $visibleObjects = $visiblePlayers.children(\".playerobject\");/*alert($hiddenObjects.first().html());*/$hiddenObjects.each(function(index, element) {$(element).css(\"visibility\", \"hidden\");});$visibleObjects.each(function(index, element) {$(element).css(\"visibility\", \"visible\");});/*var embeddedObjects = $(\".playerobject\").parent().parent();*//*alert(\"Visible: \" + visiblePlayers.length + \" hidden: \" + hiddenPlayers.length + \" all: \" + $allPlayers.length);*/return false;});});$(function() {OipOpenMap = function () {var htmlContent = '</div><div id=\"map\" style=\"height:522px;\"></div>';/*$(\"#SelectedContentContainer\").html(htmlContent);*/OipShowHtmlInDetailPaneWithClose(htmlContent);OipSetupDefaultMap('map', false);$(document).scrollTop(0);return true;};/*$(\".oipclicktoview\").on('click', OipOpenArticle);*/$(\".mapclicktoview\").on('click', OipOpenMap);$(\"#TileDefaultFilter\").trigger('click');OipSetupDefaultMap('smalldefaultmap');var getOIParticleUrl = function (type, id) {var prefix;var suffix = \"_DefaultView.phtml\";switch (type) {case \"news\":prefix = \"AaltoGlobalImpact.OIP.Blog_\";break;case \"activity\":prefix = \"AaltoGlobalImpact.OIP.Activity_\";break;}return prefix + id + suffix;};var getURLParameter = function (name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, \"\"])[1].replace(/\\+/g, '%20')) || null;};var typePar = getURLParameter(\"type\");var idPar = getURLParameter(\"id\");if (typePar != null && idPar != null) {var oipArticleUrl = getOIParticleUrl(typePar, idPar);OipOpenArticle(oipArticleUrl);window.history.pushState(\"string\", \"Aalto Global Impact\", \"oip-layout-landing.phtml\");}});</script>");}function body_1(chk,ctx){return chk.write("<li class=\"isotope-sort-item\"><a href=\"#\"  class=\"filter badge\" style=\"background-color: ").section(ctx.get("catTagColor"),ctx,{"block":body_2},null).write("; color:").section(ctx.get("catTagTextColor"),ctx,{"block":body_3},null).write("\"data-filter-value=\".").reference(ctx.get("CategoryName"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a></li>");}function body_2(chk,ctx){return chk;}function body_3(chk,ctx){return chk;}function body_4(chk,ctx){return chk.write("<div class=\"\"><!-- three_col four_col two_col -->").section(ctx.get("CollectionContent"),ctx,{"block":body_5},null).write("</div>");}function body_5(chk,ctx){return chk.write("<div class=\"nodetile ").section(ctx.get("Categories"),ctx,{"block":body_6},null).write("\">").exists(ctx.get("ImageBaseUrl"),ctx,{"else":body_7,"block":body_9},null).write("<div class=\"entry-summary\"><h4>").exists(ctx.get("IsCategoryFilteringNode"),ctx,{"else":body_17,"block":body_22},null).write("</h4><div class=\"excerpt\">").reference(ctx.get("ExcerptRendered"),ctx,"h",["s"]).write("</div><p class=\"w5\"><i class=\"icon-tag\"></i>").section(ctx.get("Categories"),ctx,{"block":body_27},null).write("<br><span><i class=\"icon-group\"></i></span> ").section(ctx.get("Authors"),ctx,{"block":body_30},null).write("<br><span><i class=\"icon-calendar\"></i></span>").reference(ctx.get("TimestampText"),ctx,"h").write("</p></div></div>");}function body_6(chk,ctx){return chk.reference(ctx.get("CategoryName"),ctx,"h").write(" ");}function body_7(chk,ctx){return chk.helper("eq",ctx,{"block":body_8},{"key":ctx.get("TechnicalSource"),"value":"EMBEDDEDCONTENT"});}function body_8(chk,ctx){return chk.write("<script type=\"text/javascript\" src=\"//mmp.streamuk.com/p/2000147/sp/200014700/embedIframeJs/uiconf_id/11170182/partner_id/2000147\"></script><object id=\"kaltura_player_1389787001").reference(ctx.get("ID"),ctx,"h").write("\" name=\"kaltura_player_1389787001").reference(ctx.get("ID"),ctx,"h").write("\" type=\"application/x-shockwave-flash\" allowFullScreen=\"true\"allowNetworking=\"all\" allowScriptAccess=\"always\" class=\"embedimage playerobject\" bgcolor=\"#000000\"resource=\"//mmp.streamuk.com/index.php/kwidget/cache_st/1389787001").reference(ctx.get("ID"),ctx,"h").write("/wid/_2000147/uiconf_id/11170182/entry_id/").reference(ctx.get("ActualContentUrl"),ctx,"h").write("\"data=\"//mmp.streamuk.com/index.php/kwidget/cache_st/1389787001").reference(ctx.get("ID"),ctx,"h").write("/wid/_2000147/uiconf_id/11170182/entry_id/").reference(ctx.get("ActualContentUrl"),ctx,"h").write("\"><param name=\"allowFullScreen\" value=\"true\" /><param name=\"allowNetworking\" value=\"all\" /><param name=\"allowScriptAccess\" value=\"always\" /><param name=\"bgcolor\" value=\"#000000\" /><param name=\"flashVars\" value=\"\" /><param name=\"movie\" value=\"http://mmp.streamuk.com/index.php/kwidget/cache_st/1389787001").reference(ctx.get("ID"),ctx,"h").write("/wid/_2000147/uiconf_id/11170182/entry_id/").reference(ctx.get("ActualContentUrl"),ctx,"h").write("\" /></object>");}function body_9(chk,ctx){return chk.write("<div class=\"tileimagecontainer\">").exists(ctx.get("IsCategoryFilteringNode"),ctx,{"else":body_10,"block":body_15},null).write("</div>");}function body_10(chk,ctx){return chk.helper("eq",ctx,{"else":body_11,"block":body_14},{"key":ctx.get("TechnicalSource"),"value":"LINKTOCONTENT"});}function body_11(chk,ctx){return chk.helper("eq",ctx,{"else":body_12,"block":body_13},{"key":ctx.get("TechnicalSource"),"value":"IMAGE"});}function body_12(chk,ctx){return chk.write("<a class=\"hover oipclicktoview\" href=\"#\" data-contenturl=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write(".json\"><img class=\"tileimage\" src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop").reference(ctx.get("ImageExt"),ctx,"h").write("\" alt=\"\" /><span class=\"plus\"></span></a>");}function body_13(chk,ctx){return chk.write("<img class=\"tileimage\" src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop").reference(ctx.get("ImageExt"),ctx,"h").write("\" alt=\"\" /><span class=\"plus\"></span>");}function body_14(chk,ctx){return chk.write("<a class=\"hover\" href=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write("\"><img class=\"tileimage\" src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop").reference(ctx.get("ImageExt"),ctx,"h").write("\" alt=\"\" /><span class=\"plus\"></span></a>");}function body_15(chk,ctx){return chk.write("<a class=\"hover filter\" href=\"#\" data-filter-value=\"").section(ctx.getPath(false,["CategoryFilters","CollectionContent"]),ctx,{"block":body_16},null).write("\"><img class=\"tileimage\" src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop").reference(ctx.get("ImageExt"),ctx,"h").write("\" alt=\"\" /><span class=\"plus\"></span></a>");}function body_16(chk,ctx){return chk.write(".").reference(ctx.get("Content"),ctx,"h");}function body_17(chk,ctx){return chk.helper("eq",ctx,{"else":body_18,"block":body_21},{"key":ctx.get("TechnicalSource"),"value":"LINKTOCONTENT"});}function body_18(chk,ctx){return chk.helper("eq",ctx,{"else":body_19,"block":body_20},{"key":ctx.get("TechnicalSource"),"value":"IMAGE"});}function body_19(chk,ctx){return chk.write("<a class=\"oipclicktoview\" href=\"#\" data-contenturl=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write(".json\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_20(chk,ctx){return chk.write("<div>").reference(ctx.get("Title"),ctx,"h").write("</div>");}function body_21(chk,ctx){return chk.write("<a href=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_22(chk,ctx){return chk.write("<a class=\"filter badge\" href=\"#\"").section(ctx.getPath(false,["CategoryFilters","CollectionContent"]),ctx,{"block":body_23},null).write("data-filter-value=\"").section(ctx.getPath(false,["CategoryFilters","CollectionContent"]),ctx,{"block":body_26},null).write("\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_23(chk,ctx){return chk.write("style=\"background-color: ").section(ctx.get("catFilterTagColor"),ctx,{"block":body_24},null).write("; color:").section(ctx.get("catFilterTagTextColor"),ctx,{"block":body_25},null).write("\"");}function body_24(chk,ctx){return chk;}function body_25(chk,ctx){return chk;}function body_26(chk,ctx){return chk.write(".").reference(ctx.get("Content"),ctx,"h");}function body_27(chk,ctx){return chk.write("<a href=\"#\" class=\"filter badge\" style=\"background-color: ").section(ctx.get("catTagColor"),ctx,{"block":body_28},null).write("; color:").section(ctx.get("catTagTextColor"),ctx,{"block":body_29},null).write("\" data-filter-value=\".").reference(ctx.get("CategoryName"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_28(chk,ctx){return chk;}function body_29(chk,ctx){return chk;}function body_30(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_31},null);}function body_31(chk,ctx){return chk.reference(ctx.get("Content"),ctx,"h").write(" ");}return body_0;})();