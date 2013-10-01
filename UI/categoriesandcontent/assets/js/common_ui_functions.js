var ConnectInputField = function(me, dataName, fieldIDPrefix, fieldName, defaultValue, suppressNameChange, fieldTypePrefix, isArray)
{
    var fieldID = fieldIDPrefix + "_" + fieldName;
    var content = me.data(dataName);
    var id = me.data("id");
    var inputField = $("#" + fieldID);

    if(fieldTypePrefix == undefined)
        fieldTypePrefix = "";

    if(suppressNameChange == undefined || suppressNameChange == false) {
        inputField.attr("name", fieldTypePrefix + id + "_" + fieldName);
    }
    if(isArray != undefined && isArray == true)
    {
        content = content.split(",");
        content = content.filter(function(n){
            return n;
        });
    }
    if(content == null && defaultValue) {
        content = defaultValue;
    }
    inputField.val(content);
};

var SetElementName = function(id, name)
{
    $("#" + id).attr("name", name);
};

var SetElementVisibility = function(id, isVisible)
{
    var activeElement = $("#" + id);
    if(isVisible) {
        activeElement.show();
    } else {
        activeElement.hide();
    }
};


var ConvertCategoriesFromParentToChildren = function(categoryArray){
    var map = {};
    for(var i = 0; i < categoryArray.length; i++){
        var obj = categoryArray[i];
        obj.UI_ChildrenCategories= [];

        map[obj.ID] = obj;

        var parentID = obj.ParentCategoryID ? obj.ParentCategoryID : "-";
        if(!map[parentID]){
            map[parentID] = {
                UI_ChildrenCategories: []
            };
        }
        map[parentID].UI_ChildrenCategories.push(obj);
    }
    if(categoryArray.length == 0)
        return [];
    return map["-"].UI_ChildrenCategories;
}

