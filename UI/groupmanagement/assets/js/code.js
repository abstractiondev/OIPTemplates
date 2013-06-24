"use strict"
var oip = {
    model: {},
    view: {}
};

oip.view.ContentView = Backbone.View.extend({
    el: $("#main"),
    initialize: function () {
        this.render();
    },
    events: {

    },
    render: function () {

        var data = {
            "bloglist": this.model.toJSON()
        }
        $("#main").html(Mustache.render($("#main-content-template").html(), data));
        //console.log("Model after render: " + data.bloglist);
    }
})

oip.model.Blog = Backbone.Model.extend({
    initialize: function (id, writer, title) {
        this.set({
            id: id,
            type: "",
            title: title,
            text: "",
            writer: writer
        });
        //this.save();
    }
})

oip.model.BlogList = Backbone.Collection.extend({
    url: "../../AaltoGlobalImpact.OIP/BlogCollection/MasterCollection",
    model: oip.model.Blog,
    collection: {},
    fetch: function (options) {
        options = options || {};
        options.dataType = "xml";
        Backbone.Collection.prototype.fetch.call(this, options);
    },
    parse: function (data) {
        var parsed = [];
        $(data).find('Blog').each(function (index) {
            var blogTitle = $(this).find('Title').text();
            var id = $(this).find('ID').text();
            //var blog = new oip.model.Blog(id, blogTitle, id);
            //parsed.push(blog);
            parsed.push({id: id, title: blogTitle, name: id});
            console.log(blogTitle);
        });

        return parsed;
    }

})

$(document).ready(function () {
    var blogsColl = new oip.model.BlogList();
    var blog = new oip.model.Blog({
    });
    blog.set("id", 0);
    blog.set("text", "Lorem ipsum jne")

    blogsColl.add(blog);

    blogsColl.fetch({
        add: true
    })


});

