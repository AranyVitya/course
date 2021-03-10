$(".increase").on('click', () => {
    let number = $(".number").text();
    number++;
    $(".number").text(number);
});

$(".reduction").on('click', () => {
    let number = $(".number").text();
    number--;
    $(".number").text(number);
});