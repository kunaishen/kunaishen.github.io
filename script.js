const background = document.querySelector("#background");

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

const main = document.querySelector("#main");
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

let is_resize_cooldown = false;
window.addEventListener("resize", () => {
    if (is_resize_cooldown) return;

    is_resize_cooldown = true;
    const targetId = window.location.hash.slice(1);
    const targetElement = document.getElementById(targetId);
    console.log(targetId);

    setTimeout(() => { is_resize_cooldown = false; }, 250);
    if (!targetElement) return;
    targetElement.scrollIntoView({ behavior: "smooth" });
});

let project_index = 0;
const project_elements = ["dotfiles", "route-flow"];
const project_items = document.querySelector("#projects > .container > .items");

document.querySelector("#projects > .container > .prev-btn").addEventListener("click", () => {
    project_index -= 1;
    if (project_index < 0) {
        project_index = project_elements.length - 1;
    }

    const targetElement = document.getElementById(project_elements[project_index]);
    if (!targetElement) return;
    targetElement.scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#projects > .container > .next-btn").addEventListener("click", () => {
    project_index += 1;
    if (project_index >= project_elements.length) {
        project_index = 0;
    }

    const targetElement = document.getElementById(project_elements[project_index]);
    if (!targetElement) return;
    targetElement.scrollIntoView({ behavior: "smooth" });
});