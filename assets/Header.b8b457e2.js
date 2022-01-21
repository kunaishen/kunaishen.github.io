import{c as l,a as m,b as h,r as p,d as e}from"./vendor.3e7b84cb.js";const i="Aishen",s="Aishen | Portfolio",o="My personal portfolio",r=["if_there_was_an_endpoint.jpg","clouds.jpg","Ikuno_Holding_Javascript_The_Definitive_Guide.png","ima.png","waifu_aesthetic.jpg","yukigruv.png"];var u={name:i,title:s,description:o,backgrounds:r},v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",name:i,title:s,description:o,backgrounds:r,default:u});l("/src/components/Header.astro",{modules:[{module:v,specifier:"../data/config.json",assert:{}}],hydratedComponents:[],hydrationDirectives:new Set([]),hoisted:[]});const f=m(import.meta.url,"https://aishen-portfolio.github.io/","file:///home/aishen/Github/my-portfolio/");h(async(n,c,d)=>{const a=n.createAstro(f,c,d),{active:t="none"}=a.props;return p`<link rel="stylesheet" type="text/css"${e(a.resolve("../styles/header.css"),"href")}>
<header class="unselectable">
  <div class="title"><h2>${s}</h2></div>
  <div class="nav">
    <a href="/"${e(t==="home"?"item active":"item","class")}>
      <div class="item-name">Home</div>
    </a>
    <a href="/about"${e(t==="about"?"item active":"item","class")}>
      <div class="item-name">About</div>
    </a>
    <a href="/other"${e(t==="other"?"item active":"item","class")}>
      <div class="item-name">Other</div>
    </a>
  </div>
</header>`});
