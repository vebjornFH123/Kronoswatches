import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
import { w as writable } from "./index.js";
const logoScr = "/_app/immutable/assets/Kronøs-Logo.6d14f1d9.png";
const logo_svelte_svelte_type_style_lang = "";
const css = {
  code: ".logo-cont.svelte-1qbf2f9{display:flex;align-items:center;justify-content:center}.logo-img.svelte-1qbf2f9{height:80px;filter:invert(1);cursor:pointer}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `  <div class="logo-cont svelte-1qbf2f9" data-svelte-h="svelte-dht6it"><a href="./"><img class="logo-img svelte-1qbf2f9"${add_attribute("src", logoScr, 0)} alt=""></a> </div>`;
});
const topDownImg = "/_app/immutable/assets/Top-Down-View.f8569abb.png";
const cartItems = writable([]);
({
  itemNr: cartItems.length + 1,
  name: "Aurora Borealis",
  price: 1490,
  img: topDownImg
});
export {
  Logo as L,
  cartItems as c,
  topDownImg as t
};
