(function(){dust.register("addtextcontent.dust",body_0);function body_0(chk,ctx){return chk.write("<a data-toggle=\"modal\" role=\"button\" href=\"#\" class=\"open-addtextcontent\" ><i class=\"icon-plus-sign\"></i> <span>Add New Text Content</span></a>").partial("modal_addobject_begin.dust",ctx,{"form_name":"textcontent","header_title":"Add Text Content","object_domain":"AaltoGlobalImpact.OIP","object_type":"TextContent"}).partial("fileupload.dust",ctx,{"initial_class_mode":"fileupload-new","field_name":"ImageData"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddTextContent_Title","field_name":"Title","field_label":body_1}).partial("textinput_singleline.dust",ctx,{"field_id":"AddTextContent_SubTitle","field_name":"SubTitle","field_label":"SubTitle"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddTextContent_Author","field_name":"Author","field_label":"Author"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"AddTextContent_Excerpt","field_name":"Excerpt","field_label":"Excerpt"}).partial("textinput_multiline_markdown.dust",ctx,{"field_id":"AddTextContent_Body","field_name":"Body","field_label":"Body"}).partial("dropdown_select.dust",ctx,{"field_id":"AddTextContent_Categories","is_multiple":"true","item_collection":ctx.getPath(false,["CategoriesSource","CategoryCollection","CollectionContent"]),"item_type":"category","field_label":"Categories","field_name":"Object_Categories"}).partial("dropdown_select.dust",ctx,{"field_id":"AddTextContent_Locations","is_multiple":"true","item_collection":ctx.getPath(false,["Locations","AddressAndLocationCollection","CollectionContent","AddressAndLocation"]),"item_type":"location","field_label":"Locations","field_name":"Object_Locations"}).partial("modal_addobject_end.dust",ctx,null).write("<script type=\"text/javascript\">$(function() {$(\".open-addtextcontent\").on(\"click\", function() {InitializeModalClasses();$('#add-textcontent').modal('show');});});</script>");}function body_1(chk,ctx){return chk.write("Title ").reference(ctx.get("form_name"),ctx,"h");}return body_0;})();