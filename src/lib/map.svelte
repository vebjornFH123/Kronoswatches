<script>
  import { onMount } from "svelte";
  import exitIcon from "$lib/img/icons/exit-black-icon.svg";
  import storeImg from "$lib/img/store-details-generic-03.avif";

  import markerIcon from "$lib/img/icons/mapMarkerIcon.svg";

  import listIcon from "$lib/img/icons/list-icon.svg";
  import mapIcon from "$lib/img/icons/mapIcon.svg";

  import {Loader} from 'google-maps';


  const storeLocations = [
    {
      name: "Urmaker Fuhre A/S",
      streetAddress: "Tinneveien 42 ",
      streetName: "3681 Notodden",
      city: "Notodden",
      country: "Norway",
      id: "1",
      position: { lat: 59.5606, lng: 9.27293 },
    },
    {
      name: "Urmaker Tveit A/S",
      streetAddress: "Bronsestien 2",
      streetName: "4072 Randaberg",
      city: "Stavanger",
      country: "Norway",
      id: "2",
      position: { lat: 59.01183, lng: 5.64158 },
    },
    {
      name: "Kronøs Urverk A/S",
      streetAddress: "Jørgen Bangs gate 13",
      streetName: "4876 Grimstad",
      city: "Grimstad",
      country: "Norway",
      id: "3",
      position: { lat: 58.33949, lng: 8.58773 },
    },
  ];

  let active = "";
  let storeIndex = 0;
 /**
   * @type {HTMLDivElement}
   */
  let mapCont;

  // init google maps
  onMount(async () => {
    // @ts-ignore

const apiKey = `AIzaSyArlv_KI9BDv78AVmhWmiPxAcHkphzv4h0`;
// @ts-ignore
const loader = new Loader(apiKey);
 
const google = await loader.load();

    let mapOptions = {
      mapId: "e82b090e8a6c62d9",
      zoom: 5,
      minZoom: 3,
      center: { lat: 58.33949, lng: 8.58773 },
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT,
      },
      gestureHandling: "cooperative",
    };

    const map = new google.maps.Map(mapCont, mapOptions);

    /**
     * @type {any[]}
     */
    let markers = [];

    // Loop through the store locations and create markers
    storeLocations.forEach((store) => {
      const marker = new google.maps.Marker({
        position: store.position,
        map,
        icon: markerIcon,
        animation: google.maps.Animation.DROP,
        title: "store.name",
        id: store.id,
      });

      // Add the marker to the markers array with a unique name
      markers.push(marker);
    });

    window.storeDetails = function (event, close) {
      active = "active";
      if (close === "close") {
        active = "";
        console.log(close);
      } else {
        map.setZoom(12);
        if (event.currentTarget.id === "1") {
          storeIndex = 0;
          map.panTo(storeLocations[0].position);
        } else if (event.currentTarget.id === "2") {
          storeIndex = 1;
          map.panTo(storeLocations[1].position);
        } else if (event.currentTarget.id === "3") {
          storeIndex = 2;
          map.panTo(storeLocations[2].position);
        }
      }
    };

    markers.forEach((marker) => {
      console.log(marker.id);
      google.maps.event.addListener(marker, "mousedown", function () {
        map.setZoom(12);
        map.panTo(marker.position);
        active = "active";
        if (marker.id === "1") {
          storeIndex = 0;
        } else if (marker.id === "2") {
          storeIndex = 1;
        } else if (marker.id === "3") {
          storeIndex = 2;
        }
      });
    });
  });


  let phoneIconBtn = listIcon;
  let storeList = "";
  let phoneText = "List"; 
function openList (){
  if(storeList === ""){
    phoneIconBtn = mapIcon;
    phoneText = "Map"
    storeList = "active";
  }else{
    phoneIconBtn = listIcon;
    phoneText = "List"
    storeList = "";
  }
}
</script>

