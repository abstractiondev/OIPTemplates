(function(){dust.register("nodetiles.dust",body_0);function body_0(chk,ctx){return chk.write("<div class=\"row-fluid filter option-set clearfix \" data-filter-group=\"DynCat\"><div class=\"filter-box\"><button type=\"button\" class=\"btn btn-filter\" data-toggle=\"collapse\" data-target=\".isotope-sort\">Filter</button><ul class=\"isotope-sort categories\">").section(ctx.get("RootCategories"),ctx,{"block":body_1},null).write("</ul></div><div id=\"container\">").section(ctx.get("Nodes"),ctx,{"block":body_4},null).write("</div></div><script src='../assets/js/jquery.isotope.min.js'></script><!--filter and masonry script--><script src='../assets/js/jquery.isotope.init.js'></script><!--custom settings--><script>$(function(){var $container = $('#container'),filters = {};$container.isotope({itemSelector : '.nodetile',masonry: {columnWidth: 80}});/* filter buttons */$('a.filter').click(function(){var $this = $(this);/* don't proceed if already selected */if ( $this.hasClass('selected') ) {return false;}/*alert(\"FILTERING!\");*/var $optionSet = $this.parents('.option-set');/* change selected class */$optionSet.find('.selected').removeClass('selected');$this.addClass('selected');/*// store filter value in object// i.e. filters.color = 'red'*/var group = $optionSet.attr('data-filter-group');filters[ group ] = $this.attr('data-filter-value');/* // convert object into array */var isoFilters = [];for ( var prop in filters ) {isoFilters.push( filters[ prop ] )}var selector = isoFilters.join('');$container.isotope({ filter: selector });return false;});});$(function() {OipOpenMap = function () {var htmlContent = '</div><div id=\"map\" style=\"height:522px;\"></div>';/*$(\"#SelectedContentContainer\").html(htmlContent);*/OipShowHtmlInDetailPaneWithClose(htmlContent);OipSetupDefaultMap('map', false);$(document).scrollTop(0);return true;};/*$(\".oipclicktoview\").on('click', OipOpenArticle);*/$(\".mapclicktoview\").on('click', OipOpenMap);$(\"#TileDefaultFilter\").trigger('click');OipSetupDefaultMap('smalldefaultmap');var getOIParticleUrl = function (type, id) {var prefix;var suffix = \"_DefaultView.phtml\";switch (type) {case \"news\":prefix = \"AaltoGlobalImpact.OIP.Blog_\";break;case \"activity\":prefix = \"AaltoGlobalImpact.OIP.Activity_\";break;}return prefix + id + suffix;};var getURLParameter = function (name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, \"\"])[1].replace(/\\+/g, '%20')) || null;};var typePar = getURLParameter(\"type\");var idPar = getURLParameter(\"id\");if (typePar != null && idPar != null) {var oipArticleUrl = getOIParticleUrl(typePar, idPar);OipOpenArticle(oipArticleUrl);window.history.pushState(\"string\", \"Aalto Global Impact\", \"oip-layout-landing.phtml\");}});</script>");}function body_1(chk,ctx){return chk.write("<li class=\"isotope-sort-item\"><a href=\"#\"  class=\"filter badge\" style=\"background-color: ").section(ctx.get("catTagColor"),ctx,{"block":body_2},null).write("; color:").section(ctx.get("catTagTextColor"),ctx,{"block":body_3},null).write("\"data-filter-value=\".").reference(ctx.get("CategoryName"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a></li>");}function body_2(chk,ctx){return chk;}function body_3(chk,ctx){return chk;}function body_4(chk,ctx){return chk.write("<ul class=\"gallery four_col\"><!-- three_col four_col two_col -->").section(ctx.get("CollectionContent"),ctx,{"block":body_5},null).write("<li class=\"nodetile catMaps\"><a class=\"hover mapclicktoview\" href=\"#\"><div style=\"height:220px;width:220px;\" id=\"smalldefaultmap\"></div><span class=\"plus\"></span></a><div class=\"entry-summary\"><h4><a class=\"mapclicktoview\" href=\"#\">Overview Map of Activities</a></h4><div>Activities bound to locations on a map.</div><div><a href=\"#Maps\" class=\"badge catMaps\">Maps</a></div><!--horizontal description --><p class=\"w5\"><a href=\"#Maps\" class=\"badge maps\">Maps</a><br><i class=\"icon-group\"></i>Various authors</p></div><!--close entry-summary--></li></ul>");}function body_5(chk,ctx){return chk.write("<li class=\"nodetile ").section(ctx.get("Categories"),ctx,{"block":body_6},null).write("\">").exists(ctx.get("ImageBaseUrl"),ctx,{"block":body_7},null).write("<div class=\"entry-summary\"><h4>").exists(ctx.get("IsCategoryFilteringNode"),ctx,{"else":body_11,"block":body_12},null).write("</h4><div>").reference(ctx.get("ExcerptRendered"),ctx,"h",["s"]).write("</div><p class=\"w5\"><i class=\"icon-tag\"></i>").section(ctx.get("Categories"),ctx,{"block":body_17},null).write("<br><span><i class=\"icon-group\"></i></span> ").section(ctx.get("Authors"),ctx,{"block":body_20},null).write("<br><span><i class=\"icon-calendar\"></i></span>").reference(ctx.get("TimestampText"),ctx,"h").write("</p></div></li>");}function body_6(chk,ctx){return chk.reference(ctx.get("CategoryName"),ctx,"h").write(" ");}function body_7(chk,ctx){return chk.exists(ctx.get("IsCategoryFilteringNode"),ctx,{"else":body_8,"block":body_9},null);}function body_8(chk,ctx){return chk.write("<a class=\"hover oipclicktoview\" href=\"#\" data-contenturl=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write(".json\"><img src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop.jpg\" alt=\"\" /><span class=\"plus\"></span></a>");}function body_9(chk,ctx){return chk.write("<a class=\"hover filter\" href=\"#\" data-filter-value=\"").section(ctx.getPath(false,["CategoryFilters","CollectionContent"]),ctx,{"block":body_10},null).write("\"><img src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop.jpg\" alt=\"\" /><span class=\"plus\"></span></a>");}function body_10(chk,ctx){return chk.write(".").reference(ctx.get("Content"),ctx,"h");}function body_11(chk,ctx){return chk.write("<a class=\"oipclicktoview\" href=\"#\" data-contenturl=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write(".json\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_12(chk,ctx){return chk.write("<a class=\"filter badge\" href=\"#\"").section(ctx.getPath(false,["CategoryFilters","CollectionContent"]),ctx,{"block":body_13},null).write("data-filter-value=\"").section(ctx.getPath(false,["CategoryFilters","CollectionContent"]),ctx,{"block":body_16},null).write("\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_13(chk,ctx){return chk.write("style=\"background-color: ").section(ctx.get("catFilterTagColor"),ctx,{"block":body_14},null).write("; color:").section(ctx.get("catFilterTagTextColor"),ctx,{"block":body_15},null).write("\"");}function body_14(chk,ctx){return chk;}function body_15(chk,ctx){return chk;}function body_16(chk,ctx){return chk.write(".").reference(ctx.get("Content"),ctx,"h");}function body_17(chk,ctx){return chk.write("<a href=\"#\" class=\"filter badge\" style=\"background-color: ").section(ctx.get("catTagColor"),ctx,{"block":body_18},null).write("; color:").section(ctx.get("catTagTextColor"),ctx,{"block":body_19},null).write("\" data-filter-value=\".").reference(ctx.get("CategoryName"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_18(chk,ctx){return chk;}function body_19(chk,ctx){return chk;}function body_20(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_21},null);}function body_21(chk,ctx){return chk.reference(ctx.get("Content"),ctx,"h").write(" ");}return body_0;})();