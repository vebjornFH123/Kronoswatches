

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c42fb611.js","_app/immutable/chunks/scheduler.4a8d5639.js","_app/immutable/chunks/index.e5c90a1b.js","_app/immutable/chunks/addToCart.64be7956.js","_app/immutable/chunks/index.c1dac2e2.js","_app/immutable/chunks/cart.776fda7d.js","_app/immutable/chunks/each.8f027e66.js","_app/immutable/chunks/stores.3bdce3eb.js","_app/immutable/chunks/singletons.a1bfd3bf.js"];
export const stylesheets = ["_app/immutable/assets/0.1078b198.css","_app/immutable/assets/addToCart.aac739e2.css","_app/immutable/assets/cart.742a2336.css"];
export const fonts = [];
