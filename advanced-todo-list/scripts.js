/*Add todo*/

$('#add-button').on('click', () => {
    console.log("Add button");
    let inputValue = $("#input-todo").val();
    if (inputValue !== "") {
        $('ul').append(
            `<li class="todo">
                <div class="todo-list-element"> ${inputValue} </div>
                <div class="icons"><i class="fas fa-trash delete-todo"></i><i class="fas fa-check-circle done-todo"></i></div>  
            </li>`
        );
        $("#input-todo").val("");
    }
});

/*Delete todo*/

$('ul').on('click', '.delete-todo', (eventDelete) => {
    console.log("Delete todo");
    $(eventDelete.target).parent().parent().remove();
});

/*Done todo*/

$('ul').on('click', '.done-todo', (eventDone) => {
    console.log("Done todo");
    $(eventDone.target).css('color', '#F1B249');
    $(eventDone.target).parent().siblings().css('color', '#9DC98E');
});