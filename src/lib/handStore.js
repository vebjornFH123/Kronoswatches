import { writable } from "svelte/store";

export let handColor = writable("Light");

export function updateHandColor(color) {
  handColor.set(color);
}

export let handSize = writable(7);
let intervalId;
let prevValue;

export function updateHandSize(value) {
  handSize.set(value);
}
