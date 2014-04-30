var ConnectInputField = function(me, dataName, fieldIDPrefix, fieldName, defaultValue, suppressNameChange, fieldTypePrefix, isArray, isSourceJSON)
{
    var fieldID = fieldIDPrefix + "_" + fieldName;
    var content;
    if(!isSourceJSON)
        content = me.data(dataName);
    else
        content = me[dataName];
    var id;
    if(!isSourceJSON)
        id = me.data("id");
    else
        id = me["ID"];
    var inputField = $("#" + fieldID);

    if(!fieldTypePrefix)
        fieldTypePrefix = "";

    if(!suppressNameChange) {
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
    map["-"] = {
        UI_ChildrenCategories: []
    };
    for(var i = 0; i < categoryArray.length; i++)
    {
        var obj = categoryArray[i];
        obj.UI_ChildrenCategories= [];
        map[obj.ID] = obj;
    }
    for(var i = 0; i < categoryArray.length; i++){
        var obj = categoryArray[i];
        var parentID = obj.ParentCategoryID ? obj.ParentCategoryID : "-";
        if(!map[parentID]){
            /*
            map[parentID] = {
                UI_ChildrenCategories: []
            };*/
            parentID = "-";
        }
        map[parentID].UI_ChildrenCategories.push(obj);
    }
    if(categoryArray.length == 0)
        return [];
    return map["-"].UI_ChildrenCategories;
}

