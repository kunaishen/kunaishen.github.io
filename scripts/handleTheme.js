const themes = [
    "kizu.css",
    "dark_academic.css",
];

function changeTheme() {
    let sheet = document.getElementById("theme");
    sheet.dataset.id = parseInt(sheet.dataset.id) + 1;
    sheet.href = "themes/" + themes[sheet.dataset.id % themes.length];
    console.log("changed theme", sheet.href);
}

function initTheme() {
    let sheet = document.createElement("link");

    sheet.id = "theme";
    sheet.rel  = "stylesheet";
    sheet.type = "text/css";
    sheet.href = "themes/" + themes[0];
    sheet.dataset.id = 0;
    document.getElementsByTagName('head')[0].appendChild(sheet);
}

initTheme();
