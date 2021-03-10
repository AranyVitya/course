$("#add-todo").on('click', () => {
    $("ul").append("<li>" + $("input").val() + "</li>");
});

$("ul").on("click", "li", function () {
    $(this).toggleClass("lineThrough");
});