// check off or on the specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("done");
});

// click span to delete li
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// make input a new li
$("input").keypress(function (event) {
    if (event.which === 13 && $(this).val() != "") {
        var newTodo = "<li> <span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + $(this).val() + "</li>";
        $(this).val("");
        $("ul").append(newTodo);
    }
});

// click the plus button to shrink the input
$(".fa-plus").on("click", function(){
    $("input").fadeToggle();
});