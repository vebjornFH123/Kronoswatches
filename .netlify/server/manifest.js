export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Kronøs-Logo-white.png","Metal.jpg","hand-transformed.glb","hand.bin","hand.gltf","nordlys.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".glb":"model/gltf-binary",".bin":"application/octet-stream",".gltf":"model/gltf+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.0a7664e3.js","app":"_app/immutable/entry/app.39c3adbc.js","imports":["_app/immutable/entry/start.0a7664e3.js","_app/immutable/chunks/scheduler.4a8d5639.js","_app/immutable/chunks/singletons.a1bfd3bf.js","_app/immutable/chunks/index.c1dac2e2.js","_app/immutable/entry/app.39c3adbc.js","_app/immutable/chunks/scheduler.4a8d5639.js","_app/immutable/chunks/index.e5c90a1b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/checkOut",
				pattern: /^\/checkOut\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/location",
				pattern: /^\/location\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
