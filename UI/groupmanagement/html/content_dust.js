(function(){dust.register("content.dust",body_0);function body_0(chk,ctx){return chk.write("<div class=\"content\"><div class=\"container-fluid\"><div class=\"row-fluid\"><div class=\"span12\"><div class=\"fancy-tab-container\"><div class=\"tab-content\"><div class=\"tab-pane fade in active\" id=\"tab-identity\">").partial("identity.dust",ctx,null).write("</div><div class=\"tab-pane fade\" id=\"tab-content\"><script type=\"text/javascript\">$(function(){fancyFilter('.filter', '#gallery-media');/* load isotope when tab is shown */$('a[data-toggle=\"tab\"]').on('shown', function (e) {if ($(e.target).attr('href')==\"#tab-media\"){$(\"#gallery-media\").isotope({'filter':\".cards\"});}});});</script><div><fieldset id=\"current-imagegroups\"><!-- id was current-imagegroups--><ul class=\"filter nav nav-pills pull-left\"><li style=\"line-height: 18px;font-size: 12px;padding-top:8px;padding-bottom:8px;margin-right: 8px\">Show: </li><li class=\"active\"><a href=\"#all\" data-filter=\".cards:not(.location)\">All</a></li><li><a href=\"#texts\" data-filter=\".texts\">Texts</a></li><li><a href=\"#activities\" data-filter=\".activities\">Activities</a></li><li><a href=\"#images\" data-filter=\".images\">Images</a></li><li><a href=\"#files\" data-filter=\".files\">Files</a></li></ul><ul class=\"filter nav nav-pills pull-right\"><li style=\"line-height: 18px;font-size: 12px;padding-top:8px;padding-bottom:8px\">View as: </li><li class=\"active\"><a href=\"#as-isotope\" data-filter=\".isotope\" title=\"show media in isotope format\"><i class=\"icon-bar-chart\"></i> </a></li><li><a href=\"#tab-view-as-calendar\" data-toggle=\"tab\" title=\"show media in calendar format\"><i class=\"icon-calendar\"></i> </a></li><li><a href=\"#by-location\" data-filter=\".location\" title=\"show media as locations\"><i class=\"icon-map-marker\"></i> </a></li><li><a href=\"#by-collaborator\" data-filter=\".collaborator\" title=\"show media by collaborator\"><i class=\"icon-user\"></i> </a></li></ul><div id=\"gallery-media\" class=\"gallery\" style=\"clear: both;\">").partial("textcontents.dust",ctx,null).write("<div class=\"clearfix\"></div></div><footer><div class=\"control-group controls pull-right\"><p>Content footer</p></div></footer></fieldset><!-- admin-group-media modals --><div id=\"view-collaborator-profile-sujil\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>view-collaborator-profile-sujil</h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\">Save changes</button></div></div><div id=\"view-media-card\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>view-media-card</h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\">Save changes</button></div></div><div id=\"remove-media-card\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>remove-media-card</h3></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\">Save changes</button></div></div><!-- end admin-group-modals --></div><!-- modals image --><div id=\"edit-image\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>View image</h3></div><div class=\"modal-body gallery\"><img src=\"../assets/img/dummy/admin-theme/gallery/1.jpg\" style=\"width:100%\"><div class=\"image-data\"><span class=\"title\">image name 1</span></div></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-danger\">Remove</button></div></div><!-- end modals image --><!-- modals image-group--><div id=\"edit-image-group-name\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Rename ").reference(ctx.get("image-group-name"),ctx,"h").write("</h3></div><div class=\"modal-body\"><form method=\"post\" class=\"form-horizontal\"><!-- THEBALL-FORM-HIDDEN-FIELDS --><fieldset><div class=\"control-group\"><!-- Text input--><label for=\"name-image-group-input\" class=\"control-label\">Rename the Image Group</label><div class=\"controls\"><input type=\"text\" class=\"input-xlarge\" placeholder=\"Image group 1\"><p class=\"help-block\">Supporting help text</p></div></div></fieldset></form></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\">Save changes</button></div></div><div id=\"remove-image-group\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Remove ").reference(ctx.get("image-group-name"),ctx,"h").write("</h3></div><div class=\"modal-body\"><form method=\"post\" class=\"form-horizontal\"><!-- THEBALL-FORM-HIDDEN-FIELDS --><fieldset><div class=\"control-group\"><!-- Text input--><label for=\"name-image-group-input\" class=\"control-label\">Remove</label><div class=\"controls\"><input type=\"checkbox\"><p class=\"help-block\">If you remove ").reference(ctx.get("image-group-name"),ctx,"h").write(" the images themselves will stay available to ").reference(ctx.get("group-name"),ctx,"h").write(". To remove individual image, select the image and inside the popup window choose \"remove this image\"</p></div></div></fieldset></form></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-danger\">Remove Image Group</button></div></div><div id=\"add-image-group\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Add an image group</h3></div><div class=\"modal-body\"><form method=\"post\" class=\"form-horizontal\"><!-- THEBALL-CONTEXT-ROOT-BEGIN:AaltoGlobalImpact.OIP.AddImageGroupInfo:AddImageGroup --><!-- THEBALL-FORM-HIDDEN-FIELDS --><fieldset><div class=\"control-group\"><label class=\"control-label\" for=\"\">Image group title</label><div class=\"controls\"><input name=\"\" class=\"span4\"  type=\"text\" value=\"\"></div></div></fieldset><!-- THEBALL-CONTEXT-END:* --></form></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\">Save changes</button></div></div></div><div class=\"tab-pane fade\" id=\"tab-categories\">").partial("categories.dust",ctx,null).write("</div><div class=\"tab-pane fade\" id=\"tab-collaborators\"><div>").partial("collaborators.dust",ctx,null).write("</div><!-- modals collaborators --><div id=\"view-project-profile\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h2 class=\"title\">Project Profile</h2></div><div class=\"modal-body\">list of collaborators, List of locations, contact information, invite oneself</div><div class=\"modal-footer\">footer</div></div><div id=\"view-group-profile\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h2 class=\"title\">Aalto Global Impact</h2></div><div class=\"modal-body\">Group profile</div><div class=\"modal-footer\">footer</div></div><div id=\"view-location-profile\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h2 class=\"title\"></h2></div><div class=\"modal-body modal-body-map\"><div id=\"location-map\"></div><p>A map + other groups and projects and collaborators (including those not member of this group)</p></div><footer>some footer</footer></div><div id=\"view-collaborator-profile\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h2 class=\"title\">Collaborator's profile</h2></div><div class=\"modal-body\">list of collaborators</div></div><div id=\"edit-collaborator-role\" class=\"modal hide fade well\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Edit collaborator Role</h3></div><div class=\"modal-body well\"><form method=\"post\" class=\"form-horizontal\"><fieldset><p>Change the Role of ").reference(ctx.get("account-name"),ctx,"h").write(".</p><div class=\"modal-footer\"><div class=\"control-group controls pull-right\"><div class=\"form-actions\" style=\"padding:0;margin:0;border-top:0\"><button class=\"btn\">Cancel</button> <button type=\"submit\" class=\"btn btn-primary btn-danger\">Remove !</button></div></div></div></fieldset></form></div></div><div id=\"remove-collaborator\" class=\"modal hide fade well\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Remove this collaborator</h3></div><div class=\"modal-body well\"><form method=\"post\" class=\"form-horizontal\"><fieldset><p>You are now about to remove this collaborator from your group.</p><div class=\"modal-footer\"><div class=\"control-group controls pull-right\"><div class=\"form-actions\" style=\"padding:0;margin:0;border-top:0\"><button class=\"btn\">Cancel</button> <button type=\"submit\" class=\"btn btn-primary btn-danger\">Remove !</button></div></div></div></fieldset></form></div></div><!-- end modals collaborators --></div><div class=\"tab-pane fade\" id=\"tab-locations-current\"><div id=\"location-tiles\" class=\"gallery\" style=\"clear: both;\">").partial("locations.dust",ctx,null).write("<div class=\"clearfix\"></div></div>").partial("button_addlocation.dust",ctx,null).write("</div>").partial("form_addlocation.dust",ctx,null).partial("form_editlocation.dust",ctx,null).write("<div class=\"tab-pane fade\" id=\"tab-devices\">").partial("devices.dust",ctx,null).write("</div><div class=\"tab-pane fade\" id=\"tab-inputs\">").partial("inputs.dust",ctx,null).write("</div><div class=\"tab-pane fade\" id=\"tab-delete\"><form  method=\"post\" class=\"form-horizontal \"><fieldset id=\"group-admin-delete\"><p>are you sure you want to delete this group? You break all the links as well</p><div class=\"control-group controls\"><div class=\"form-actions\" style=\"padding:0;margin:0;border-top:0;background-color: transparent\"><button value=\"true\" name=\"btnCancel\"  class=\"btn\">Cancel</button><button type=\"submit\" class=\"btn btn-primary btn-danger\" name=\"RootSourceAction\" id=\"RootSourceAction\" value=\"Delete\">Delete</button></div><p class=\"help-block\">Here we could add some explanatory text</p></div></fieldset></form></div><div class=\"tab-pane fade\" id=\"tab-view-as-calendar\"><form id=\"some-id\" method=\"post\" class=\"form-horizontal \"><fieldset id=\"group-admin-calendar\"><h2>Upcoming Events</h2><div id='calendar'></div><footer></footer></fieldset></form></div></div><!--.tab-content--></div><!--.fancy-tab-content--></div><!-- .span12--></div><!-- .row-fluid--><footer><hr><p class=\"pull-right\">Design by <a href=\"http://www.portnine.com\" target=\"_blank\">Caloom Ltd</a></p><p>&copy; 2013 <a href=\"#\">Caloom / OIP / Aalto Global Impact</a></p></footer></div><!--.container-fluid--></div><!--.content--><script type=\"text/javascript\">$(document).ready(function(){$(\"#toggler\").click(function(){$(this).toggleClass('active, inactive');})})</script><!-- LEAFLET CODE --><script type=\"text/javascript\">$(document).ready(function(){/* set up the map */mediamap = new L.Map('by-location');/* create the tile layer with correct attribution */var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';var osmAttrib='Map data © OpenStreetMap contributors';var osm = new L.TileLayer(osmUrl, { minZoom: 2, maxZoom: 15, attribution: osmAttrib });var mediamarkers = L.layerGroup();mediamarkers.addTo(mediamap);mediamap.setView(new L.LatLng(0,0),2);mediamap.addLayer(osm);$('a[data-toggle=\"tab\"]').on('shown', function (e) {if ($(e.target).attr('href')==\"#tab-media\"){mediamap.invalidateSize();}});$(\"a[href=#by-location]\").click(function(){$.getJSON(\"media-location.json\",function(result){mediamarkers.clearLayers();var bounds = new L.LatLngBounds();$.each(result.features, function(i,item){mediamarkers.addLayer(L.marker([item.geometry.coordinates[0], item.geometry.coordinates[1]]).bindPopup('<h2>'+item.properties.popupTitle+'</h2><br>'+item.properties.popupContent).addTo(mediamap));bounds.extend([item.geometry.coordinates[0], item.geometry.coordinates[1]]);});mediamap.fitBounds(bounds);});});});</script><!-- LEAFLET CODE -->").partial("common_modals.dust",ctx,null);}return body_0;})();