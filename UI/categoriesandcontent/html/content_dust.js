(function(){dust.register("content.dust",body_0);function body_0(chk,ctx){return chk.write("<div class=\"content\"><div class=\"container-fluid\"><div class=\"row-fluid\"><div class=\"span12\"><div class=\"fancy-tab-container\"><div class=\"tab-content\"><div class=\"tab-pane fade\" id=\"tab-identity\">").partial("identity.dust",ctx,null).write("</div><script type=\"text/javascript\">$(function(){fancyFilter('.filter', '#content-tiles');/* load isotope when tab is shown */$('a[data-toggle=\"tab\"]').on('shown', function (e) {if ($(e.target).attr('href')==\"#tab-content\"){$(\"#content-tiles\").isotope({'filter':\".cards\"});}if ($(e.target).attr('href')==\"#tab-categories\"){$(\"#category-tiles\").isotope({'filter':\".category-card\"});}});});</script><div class=\"tab-pane fade in active\" id=\"tab-content\"><ul class=\"filter nav nav-pills pull-left\"><li style=\"line-height: 18px;font-size: 12px;padding-top:8px;padding-bottom:8px;margin-right: 8px\">Show: </li><li class=\"active\"><a href=\"#all\" data-filter=\".cards\">All</a></li><li><a href=\"#texts\" data-filter=\".texts\">Texts</a></li><li><a href=\"#activities\" data-filter=\".activities\">Activities</a></li><li><a href=\"#images\" data-filter=\".images\">Images</a></li><li><a href=\"#files\" data-filter=\".files\">Files</a></li></ul><div id=\"content-tiles\" class=\"gallery\" style=\"clear: both;\">").partial("textcontents.dust",ctx,null).partial("binaryfilecontent.dust",ctx,null).partial("imagecontent.dust",ctx,null).write("</div>").partial("button_addtextcontent.dust",ctx,null).partial("completefileupload.dust",ctx,null).write("</div>").partial("form_addtextcontent.dust",ctx,null).partial("form_edittextcontent.dust",ctx,null).write("<div class=\"tab-pane fade\" id=\"tab-categories\"><h3>Note! Category hierarchy requires to be Saved always after any changes to categories!</h3>").partial("category_treeeditor.dust",ctx,null).write("</div>").partial("form_addcategory.dust",ctx,null).partial("form_editcategory.dust",ctx,null).write("<div class=\"tab-pane fade\" id=\"tab-collaborators\">").partial("collaborators.dust",ctx,null).write("</div><div class=\"tab-pane fade\" id=\"tab-locations-current\"><div id=\"location-tiles\" class=\"gallery\" style=\"clear: both;\">").partial("locations.dust",ctx,null).write("<div class=\"clearfix\"></div></div>").partial("button_addlocation.dust",ctx,null).write("</div>").partial("form_addlocation.dust",ctx,null).partial("form_editlocation.dust",ctx,null).write("<div class=\"tab-pane fade\" id=\"tab-devices\">").partial("devices.dust",ctx,null).write("</div><div class=\"tab-pane fade\" id=\"tab-inputs\">").partial("inputs.dust",ctx,null).write("</div><div class=\"tab-pane fade\" id=\"tab-delete\"><form  method=\"post\" class=\"form-horizontal \"><fieldset id=\"group-admin-delete\"><p>are you sure you want to delete this group? You break all the links as well</p><div class=\"control-group controls\"><div class=\"form-actions\" style=\"padding:0;margin:0;border-top:0;background-color: transparent\"><button value=\"true\" name=\"btnCancel\"  class=\"btn\">Cancel</button><button type=\"submit\" class=\"btn btn-primary btn-danger\" name=\"RootSourceAction\" id=\"RootSourceAction\" value=\"Delete\">Delete</button></div><p class=\"help-block\">Here we could add some explanatory text</p></div></fieldset></form></div><div class=\"tab-pane fade\" id=\"tab-view-as-calendar\"><form id=\"some-id\" method=\"post\" class=\"form-horizontal \"><fieldset id=\"group-admin-calendar\"><h2>Upcoming Events</h2><div id='calendar'></div><footer></footer></fieldset></form></div></div><!--.tab-content--></div><!--.fancy-tab-content--></div><!-- .span12--></div><!-- .row-fluid--><footer><hr><p class=\"pull-right\">Design by <a href=\"http://www.portnine.com\" target=\"_blank\">Caloom Ltd</a></p><p>&copy; 2013 <a href=\"#\">Caloom / OIP / Aalto Global Impact</a></p></footer></div><!--.container-fluid--></div><!--.content--><script type=\"text/javascript\">$(document).ready(function(){$(\"#toggler\").click(function(){$(this).toggleClass('active, inactive');})})</script>").partial("common_modals.dust",ctx,null);}return body_0;})();