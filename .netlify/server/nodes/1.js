

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9e73e81d.js","_app/immutable/chunks/scheduler.4a8d5639.js","_app/immutable/chunks/index.e5c90a1b.js","_app/immutable/chunks/stores.3bdce3eb.js","_app/immutable/chunks/singletons.a1bfd3bf.js","_app/immutable/chunks/index.c1dac2e2.js"];
export const stylesheets = [];
export const fonts = [];
