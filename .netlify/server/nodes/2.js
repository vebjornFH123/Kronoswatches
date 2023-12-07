

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.beb9d771.js","_app/immutable/chunks/scheduler.4a8d5639.js","_app/immutable/chunks/index.e5c90a1b.js","_app/immutable/chunks/Foreground.78e74e5c.js"];
export const stylesheets = ["_app/immutable/assets/2.b66ae48d.css"];
export const fonts = [];
