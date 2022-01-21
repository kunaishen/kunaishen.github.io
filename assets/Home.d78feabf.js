import{c as o,a as r,b as c,r as l,d}from"./vendor.3e7b84cb.js";var t=Object.freeze,m=Object.defineProperty,p=(e,s)=>t(m(e,"raw",{value:t(s||e.slice())})),a;o("/src/components/Home.astro",{modules:[],hydratedComponents:[],hydrationDirectives:new Set([]),hoisted:[]});const h=r(import.meta.url,"https://aishen-portfolio.github.io/","file:///home/aishen/Github/my-portfolio/");c(async(e,s,n)=>{const i=e.createAstro(h,s,n);return l(a||(a=p(['<link rel="stylesheet" type="text/css"',`>

<div class="wrapper profile-wrapper">
  <div class="profile">
    <div class="avatar"><img src="./assets/icons/avatar.png" alt="cannot load image"></div>
    <div class="username unselectable">@Aishen</div>
    <div class="quote">loading quote...</div>
  </div>
  <div class="shortcuts">
    <a href="https://discord.com/developers" class="item"><img src="./assets/icons/discord.png" alt="discord"></a>
    <a href="https://facebook.com" class="item"><img src="./assets/icons/facebook.png" alt="facebook"></a>
    <a href="https://reddit.com" class="item"><img src="./assets/icons/reddit.png" alt="reddit"></a>
    <a href="https://github.com" class="item"><img src="./assets/icons/github.png" alt="github"></a>
    <a href="https://gmail.com" class="item"><img src="./assets/icons/gmail.png" alt="gmail"></a>
  </div>
</div>
<script>
  async function updateQuote() {
    const element = document.querySelector('.profile > .quote');
    const quote = await fetch("https://api.quotable.io/random").then(res => res.json());
    element.innerText = \`"\${quote.content}"\`;
  };

  updateQuote();
<\/script>`],['<link rel="stylesheet" type="text/css"',`>

<div class="wrapper profile-wrapper">
  <div class="profile">
    <div class="avatar"><img src="./assets/icons/avatar.png" alt="cannot load image"></div>
    <div class="username unselectable">@Aishen</div>
    <div class="quote">loading quote...</div>
  </div>
  <div class="shortcuts">
    <a href="https://discord.com/developers" class="item"><img src="./assets/icons/discord.png" alt="discord"></a>
    <a href="https://facebook.com" class="item"><img src="./assets/icons/facebook.png" alt="facebook"></a>
    <a href="https://reddit.com" class="item"><img src="./assets/icons/reddit.png" alt="reddit"></a>
    <a href="https://github.com" class="item"><img src="./assets/icons/github.png" alt="github"></a>
    <a href="https://gmail.com" class="item"><img src="./assets/icons/gmail.png" alt="gmail"></a>
  </div>
</div>
<script>
  async function updateQuote() {
    const element = document.querySelector('.profile > .quote');
    const quote = await fetch("https://api.quotable.io/random").then(res => res.json());
    element.innerText = \\\`"\\\${quote.content}"\\\`;
  };

  updateQuote();
<\/script>`])),d(i.resolve("../styles/home.css"),"href"))});
