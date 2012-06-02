document.createElement("header");
document.createElement("nav");
document.createElement("aside");
document.createElement("footer");
document.createElement("section");

$(document).ready(function () {
    var tocList = $("#toc-list").empty();
    
    var i = 0;
    $("#container > h2").each(function () {
        var id = "h_" + (i++);
        var link = $("<a>").attr("href", "#" + id).html($(this).attr("id", id).html());
        $("<li>").append(link).appendTo(tocList);
    });
});