

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.bbb58367.js","_app/immutable/chunks/scheduler.4a8d5639.js","_app/immutable/chunks/index.e5c90a1b.js","_app/immutable/chunks/galleryImg2.e20277f1.js","_app/immutable/chunks/Foreground.78e74e5c.js"];
export const stylesheets = ["_app/immutable/assets/3.7ac95de9.css"];
export const fonts = [];
