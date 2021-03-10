$('#first-button').on('click', () => {
    console.log("Igen, most rámkattintottál");
});

$('#second-button').on('click', () => {
    $("#first-button").text("Első gomb");
});

// $('#third-button').on('click', () => {
//     $("button").css("background-color", "yellow");
// });

$('#third-button').on('click', () => {
    $("#third-button").css("background-color", $("input").val());
    $("#third-button").prop("disabled", true);
});