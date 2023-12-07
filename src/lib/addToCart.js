import productImg from "$lib/img/product-images/Top-Down-View.png";
import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const cartItems = writable([]);

const product = {
  itemNr: cartItems.length + 1,
  name: "Aurora Borealis",
  price: 1490,
  img: productImg,
};
let cartStorage = [];
if (browser) {
  if (localStorage.length === 0) {
    localStorage.setItem(`cartStorage`, JSON.stringify(cartStorage));
  } else {
    cartStorage = JSON.parse(localStorage.getItem(`cartStorage`)) || [];
  }
  cartItems.update(() => [...cartStorage]);
  console.log(cartStorage);
}

export function addItemToCart(amount) {
  if (amount <= 0) {
    cartStorage = [product];
    checkLocalStorage();
  } else if (amount > 1) {
    cartStorage = [];
    for (let i = 0; i < amount; i++) {
      cartStorage = [...cartStorage, product];
      checkLocalStorage();
    }
  } else {
    cartStorage = [...cartStorage, product];
    checkLocalStorage();
  }
}

export function removeItemFromCart() {
  cartStorage.pop();
  checkLocalStorage();
}

export function removeAllItemsFromCart() {
  cartStorage = [];
  checkLocalStorage();
}

export function checkLocalStorage() {
  if (browser) {
    localStorage.setItem(`cartStorage`, JSON.stringify(cartStorage));
    cartStorage = JSON.parse(localStorage.getItem(`cartStorage`));
    cartItems.update(() => [...cartStorage]);
  }
}
checkLocalStorage();
