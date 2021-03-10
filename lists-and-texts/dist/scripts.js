let names = ["Viktor", "Dávid", "Ádám", "Balázs"];

names.forEach(element => {
    if (element === "Viktor") {
        $("ul").append("<li><b>" + element + "</b></li>");
    } else {
        $("ul").append("<li>" + element + "</li>");
    }
});

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
};

$("body").append("<h1>" + additionalBlock.title + "</h1>");
$("body").append("<p>" + additionalBlock.text + "</p>");