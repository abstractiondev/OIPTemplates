(function(){dust.register("inputs.dust",body_0);function body_0(chk,ctx){return chk.write("<div>Input Information Sources<fieldset id=\"current-inputs\"><div id=\"gallery-3\" class=\"gallery\" style=\"clear: both;\">").section(ctx.getPath(false,["InputsSource","InformationInputCollection","CollectionContent"]),ctx,{"block":body_1},null).write("<div class=\"clearfix\"></div></div></fieldset></div>").partial("executeoperation_button.dust",ctx,{"form_name":"addinformationinput","button_label":"Add Information Input","icon_class_name":"icon-plus-sign"}).write("<div>Output Information Targets<fieldset id=\"current-inputs\"><div id=\"gallery-3\" class=\"gallery\" style=\"clear: both;\">").section(ctx.getPath(false,["OutputsSource","InformationOutputCollection","CollectionContent"]),ctx,{"block":body_2},null).write("<div class=\"clearfix\"></div></div></fieldset></div>").partial("executeoperation_button.dust",ctx,{"form_name":"addinformationoutput","button_label":"Add Information Output","icon_class_name":"icon-plus-sign"}).partial("modal_executeoperation_begin.dust",ctx,{"form_name":"addinformationinput","header_title":"Add Information Input","operation_name":"CreateInformationInput"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddInput_InputDescription","field_name":"InputDescription","field_label":"Input Description"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddInput_LocationURL","field_name":"LocationURL","field_label":"Location URL"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddInput_LocalContentName","field_name":"LocalContentName","field_label":"Local Content Name"}).partial("dropdown_select.dust",ctx,{"field_id":"AddInput_AuthenticatedDeviceID","item_collection":ctx.getPath(false,["AuthenticatedAsDevicesSource","AuthenticatedAsActiveDeviceCollection","CollectionContent"]),"item_type":"authenticatedasactivedevice","field_label":"Authentication (optional)","field_name":"AuthenticatedDeviceID"}).partial("modal_executeoperation_end.dust",ctx,{"cancel_button_label":"Cancel","accept_button_label":"Create Information Input"}).partial("modal_executeoperation_begin.dust",ctx,{"form_name":"FetchInputInformation","header_title":"Fetch Input","map_data_values":"InformationInputID","operation_name":"FetchInputInformation"}).partial("hiddeninput.dust",ctx,{"field_id":"FetchInputInformation_InformationInputID","field_name":"InformationInputID"}).partial("modal_executeoperation_end.dust",ctx,{"cancel_button_label":"Cancel","accept_button_label":"Fetch Input"}).partial("modal_executeoperation_begin.dust",ctx,{"form_name":"DeleteInformationInput","header_title":"Delete Information Input","map_data_values":"InformationInputID","operation_name":"DeleteInformationInput"}).partial("hiddeninput.dust",ctx,{"field_id":"DeleteInformationInput_InformationInputID","field_name":"InformationInputID"}).partial("modal_executeoperation_end.dust",ctx,{"cancel_button_label":"Cancel","accept_button_label":"Delete"}).partial("modal_executeoperation_begin.dust",ctx,{"form_name":"addinformationoutput","header_title":"Add Information Output","operation_name":"CreateInformationOutput"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddOutput_OutputDescription","field_name":"OutputDescription","field_label":"Output Description"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddOutput_DestinationURL","field_name":"DestinationURL","field_label":"Destination URL"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddOutput_DestinationContentName","field_name":"DestinationContentName","field_label":"Destination Content Name"}).partial("textinput_singleline.dust",ctx,{"field_id":"AddOutput_LocalContentURL","field_name":"LocalContentURL","field_label":"Local Content URL (from owner root)"}).partial("dropdown_select.dust",ctx,{"field_id":"AddOutput_AuthenticatedDeviceID","item_collection":ctx.getPath(false,["AuthenticatedAsDevicesSource","AuthenticatedAsActiveDeviceCollection","CollectionContent"]),"item_type":"authenticatedasactivedevice","field_label":"Authentication (optional)","field_name":"AuthenticatedDeviceID"}).partial("modal_executeoperation_end.dust",ctx,{"cancel_button_label":"Cancel","accept_button_label":"Create Information Output"}).partial("modal_executeoperation_begin.dust",ctx,{"form_name":"PushToInformationOutput","header_title":"Push to Output","map_data_values":"InformationOutputID","operation_name":"PushToInformationOutput"}).partial("hiddeninput.dust",ctx,{"field_id":"PushToInformationOutput_InformationOutputID","field_name":"InformationOutputID"}).partial("modal_executeoperation_end.dust",ctx,{"cancel_button_label":"Cancel","accept_button_label":"Push to Output"}).partial("modal_executeoperation_begin.dust",ctx,{"form_name":"DeleteInformationOutput","header_title":"Delete Information Input","map_data_values":"InformationOutputID","operation_name":"DeleteInformationOutput"}).partial("hiddeninput.dust",ctx,{"field_id":"DeleteInformationOutput_InformationOutputID","field_name":"InformationOutputID"}).partial("modal_executeoperation_end.dust",ctx,{"cancel_button_label":"Cancel","accept_button_label":"Delete"});}function body_1(chk,ctx){return chk.write("<div class=\"element thumbnail pull-left sampleFilterOnefalse sampleFilterTwofalse\"><div class=\"clearfix\"></div><div class=\"image-data\"><span class=\"pull-right\">").partial("executeoperation_button_begin.dust",ctx,{"form_name":"FetchInputInformation"}).write("data-informationinputid=\"").reference(ctx.get("ID"),ctx,"h").write("\"").partial("executeoperation_button_end.dust",ctx,{"icon_class_name":"icon-download-alt"}).partial("executeoperation_button_begin.dust",ctx,{"form_name":"DeleteInformationInput"}).write("data-informationinputid=\"").reference(ctx.get("ID"),ctx,"h").write("\"").partial("executeoperation_button_end.dust",ctx,{"icon_class_name":"icon-remove-sign"}).write("</span><p class=\"title\">").reference(ctx.get("InputDescription"),ctx,"h").write("</p><p class=\"title\">URL: ").reference(ctx.get("LocationURL"),ctx,"h").write("</p><p class=\"title\">Local Content Name: ").reference(ctx.get("LocalContentName"),ctx,"h").write("</p><p class=\"title\">Authentication ID: ").reference(ctx.get("AuthenticatedDeviceID"),ctx,"h").write("</p><p class=\"title\">Is Validated: ").reference(ctx.get("IsValidatedAndActive"),ctx,"h").write("</p></div></div>");}function body_2(chk,ctx){return chk.write("<div class=\"element thumbnail pull-left sampleFilterOnefalse sampleFilterTwofalse\"><div class=\"clearfix\"></div><div class=\"image-data\"><span class=\"pull-right\">").partial("executeoperation_button_begin.dust",ctx,{"form_name":"PushToInformationOutput"}).write("data-informationoutputid=\"").reference(ctx.get("ID"),ctx,"h").write("\"").partial("executeoperation_button_end.dust",ctx,{"icon_class_name":"icon-upload-alt"}).partial("executeoperation_button_begin.dust",ctx,{"form_name":"DeleteInformationOutput"}).write("data-informationoutputid=\"").reference(ctx.get("ID"),ctx,"h").write("\"").partial("executeoperation_button_end.dust",ctx,{"icon_class_name":"icon-remove-sign"}).write("</span><p class=\"title\">").reference(ctx.get("OutputDescription"),ctx,"h").write("</p><p class=\"title\">Destination URL: ").reference(ctx.get("DestinationURL"),ctx,"h").write("</p><p class=\"title\">Destination Content Name: ").reference(ctx.get("DestinationContentName"),ctx,"h").write("</p><p class=\"title\">Local Content URL: ").reference(ctx.get("LocalContentURL"),ctx,"h").write("</p><p class=\"title\">Authentication ID: ").reference(ctx.get("AuthenticatedDeviceID"),ctx,"h").write("</p><p class=\"title\">Is Validated: ").reference(ctx.get("IsValidatedAndActive"),ctx,"h").write("</p></div></div>");}return body_0;})();