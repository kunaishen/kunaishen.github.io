import{c as h,a as p,b as u,r as g,d as t}from"./vendor.3e7b84cb.js";import*as f from"node:fs/promises";import o from"node:fs/promises";import*as y from"node:path";import s from"node:path";var r=Object.freeze,b=Object.defineProperty,w=(e,n)=>r(b(e,"raw",{value:r(n||e.slice())})),i;h("/src/components/Background.astro",{modules:[{module:f,specifier:"node:fs/promises",assert:{}},{module:y,specifier:"node:path",assert:{}}],hydratedComponents:[],hydrationDirectives:new Set([]),hoisted:[]});const v=p(import.meta.url,"https://aishen-portfolio.github.io/","file:///home/aishen/Github/my-portfolio/");u(async(e,n,d)=>{e.createAstro(v,n,d);const l="./assets/background/",a={landscapes:(await o.readdir(s.resolve("./public/assets/background/landscapes"))).join("|||"),portraits:(await o.readdir(s.resolve("./public/assets/background/portraits"))).join("|||")},c=[{props:{"data-astro-id":"5JFH2BWB"},children:"@media only screen and (max-width:900px){.background.astro-5JFH2BWB{background-size:cover;}}"}];for(const m of c)e.styles.add(m);return g(i||(i=w([`
<div class="background astro-5JFH2BWB"`,"","",`></div>
<script>
  const element = document.querySelector('.background');
  
  function parallaxEffect(e) {
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;

    const mouse = { x: e.clientX, y: e.clientY };

    const depths = [
      \`\${50 - (mouse.x - width) * 0.06}% \${50 - (mouse.y - height) * 0.06}%\`,
      \`\${50 - (mouse.x - width) * 0.02}% \${50 - (mouse.y - height) * 0.02}%\`,
      \`\${50 - (mouse.x - width) * 0.01}% \${50 - (mouse.y - height) * 0.01}%\`
    ];

    element.style.backgroundPosition = depths.join(', ');
  }

  function loadBackground() {

    const type = window.innerWidth > 900 ? 'landscapes' : 'portraits';
    const images = element.dataset[type].split('|||');
    const image = images[Math.floor(Math.random() * images.length)];
    const path = element.dataset.path + type;
    const fullPath = \`\${path}/\${image}\`;
    const lGradient = 'linear-gradient(rgb(0,0,0,0.7), rgb(0,0,0,0.9))';

    console.log(fullPath);
    element.style.background = \`\${lGradient}, url('\${fullPath}')\`;
    element.style.backgroundSize = '110vw 115vh';
    element.style.backgroundRepeat = 'no-repeat';
    element.style.backgroundPosition = 'center';
    element.style.width = '100vw';
    element.style.height = '100vh';
    element.style.position = 'relative';
    element.style.zIndex = '-1';
  }


  loadBackground();
  document.addEventListener('mousemove', parallaxEffect);
<\/script>

`],[`
<div class="background astro-5JFH2BWB"`,"","",`></div>
<script>
  const element = document.querySelector('.background');
  
  function parallaxEffect(e) {
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;

    const mouse = { x: e.clientX, y: e.clientY };

    const depths = [
      \\\`\\\${50 - (mouse.x - width) * 0.06}% \\\${50 - (mouse.y - height) * 0.06}%\\\`,
      \\\`\\\${50 - (mouse.x - width) * 0.02}% \\\${50 - (mouse.y - height) * 0.02}%\\\`,
      \\\`\\\${50 - (mouse.x - width) * 0.01}% \\\${50 - (mouse.y - height) * 0.01}%\\\`
    ];

    element.style.backgroundPosition = depths.join(', ');
  }

  function loadBackground() {

    const type = window.innerWidth > 900 ? 'landscapes' : 'portraits';
    const images = element.dataset[type].split('|||');
    const image = images[Math.floor(Math.random() * images.length)];
    const path = element.dataset.path + type;
    const fullPath = \\\`\\\${path}/\\\${image}\\\`;
    const lGradient = 'linear-gradient(rgb(0,0,0,0.7), rgb(0,0,0,0.9))';

    console.log(fullPath);
    element.style.background = \\\`\\\${lGradient}, url('\\\${fullPath}')\\\`;
    element.style.backgroundSize = '110vw 115vh';
    element.style.backgroundRepeat = 'no-repeat';
    element.style.backgroundPosition = 'center';
    element.style.width = '100vw';
    element.style.height = '100vh';
    element.style.position = 'relative';
    element.style.zIndex = '-1';
  }


  loadBackground();
  document.addEventListener('mousemove', parallaxEffect);
<\/script>

`])),t(a.landscapes,"data-landscapes"),t(a.portraits,"data-portraits"),t(l,"data-path"))});
