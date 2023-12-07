import { c as create_ssr_component, e as escape, v as validate_component, a as each, b as add_attribute, d as subscribe } from "../../chunks/ssr.js";
import { L as Logo } from "../../chunks/addToCart.js";
import { C as Cart } from "../../chunks/cart.js";
import { p as page } from "../../chunks/stores.js";
const navBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'a.svelte-7y1cm9.svelte-7y1cm9{text-decoration:none;color:#fff;font-family:"Proxima Nova", sans-serif;font-weight:100;font-size:calc(9px + 0.3vw)}a.svelte-7y1cm9.svelte-7y1cm9:hover{border-bottom:0.1rem solid;scale:1.1}.header-main-cont.svelte-7y1cm9.svelte-7y1cm9{position:fixed;z-index:999;top:0;width:100%;height:90px;background:#112033;transition:all 0.7s;color:#fff;font-family:"Proxima Nova", sans-serif;font-weight:100;font-size:15px;display:flex;justify-content:center;align-items:center}.header-main-cont.close.svelte-7y1cm9.svelte-7y1cm9{top:-100px}.header-inner-cont.svelte-7y1cm9.svelte-7y1cm9{width:90%;display:flex;align-items:center;justify-content:space-between}.hamburger-menu-btn.svelte-7y1cm9.svelte-7y1cm9{position:absolute;left:20px;cursor:pointer;display:none}.bar1.svelte-7y1cm9.svelte-7y1cm9,.bar2.svelte-7y1cm9.svelte-7y1cm9,.bar3.svelte-7y1cm9.svelte-7y1cm9{width:25px;height:3px;margin:4px 0;background-color:#ffffff;transition:transform 0.5s}.bar1.clicked.svelte-7y1cm9.svelte-7y1cm9{transform:rotate(-45deg) translate(-5px, 5px)}.bar2.clicked.svelte-7y1cm9.svelte-7y1cm9{opacity:0}.bar3.clicked.svelte-7y1cm9.svelte-7y1cm9{transform:rotate(45deg) translate(-5px, -5px)}.logo.svelte-7y1cm9.svelte-7y1cm9{position:absolute;display:none}.hamburger-menu-cont.svelte-7y1cm9.svelte-7y1cm9{position:absolute;top:90px;z-index:100;height:0;width:100%;background-color:#112033;overflow:hidden;transition:height 0.7s;display:none;flex-direction:column;justify-content:center;align-items:center;overflow-y:hidden}.hamburger-menu-cont.svelte-7y1cm9 a.svelte-7y1cm9{font-size:3.4rem}.hamburger-menu-cont.clicked.svelte-7y1cm9.svelte-7y1cm9{height:95vh}.hamburger-cart.svelte-7y1cm9.svelte-7y1cm9{position:absolute;right:20px;display:none}.appear.svelte-7y1cm9.svelte-7y1cm9{opacity:0;transform:translateX(-70vh);animation:svelte-7y1cm9-appear;animation-duration:0.5s;animation-iteration-count:1;animation-fill-mode:forwards}@keyframes svelte-7y1cm9-appear{from{opacity:0;transform:translateX(-70vh)}to{opacity:1;transform:translateX(0)}}@media(max-width: 768px){}@media(max-width: 1024px){.header-inner-cont.svelte-7y1cm9.svelte-7y1cm9{display:none;position:relative}.hamburger-menu-btn.svelte-7y1cm9.svelte-7y1cm9{display:block}.logo.svelte-7y1cm9.svelte-7y1cm9{display:block}.hamburger-cart.svelte-7y1cm9.svelte-7y1cm9{display:block}.nav-links.clicked.svelte-7y1cm9.svelte-7y1cm9{display:flex;align-items:center;flex-direction:row;gap:30px;background-color:red}.hamburger-menu-cont.svelte-7y1cm9.svelte-7y1cm9{display:flex}}',
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hamburgerMenuClicked = "";
  let headerClose = "";
  $$result.css.add(css$1);
  return `<header class="${"header-main-cont " + escape(headerClose, true) + " svelte-7y1cm9"}"> <div class="hamburger-menu-btn svelte-7y1cm9"><div class="${"bar1 " + escape(hamburgerMenuClicked, true) + " svelte-7y1cm9"}"></div> <div class="${"bar2 " + escape(hamburgerMenuClicked, true) + " svelte-7y1cm9"}"></div> <div class="${"bar3 " + escape(hamburgerMenuClicked, true) + " svelte-7y1cm9"}"></div></div> <div class="logo svelte-7y1cm9">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div> <div class="hamburger-cart svelte-7y1cm9">${validate_component(Cart, "Cart").$$render($$result, {}, {}, {})}</div> <div class="header-inner-cont svelte-7y1cm9"><a href="/products" class="svelte-7y1cm9" data-svelte-h="svelte-pctiz0">WATCHES</a> <a href="/about" class="svelte-7y1cm9" data-svelte-h="svelte-jr6vvz">ABOUT US</a> ${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})} <a href="/location" class="svelte-7y1cm9" data-svelte-h="svelte-1w58h9j">LOCATION</a> ${validate_component(Cart, "Cart").$$render($$result, {}, {}, {})}</div> <div class="${"hamburger-menu-cont " + escape(hamburgerMenuClicked, true) + " svelte-7y1cm9"}"><div style="display: flex; align-items: start; flex-direction: column; gap: 100px;"><a class="hamburger-link svelte-7y1cm9" href="/" data-svelte-h="svelte-nqixl">HOME</a> <a class="hamburger-link svelte-7y1cm9" href="/products" data-svelte-h="svelte-vfp1f5">WATCHES</a> <a class="hamburger-link svelte-7y1cm9" href="/about" data-svelte-h="svelte-1047dco">ABOUT US</a> <a class="hamburger-link svelte-7y1cm9" href="/location" data-svelte-h="svelte-nn1kso">LOCATION</a></div></div> </header>`;
});
const contactForm_svelte_svelte_type_style_lang = "";
const facebookScr = "/_app/immutable/assets/facebook-icon.1069d604.svg";
const instagramScr = "/_app/immutable/assets/instagram-icon.347a2b6e.svg";
const twitterScr = "/_app/immutable/assets/twitter-icon.8d44f80f.svg";
const youTubeScr = "/_app/immutable/assets/youtube-icon.e8eaa9f1.svg";
const footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "h4.svelte-w4qgg5{color:#fff;margin:0;font-weight:100}footer.svelte-w4qgg5{position:absolute;left:0;right:0;height:160px;width:100%;display:flex;justify-content:center;align-items:center;background:#112033;text-transform:uppercase}.waterMark.svelte-w4qgg5{width:100%;display:flex;justify-content:center}.channels.svelte-w4qgg5{width:100%;display:flex;gap:80px;justify-content:center}@media screen and (max-width: 767px){footer.svelte-w4qgg5{flex-direction:column-reverse;gap:30px}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const channels = [twitterScr, facebookScr, instagramScr, youTubeScr];
  $$result.css.add(css);
  return `<footer class="main-footer-cont svelte-w4qgg5"><h4 class="waterMark svelte-w4qgg5" data-svelte-h="svelte-fqgziq">© all rights reserved to kronøs</h4> <div class="channels  svelte-w4qgg5">${each(channels, (channel) => {
    return `<img style="cursor: pointer; height: 25px;"${add_attribute("src", channel, 0)} alt="">`;
  })}</div> </footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$page.url.pathname !== "/products" && $page.url.pathname !== "/checkOut" ? `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}` : ``} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
