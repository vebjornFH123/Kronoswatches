import { c as create_ssr_component, e as escape, b as add_attribute, a as each, v as validate_component } from "../../../chunks/ssr.js";
import { E as ExitScr } from "../../../chunks/exit-black-icon.js";
const storeImg = "/_app/immutable/assets/store-details-generic-03.53aab0a6.avif";
const listIcon = "/_app/immutable/assets/list-icon.b4d90b8c.svg";
const map_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h2.svelte-7j3thm{font-size:2em;font-weight:500}h3.svelte-7j3thm{font-size:1.6rem;font-weight:500}h4.svelte-7j3thm{margin:0%;font-size:1.3em;font-weight:300;margin-top:6px}.main-map-cont.svelte-7j3thm{width:100vw;height:100vh;display:flex;flex-direction:row;overflow:hidden;color:#fff;position:relative}.main-store-cont.svelte-7j3thm{width:40%;height:100%;display:flex;flex-direction:column;justify-content:start;align-items:start;position:relative}.retailers-header.svelte-7j3thm{font-size:0.9em;padding-left:35px;padding-top:20px;padding-bottom:20px}.store-cont.svelte-7j3thm{padding-left:30px;padding-right:30px;padding-bottom:40px;padding-top:40px;height:15vh;width:100%;display:flex;flex-direction:column;align-items:start;justify-content:center}.store-cont.svelte-7j3thm:hover{cursor:pointer;background-color:#15263b\n  }.store-info-cont.svelte-7j3thm{width:100%;display:flex;flex-direction:row;align-items:center}.store-info.svelte-7j3thm{width:100%}.map-cont.svelte-7j3thm{height:100%;width:100%}.main-store-details.svelte-7j3thm{position:absolute;z-index:100;height:100%;width:100%;left:-100%;background-color:#182c45;transition:left 0.5s;display:flex;flex-direction:column;gap:20px}.main-store-details.active.svelte-7j3thm{left:0}.content-cont.svelte-7j3thm{display:flex;flex-direction:column;gap:50px}.exitDiv.svelte-7j3thm{display:flex;justify-content:end;align-items:center;margin-top:40px;margin-right:50px}.exitBtn.svelte-7j3thm{display:flex;justify-content:center;align-items:center;width:40px;height:40px;border-radius:50%;background-color:#efefef}.exitBtn.svelte-7j3thm:hover{scale:1.05;cursor:pointer;background-color:#f9f9f9}.store-img.svelte-7j3thm{height:350px;margin-left:50px;overflow:hidden;display:flex;align-items:center;margin-right:50px;filter:grayscale(1) contrast(1.2)}.store-details-cont.svelte-7j3thm{padding-bottom:15px;margin-top:40px;width:90%;display:flex;flex-direction:column;align-items:start;margin-left:50px}.opening-hours.svelte-7j3thm{margin-left:50px}.time-list.svelte-7j3thm{list-style:none;padding:0px}.times.svelte-7j3thm{display:flex;flex-direction:row;gap:60px}.days.svelte-7j3thm{width:50px}.phone-btn.svelte-7j3thm{position:fixed;bottom:30px;left:50%;transform:translate(-50%, 0);background-color:#112033;border:none;color:#fff;width:100px;height:45px;border-radius:45px;font-size:1rem;text-transform:uppercase;display:none;justify-content:center;align-items:center;gap:10px;cursor:pointer;z-index:500}@media(max-width: 1024px){.main-store-cont.svelte-7j3thm{width:60%}.store-img.svelte-7j3thm{height:200px;margin:0px}}@media(max-width: 767px){.main-store-cont.svelte-7j3thm{position:absolute;bottom:-100vh;z-index:100;display:flex;width:100vw;background-color:#182c45;transition:all 0.7s}.main-store-cont.active.svelte-7j3thm{bottom:0}.store-img.svelte-7j3thm{height:200px;margin:0px}.phone-btn.svelte-7j3thm{display:flex}.exitBtn.svelte-7j3thm{margin-right:-40px}}",
  map: null
};
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const storeLocations = [
    {
      name: "Urmaker Fuhre A/S",
      streetAddress: "Tinneveien 42 ",
      streetName: "3681 Notodden",
      city: "Notodden",
      country: "Norway",
      id: "1",
      position: { lat: 59.5606, lng: 9.27293 }
    },
    {
      name: "Urmaker Tveit A/S",
      streetAddress: "Bronsestien 2",
      streetName: "4072 Randaberg",
      city: "Stavanger",
      country: "Norway",
      id: "2",
      position: { lat: 59.01183, lng: 5.64158 }
    },
    {
      name: "Kronøs Urverk A/S",
      streetAddress: "Jørgen Bangs gate 13",
      streetName: "4876 Grimstad",
      city: "Grimstad",
      country: "Norway",
      id: "3",
      position: { lat: 58.33949, lng: 8.58773 }
    }
  ];
  let active = "";
  let storeIndex = 0;
  let phoneIconBtn = listIcon;
  let storeList = "";
  let phoneText = "List";
  $$result.css.add(css$1);
  return `<div class="main-map-cont svelte-7j3thm"><div class="${"main-store-cont " + escape(storeList, true) + " svelte-7j3thm"}"><div class="${"main-store-details " + escape(active, true) + " svelte-7j3thm"}"><div class="exitDiv svelte-7j3thm"><div class="exitBtn svelte-7j3thm" data-svelte-h="svelte-d1i2et"><img class="exit-img"${add_attribute("src", ExitScr, 0)} alt=""></div></div> <div class="store-img svelte-7j3thm" data-svelte-h="svelte-7lz6bn"><img style="object-fit: contain;"${add_attribute("src", storeImg, 0)} alt=""></div> <div class="content-cont svelte-7j3thm"><div class="store-details-cont svelte-7j3thm" contenteditable="false"><h2 class="svelte-7j3thm">${escape(storeLocations[storeIndex].name)}</h2> <div><h4 class="svelte-7j3thm">${escape(storeLocations[storeIndex].streetAddress)}</h4> <h4 class="svelte-7j3thm">${escape(storeLocations[storeIndex].streetName)}</h4> <h4 class="svelte-7j3thm">${escape(storeLocations[storeIndex].city)}</h4> <h4 class="svelte-7j3thm">${escape(storeLocations[storeIndex].country)}</h4></div></div> <div class="opening-hours svelte-7j3thm" data-svelte-h="svelte-borsf7"><h3 class="svelte-7j3thm">Opening times</h3> <ul class="time-list svelte-7j3thm"><li class="times svelte-7j3thm"><h4 class="days svelte-7j3thm">Mon</h4> <h4 class="svelte-7j3thm">09:00am - 4:00pm</h4></li> <li class="times svelte-7j3thm"><h4 class="days svelte-7j3thm">Tue</h4> <h4 class="svelte-7j3thm">09:00am - 4:00pm</h4></li> <li class="times svelte-7j3thm"><h4 class="days svelte-7j3thm">Wed</h4> <h4 class="svelte-7j3thm">09:00am - 6:00pm</h4></li> <li class="times svelte-7j3thm"><h4 class="days svelte-7j3thm">Thu</h4> <h4 class="svelte-7j3thm">09:00am - 6:00pm</h4></li> <li class="times svelte-7j3thm"><h4 class="days svelte-7j3thm">Fri</h4> <h4 class="svelte-7j3thm">09:00am - 4:00pm</h4></li> <li class="times svelte-7j3thm"><h4 class="days svelte-7j3thm">Sat</h4> <h4 class="svelte-7j3thm">09:00am - 3:00pm</h4></li></ul></div></div></div> <h4 class="retailers-header svelte-7j3thm" data-svelte-h="svelte-6u8kph">Official Kronøs Retailers <strong>Near you</strong></h4> ${each(storeLocations, (store) => {
    return `<div${add_attribute("id", store.id, 0)} class="store-cont svelte-7j3thm"><h2 class="svelte-7j3thm">${escape(store.name)}</h2> <div class="store-info-cont svelte-7j3thm"><div class="store-info svelte-7j3thm"><h4 class="svelte-7j3thm">${escape(store.streetAddress)}</h4> <h4 class="svelte-7j3thm">${escape(store.streetName)}</h4> <h4 class="svelte-7j3thm">${escape(store.city)}</h4> <h4 class="svelte-7j3thm">${escape(store.country)}</h4> </div></div> </div>`;
  })}</div> <div id="map-canvas" class="map-cont svelte-7j3thm"></div> <button class="phone-btn svelte-7j3thm"><img style="height: 15px;"${add_attribute("src", phoneIconBtn, 0)} alt="">${escape(phoneText)}</button></div> ${$$result.head += `<!-- HEAD_svelte-1wkd8ux_START --><script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA3v8RchVBKuR6fBBThDWrj4a678kzQiQc&map_ids=e82b090e8a6c62d9" data-svelte-h="svelte-ioxomo"><\/script><!-- HEAD_svelte-1wkd8ux_END -->`, ""}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".map-cont.svelte-pygkc6{overflow:hidden;margin-top:90px;background-color:#182c45}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="map-cont svelte-pygkc6">${validate_component(Map, "Map").$$render($$result, {}, {}, {})} </section>`;
});
export {
  Page as default
};