<div class="main-map-cont">
  <div class="main-store-cont {storeList}">
    <div class="main-store-details {active}">
      <div class="exitDiv">
        <div
          class="exitBtn"
          on:click={(event) => {
            storeDetails(event, "close");
          }}
        >
          <img class="exit-img" src={exitIcon} alt="" />
        </div>
      </div>

      <div class="store-img">
        <img style="object-fit: contain;" src={storeImg} alt="" />
      </div>

      <div class="content-cont">
        <div class="store-details-cont" contenteditable="false">
          <h2>{storeLocations[storeIndex].name}</h2>
          <div>
            <h4>{storeLocations[storeIndex].streetAddress}</h4>
            <h4>{storeLocations[storeIndex].streetName}</h4>
            <h4>{storeLocations[storeIndex].city}</h4>
            <h4>{storeLocations[storeIndex].country}</h4>
          </div>
        </div>
        <div class="opening-hours">
          <h3>Opening times</h3>
          <ul class="time-list">
            <li class="times">
              <h4 class="days">Mon</h4>
              <h4>09:00am - 4:00pm</h4>
            </li>
            <li class="times">
              <h4 class="days">Tue</h4>
              <h4>09:00am - 4:00pm</h4>
            </li>
            <li class="times">
              <h4 class="days">Wed</h4>
              <h4>09:00am - 6:00pm</h4>
            </li>
            <li class="times">
              <h4 class="days">Thu</h4>
              <h4>09:00am - 6:00pm</h4>
            </li>
            <li class="times">
              <h4 class="days">Fri</h4>
              <h4>09:00am - 4:00pm</h4>
            </li>
            <li class="times">
              <h4 class="days">Sat</h4>
              <h4>09:00am - 3:00pm</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <h4 class="retailers-header">
      Official Kronøs Retailers <strong>Near you</strong>
    </h4>
    {#each storeLocations as store}
      <div
        id={store.id}
        class="store-cont"
        on:click={(event) => {
          storeDetails(event);
        }}
      >
        <h2>{store.name}</h2>
        <div class="store-info-cont">
          <div class="store-info">
            <h4>{store.streetAddress}</h4>
            <h4>{store.streetName}</h4>
            <h4>{store.city}</h4>
            <h4>{store.country}</h4>
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div id="map-canvas" class="map-cont" bind:this={mapCont} />
  <button class="phone-btn" on:click={()=>{openList()}}><img style="height: 15px;" src={phoneIconBtn} alt="">{phoneText}</button>
</div>
<style>
  h2 {
    font-size: 2em;
    font-weight: 500;
  }
  h3{
    font-size: 1.6rem;
    font-weight: 500;
  }
  h4 {
    margin: 0%;
    font-size: 1.3em;
    font-weight: 300;
    margin-top: 6px;
  }

  .main-map-cont {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    color: #fff;
    position: relative;
  }

  .main-store-cont {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    position: relative;
  }

  .retailers-header {
    font-size: 0.9em;
    padding-left: 35px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .store-cont {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 40px;
    padding-top: 40px;
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
  .store-cont:hover {
    cursor: pointer;
    background-color: #15263b
  }

  .store-info-cont {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .store-info {
    width: 100%;
  }
  .map-cont {
    height: 100%;
    width: 100%;
  }

  .main-store-details {
    position: absolute;
    z-index: 100;
    height: 100vh;
    width: 100%;
    left: -100%;
    background-color: #182c45;
    transition: left 0.5s;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .main-store-details.active {
    left: 0;
  }

  .content-cont{
    display: flex;
    flex-direction: column;
    gap: 50px;
    overflow: hidden;
    overflow-y: scroll
  }

  .exitDiv {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 40px;
    margin-right: 50px;
  }
  .exitBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #efefef;
  }
  .exitBtn:hover {
    scale: 1.05;
    cursor: pointer;
    background-color: #f9f9f9;
  }

  .store-img {
    height: 350px;
    margin-left: 50px;
    display: flex;
    overflow: hidden;
    align-items: center;
    margin-right: 50px;
    filter: grayscale(1) contrast(1.2);
  }

  .store-details-cont {
    padding-bottom: 15px;
    margin-top: 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 50px;

  }


  .opening-hours{
    margin-left: 50px;
  }
  .time-list {
    list-style: none;
    padding: 0px;
  }

  .times {
    display: flex;
    flex-direction: row;
    gap: 60px;
  }

  .days {
    width: 50px;
  }

  .phone-btn{
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);    
    background-color: #213b5d;
    border: none;
    color: #fff;
    width: 100px;
    height: 45px;
    border-radius: 45px;
    font-size: 1rem;
    text-transform: uppercase;
    display: none;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    z-index: 500;
  }

  @media (max-width: 1024px){
    .main-store-cont {
    width: 60%;
    }
    .store-img{
      height: 200px;
      margin: 0px;
    }
  }

  @media (max-width: 767px){
    .main-store-cont {
    position: absolute;
    bottom: -100vh;
    z-index: 100;
    display: flex;
    width: 100vw;
    background-color: #182c45;
    transition: all 0.7s;
    }

    .main-store-cont.active{
      bottom: 0;
    }

    .store-img{
      height: 200px;
      margin: 0px;
    }

    .phone-btn{
      display: flex;
    }

    .exitBtn{
      margin-right:   -40px;
    }
  }
</style>
