function toggleMenu() {
    let element = document.getElementById("nav-menu-button");

    switch (parseInt(element.dataset.show)) {
        case 0: 
            element.dataset.show = 1;
            element.style.transform = "rotate(90deg)";
            showMenu();
            break;
        case 1:
            element.dataset.show = 0;
            element.style.transform = "rotate(0deg)";
            hideMenu();
            break;
        default:
            element.dataset.show = 1;
            element.style.transform = "rotate(90deg)";
            showMenu();
            break;
    }
}

function showMenu() {
    const elements = document.getElementsByClassName("nav-menu-item");

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.style.opacity =  '1';
        element.style.transform = "translateX(0)"; 
        element.style.transitionDelay = `calc(200ms * ${(elements.length - 1) - i})`;
        element.style.pointerEvents = "auto";
    }
}

function hideMenu() {
    const elements = document.getElementsByClassName("nav-menu-item");

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.style.opacity =  '0';
        element.style.transitionDelay = `calc(200ms * ${i})`;
        element.style.transform = "translateX(-1000%)"; 
        element.style.pointerEvents = "none";
    }
}

toggleMenu();
