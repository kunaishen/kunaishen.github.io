const background = document.querySelector(".background");

document.addEventListener("mousemove", (e) => {
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;

    const mouse = { x: e.clientX, y: e.clientY };

    const depths = [
        `${50 - (mouse.x - width) * 0.06}% ${50 - (mouse.y - height) * 0.06}%`,
        `${50 - (mouse.x - width) * 0.02}% ${50 - (mouse.y - height) * 0.02}%`,
        `${50 - (mouse.x - width) * 0.01}% ${50 - (mouse.y - height) * 0.01}%`
    ];

    background.style.backgroundPosition = depths.join(", ");
});

const main = document.querySelector(".main");
const pages_len = main.children.length;

let is_wheel_cd = false;
let page_index = 0;

const enable = () => is_wheel_cd = false;

document.addEventListener("wheel", (e) => {
    if (is_wheel_cd) return;
    is_wheel_cd = true;

    if (e.deltaY < 0) {
        page_index -= 1;
        if (page_index < 0) page_index = 0;
    } else if (e.deltaY > 0) {
        page_index += 1;
        if (page_index == pages_len) page_index = pages_len - 1;
    }

    window.location.href = "#" + main.children[page_index].id;
    setTimeout(enable, 250);
});

document.addEventListener("click", (e) => {
    if (is_wheel_cd) return;
    is_wheel_cd = true;
    const divider = window.innerHeight / 2;

    if (e.clientY < divider) {
        page_index -= 1;
        if (page_index < 0) page_index = 0;
    } else {
        page_index += 1;
        if (page_index == pages_len) page_index = pages_len - 1;
    }

    window.location.href = "#" + main.children[page_index].id;
    setTimeout(enable, 250);
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        if (!targetElement) return;

        for (let i = 0; i < pages_len; i++) {
            if (main.children[i].getAttribute("id") != targetId) continue;
            page_index = i;
        }
    });
});