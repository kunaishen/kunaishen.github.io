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