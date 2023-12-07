

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/location/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.ff041d92.js","_app/immutable/chunks/scheduler.4a8d5639.js","_app/immutable/chunks/index.e5c90a1b.js","_app/immutable/chunks/each.8f027e66.js","_app/immutable/chunks/exit-black-icon.47707a83.js"];
export const stylesheets = ["_app/immutable/assets/5.c2d11dc8.css"];
export const fonts = [];
