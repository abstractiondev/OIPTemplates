(function(){dust.register("main-menu.dust",body_0);function body_0(chk,ctx){return chk.write("<div id=\"main-menu\"><div id=\"phone-navigation\"><select class=\"selectnav\" id=\"phone-menu\"><option value=\"#tab-identity\"  data-toggle=\"tab\"> Identity</option><option value=\"#tab-content\" data-toggle=\"tab\" a href=\"#tab-content\"> Content</option><option value=\"#tab-categories\" data-toggle=\"tab\" a href=\"#tab-categories\"> Categories</option><option value=\"#tab-collaborators\" data-toggle=\"tab\"  a href=\"#tab-collaborators\"> Collaborators</option><option value=\"#tab-locations-current\" data-toggle=\"tab\"  a href=\"#tab-locations-current\"> Locations</option><option value=\"#tab-devices\" data-toggle=\"tab\"  a href=\"#tab-devices\"> Device Connections</option><option value=\"#tab-delete\" data-toggle=\"tab\" style=\"color:red\"  a href=\"#tab-delete\"> Delete</option></select></div><ul class=\"nav nav-tabs\"><li ><a data-toggle=\"modal\" role=\"button\" href=\"#\" class=\"open-addtextcontent\" ><i class=\"icon-plus-sign\"></i> <span>Text Content</span></a></li><li ><a data-toggle=\"modal\" role=\"button\" href=\"#add-activity\"><i class=\"icon-plus-sign\"></i> <span>Activity</span></a></li><li ><a data-toggle=\"modal\" role=\"button\" href=\"#add-image\"><i class=\"icon-plus-sign\"></i> <span>Image</span></a></li><li ><a data-toggle=\"modal\" role=\"button\" href=\"#add-file\"><i class=\"icon-plus-sign\"></i> <span>File</span></a></li><li ><a data-toggle=\"modal\" role=\"button\" href=\"#add-location\"><i class=\"icon-plus-sign\"></i>Location</a></li><li ><a data-toggle=\"modal\" role=\"button\" href=\"#\" class=\"open-addcategory\"><i class=\"icon-plus-sign\"></i>Category</a></li><li ><a data-toggle=\"modal\" role=\"button\" href=\"#invite-collaborator\"><i class=\"icon-plus-sign\"></i>Collaborator</a></li></ul></div><!-- .main-menu --><!-- main-menu modals --><div id=\"add-image\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Add an image</h3></div><div class=\"modal-body\"><div class=\"fileupload fileupload-new\" data-provides=\"fileupload\"><div class=\"input-append\"><div class=\"uneditable-input span3\"><i class=\"icon-file fileupload-exists\"></i> <span class=\"fileupload-preview\"></span></div><span class=\"btn btn-file\"><span class=\"fileupload-new\">Select file</span><span class=\"fileupload-exists\">Change</span><input type=\"file\" /></span><a href=\"#\" class=\"btn fileupload-exists\" data-dismiss=\"fileupload\">Remove</a></div></div></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\">Save changes</button></div></div><div id=\"add-file\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Add a file</h3></div><div class=\"modal-body\"><div class=\"fileupload fileupload-new\" data-provides=\"fileupload\"><div class=\"input-append\"><div class=\"uneditable-input span3\"><i class=\"icon-file fileupload-exists\"></i> <span class=\"fileupload-preview\"></span></div><span class=\"btn btn-file\"><span class=\"fileupload-new\">Select file</span><span class=\"fileupload-exists\">Change</span><input type=\"file\" /></span><a href=\"#\" class=\"btn fileupload-exists\" data-dismiss=\"fileupload\">Remove</a></div></div></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\">Save changes</button></div></div><div id=\"add-activity\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Add an activity</h3></div><div class=\"modal-body\"><form method=\"post\" class=\"form-horizontal\"><fieldset><div class=\"control-group\"><label class=\"control-label\" for=\"\">Activity name</label><div class=\"controls\"><input name=\"\" class=\"span4\"  type=\"text\" value=\"\"></div></div></fieldset></form></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\">Save changes</button></div></div><div id=\"add-story\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Add News</h3></div><div class=\"modal-body\"><form method=\"post\" class=\"form-horizontal\"><fieldset><div class=\"control-group\"><label class=\"control-label\" for=\"\">Location Name</label><div class=\"controls\"><input name=\"\" class=\"span4\"  type=\"text\" value=\"\"></div></div></fieldset></form></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\">Save changes</button></div></div><div id=\"add-location\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Add a location</h3></div><div class=\"modal-body\"><form method=\"post\" class=\"form-horizontal\"><fieldset><div class=\"control-group\"><label class=\"control-label\" for=\"\">Location Name</label><div class=\"controls\"><input name=\"\" class=\"span4\"  type=\"text\" value=\"\"></div></div></fieldset></form></div><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\">Save changes</button></div></div><div id=\"add-textcontent\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Add text content</h3></div><div class=\"modal-body\"><form method=\"post\" class=\"form-horizontal\" enctype=\"multipart/form-data\"><fieldset><input type=\"hidden\" name=\"ObjectDomainName\" value=\"AaltoGlobalImpact.OIP\" /><input type=\"hidden\" name=\"ObjectName\" value=\"TextContent\" /><input type=\"hidden\" name=\"ExecuteOperation\" value=\"CreateSpecifiedInformationObjectWithValues\" />").partial("fileupload.dust",ctx,{"initial_class_mode":"fileupload-new","field_name":"ImageData"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddTextContent_Title","field_name":"Title","field_label":"Title"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddTextContent_SubTitle","field_name":"SubTitle","field_label":"SubTitle"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddTextContent_Author","field_name":"Author","field_label":"Author"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"AddTextContent_Excerpt","field_name":"Excerpt","field_label":"Excerpt"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"AddTextContent_Body","field_name":"Body","field_label":"Body"}).write("</fieldset><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\">Save changes</button></div></form></div></div><div id=\"add-category\" class=\"modal hide fade\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Add a category</h3></div><div class=\"modal-body\"><form method=\"post\" class=\"form-horizontal\" enctype=\"multipart/form-data\"><fieldset><input type=\"hidden\" name=\"ObjectDomainName\" value=\"AaltoGlobalImpact.OIP\" /><input type=\"hidden\" name=\"ObjectName\" value=\"Category\" /><input type=\"hidden\" name=\"ExecuteOperation\" value=\"CreateSpecifiedInformationObjectWithValues\" />").partial("fileupload.dust",ctx,{"initial_class_mode":"fileupload-new","field_name":"ImageData"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddCategory_Name","field_name":"CategoryName","field_label":"Category Name"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddCategory_Title","field_name":"Title","field_label":"Title"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"AddCategory_Excerpt","field_name":"Excerpt","field_label":"Excerpt"}).write("</fieldset><div class=\"modal-footer\"><button aria-hidden=\"true\" data-dismiss=\"modal\" class=\"btn\">Close</button><button class=\"btn btn-primary\">Save changes</button></div></form></div></div><div id=\"invite-collaborator\" class=\"modal hide fade well\"><div class=\"modal-header\"><button class=\"close\" data-dismiss=\"modal\">&times;</button><h3>Invite person to this group</h3></div><div class=\"modal-body well\"><form method=\"post\" class=\"form-horizontal\"><fieldset><div class=\"control-group\"><label class=\"control-label\" for=\"[!ATOM]ID[ATOM!]_EmailAddress\">Email address</label><div class=\"controls\"><!--<input name=\"[!ATOM]ID[ATOM!]_EmailAddress\" id=\"[!ATOM]ID[ATOM!]_EmailAddress\" type=\"input\" value=\"[!ATOM]EmailAddress[ATOM!]\">--><input type=\"text\" data-source=\"[&quot;sujil@aalto.fi&quot;,&quot;teija@aalto.fi&quot;,&quot;anne@aalto.fi&quot;,&quot;andrew@aalto.fi&quot;]\" data-items=\"4\" data-provide=\"typeahead\" style=\"margin: 0 auto;\"><ul class=\"typeahead dropdown-menu\" style=\"top: 2950px; left: 595.433px; display: none;\"><li data-value=\"Ssujil@aalto.fi\" class=\"active\"><a href=\"#\"><strong>S</strong>outh Carolina</a></li><li data-value=\"teija@aalto.fi\"><a href=\"#\"><strong>S</strong>outh Dakota</a></li><li data-value=\"anne@aalto.fi\"><a href=\"#\">Ala<strong>s</strong>ka</a></li><li data-value=\"andrew@aalto.fi\"><a href=\"#\">Arkan<strong>s</strong>a<strong>s</strong></a></li></ul><p class=\"helptext\">Use only valid email address that you trust to belong to that person.</p></div></div></fieldset></form></div></div><script type=\"text/javascript\">$(function() {$(\".open-addcategory\").on(\"click\", function() {InitializeModalClasses();$('#add-category').modal('show');});$(\".open-addtextcontent\").on(\"click\", function() {InitializeModalClasses();$('#add-textcontent').modal('show');});});</script><!-- end main-menu modals -->");}return body_0;})();