import { c as create_ssr_component, d as subscribe, e as escape, b as add_attribute } from "./ssr.js";
import { c as cartItems } from "./addToCart.js";
const contactExitScr = "/_app/immutable/assets/exit-icon.c4a4be83.svg";
const cart_svelte_svelte_type_style_lang = "";
const css = {
  code: "h4.svelte-sn2shn,h4.svelte-sn2shn,h5.svelte-sn2shn{margin:0}input.svelte-sn2shn::-webkit-outer-spin-button,input.svelte-sn2shn::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.dropdown-cont.svelte-sn2shn{position:absolute;display:flex;justify-content:center;align-items:center;top:90px;right:-370px;width:370px;background-color:#112033;transition:right 0.5s;z-index:1000;border-bottom-left-radius:20px}.dropdown-cont.active.svelte-sn2shn{display:flex;justify-content:center;align-items:center;right:0px}.cart-items-list.svelte-sn2shn{display:flex;flex-direction:column;width:100%;list-style-type:none;padding:0;margin:0;align-items:center}.cart-item.svelte-sn2shn{display:flex;flex-direction:row;align-items:center;justify-content:start;gap:10px;padding:10px}.item-info.svelte-sn2shn{display:flex;flex-direction:column;gap:3px}.quantity.svelte-sn2shn{display:flex;flex-direction:row;align-items:center}.cart-btn.svelte-sn2shn{display:flex;flex-direction:row;gap:10px;align-items:center;cursor:pointer}.cart-btn.svelte-sn2shn:hover{border-bottom:#fff solid 1px}.remove-item-btn.svelte-sn2shn{background-color:rgba(255, 255, 255, 0.139);backdrop-filter:blur(5px);border:none;border-radius:40px;width:30px;height:30px;cursor:pointer}.check-out-btn.svelte-sn2shn{background-color:#fff;border:none;border-radius:40px;width:80%;height:40px;margin-top:10px;margin-bottom:30px;cursor:pointer}@media(max-width: 1024px){.dropdown-cont.svelte-sn2shn{top:53px;right:-390px}.dropdown-cont.active.svelte-sn2shn{right:-20px}}@media(max-width: 480px){.dropdown-cont.svelte-sn2shn{top:53px;right:-500px;width:100vw;border-bottom-right-radius:20px }.dropdown-cont.active.svelte-sn2shn{right:-20px\n    }}",
  map: null
};
const Cart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cartItems, $$unsubscribe_cartItems;
  $$unsubscribe_cartItems = subscribe(cartItems, (value) => $cartItems = value);
  let totalPrice = 0;
  let productAmount = 1;
  let inputAmount;
  let toggleActive = "";
  $$result.css.add(css);
  {
    {
      if ($cartItems.length === 0) {
        totalPrice = 0;
        productAmount = 1;
      } else {
        $cartItems.forEach((item) => totalPrice = item.price * $cartItems.length);
        productAmount = $cartItems.length;
      }
    }
  }
  $$unsubscribe_cartItems();
  return `<div class="cart-cont"> <div class="cart-btn svelte-sn2shn">CART (${escape($cartItems.length)})</div> <div class="${"dropdown-cont " + escape(toggleActive, true) + " svelte-sn2shn"}"><div style="display: flex; flex-direction: column; gap: 20px; align-items: center;"><div class="cart-items-list svelte-sn2shn">${$cartItems.length > 0 ? `<div style="display: flex; flex-direction: row; gap: 70%; border-bottom: solid 0.7px; height: 60px; width: 90%; align-items: center;"><div style="display: flex; flex-direction: row; gap: 10px; align-items: center;" data-svelte-h="svelte-qtq9wf"><h4 class="svelte-sn2shn">Total:</h4></div> <h4 class="svelte-sn2shn">€${escape(totalPrice)}</h4></div> <li class="cart-item svelte-sn2shn"><img style="height: 90px;"${add_attribute("src", $cartItems[0].img, 0)} alt=""> <div class="item-info svelte-sn2shn"><h4 class="svelte-sn2shn">${escape($cartItems[0].name)}</h4> <h5 class="svelte-sn2shn">Price: €${escape($cartItems[0].price)}</h5></div> <div class="quantity svelte-sn2shn"><button style="height: 19px; border-radius: 10px 0 0 10px; border: none; cursor: pointer" class="minus" data-svelte-h="svelte-16014gh">-</button> <input style="height: 17px; width: 30px; display: flex; text-align: center; border: none;" type="number" min="1"${add_attribute("value", productAmount, 0)} class="svelte-sn2shn"${add_attribute("this", inputAmount, 0)}> <button style="height: 19px;border: none; border-radius: 0 10px 10px 0; cursor: pointer;" class="plus" data-svelte-h="svelte-1azzjws">+</button></div> <button class="remove-item-btn svelte-sn2shn" data-svelte-h="svelte-guh8m3"><img style="height: 15px;"${add_attribute("src", contactExitScr, 0)} alt=""></button></li> <button class="check-out-btn svelte-sn2shn" data-svelte-h="svelte-inmcjz">CHECKOUT</button>` : `<h2 style="font-size: 1.1em; width: 100%; margin-bottom: 20px; margin-top: 20px;" data-svelte-h="svelte-33k331">You have no items in your bag.</h2>`}</div></div></div> </div>`;
});
export {
  Cart as C
};
