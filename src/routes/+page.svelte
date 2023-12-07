<script>
  import VideoSrc from "$lib/img/videos/KronøsIntroVideo2.mp4";
  import ParallaxScrollingImg from "$lib/parallaxScrollingImgFrontPage.svelte"
  import View360 from "$lib/360view.svelte";
  import PanUp from "$lib/panUp.svelte";
  import PanImg from "$lib/img/Angle.png"
  import icon360 from "$lib/img/icons/icon-360.png";
  import bannerImg from "$lib/img/Banner_photo_v2.jpg";
  import bannerImgPhone from "$lib/img/Iphone Banner Photo.jpeg"
  import phoneImg from "$lib/img/front-img-phone.jpg"
  import { browser } from "$app/environment";
  import { onMount } from "svelte";


  /**
   * @type {string}
   */
  let phoneImgActive; 
  /**
   * @type {string}
   */
  let pcImgActive;

onMount(()=>{
  if(window.innerWidth < 1024){
    phoneImgActive = "active";
    pcImgActive = ""
  }else{
    phoneImgActive = "";
    pcImgActive = "active"
  }
})

</script>

<body>
  <div class="main-cont">
    <section class="video-cont">
      <div class="header-cont">
        <h1>KRONØS</h1>
        <h2>Aurora-inspired, quality-driven simplicity</h2>
        <a href="/products" style="border-bottom: 1px #fff solid; cursor: pointer; z-index: 100;">EXPLORE NOW</a>
      </div>
      {#if pcImgActive === "active"}
      <video class="video {pcImgActive}" loop autoplay muted>
        <source src={VideoSrc} type="video/mp4" />
        <track
          src="captions_en.vtt"
          kind="captions"
          srclang="en"
          label="english_captions"
        />
        <track
          src="captions_es.vtt"
          kind="captions"
          srclang="es"
          label="spanish_captions"
        />
        Your browser does not support the video tag.
      </video>
      {/if}
      <img class="phone-img {phoneImgActive}" src={phoneImg} alt="">
    </section>
    <section class="panUp-cont">
      <div class="header-panUp">
        <div class="background-panUp-headers"></div>
        <div class="headers-panUp">
          <h3>KRONØS WATCHES WHERE<br>
            PASSION MEETS PRECISION UNDER<br>
            THE SHIMMERING NORTHERN LIGHTS
          </h3>
          <a class="discover-link" href="/products">
            <h4>Explore the polaris</h4>
          </a>
        </div>
      </div>
      <div class="panUp-view">
        {#if browser}
        {#if phoneImgActive === ""}
          <PanUp />
          {:else}
          <img class="panImg" src={PanImg} alt="">
          {/if}
        {/if}
      </div>
    </section>
    <ParallaxScrollingImg />
    <section class="watch360view-cont">
      <div class="header-360view">
        <div class="background-360view-headers"></div>
        <div class="headers-360view">
          <h3>Versatile watches, marrying <br>
            style and functionality for<br>
            every purpose with precision<br>
          </h3>
          <a class="discover-link" href="/products">
            <h4>Explore the polaris</h4>
          </a>
        </div>
      </div>
      <div class="view360">
        {#if browser}
          <View360 />
        {/if}
        <img src={icon360} alt="" />
      </div>
    </section>
    <section class="watch-img-main">
      <img class="bannerImgPhone" src={bannerImgPhone} alt="">
      <img class="bannerImg" src={bannerImg} alt="">
    </section>
  </div>
</body>

<style>
  body {
    padding: none;
    overflow-x: clip;
    margin: 0;
    padding: 0;
    overscroll-behavior-x: none;
  }
  h1 {
    font-size: 6rem;
    font-weight: 400;
  }

  h2 {
    font-size: 3rem;
    font-weight: 200;
  }
  h3 {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0;
    line-height: 1.4;
  }
  h4 {
    margin: 0;
    font-weight: 300;
    padding-bottom: 6px;
    border-bottom: 0.5px #fff solid;
  }

  a{
    font-size: 1.2rem;
    margin-top: 20px;
    color: #fff;
  }

  .main-cont{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .video-cont {
    position: relative;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center; 
    align-items: center;
  }

  .phone-img{
    object-fit: cover;
    display: none;
    width: 100vw;
    height: 100vh;
  }

  .phone-img.active{
    display: block;
  }
  /* Apply these styles to the video element */
  .video {
    width: 100vw;
    height: 100vh;
    object-fit: cover; /* This ensures the video covers the entire container */
    display: none;
  }

  .video.active{
    display: block;
  }

  .header-cont{
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  

    /* 360view Start */

  .watch360view-cont {
    position: relative;
    background: radial-gradient(
        50% 45% at 50% 50%,
        #3b588136 0%,
        rgba(13, 26, 46, 0) 100%
      );
    color: #fff;
    width: 90%;
    max-width: 2300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .header-360view {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
  }

  .background-360view-headers{
    position: absolute;
    background-color:  #182C45;
    width: 90%;
    height: 60px;
    top: 20px;
  }

  .headers-360view {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-transform: uppercase;
    z-index: 10;
  }

  .discover-link {
    font-size: 1.2rem;
    font-weight: 900;
    display: flex;
    flex-direction: row;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }

  .view360 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    image-rendering: auto;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
    width: 100%;
    gap: 30px;
  }

      /* 360view end */


      /* panUp Start */

  .panUp-cont {
    position: relative;
    background: radial-gradient(
        50% 45% at 50% 50%,
        #3b588136 0%,
        rgba(13, 26, 46, 0) 100%
      );
    color: #fff;
    width: 100%;
    max-width: 2300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
  }

  .header-panUp {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .background-panUp-headers{
    position: absolute;
    background-color:  #182C45;
    width: 90%;
    height: 60px;
    bottom: 90px;
  }

  .headers-panUp {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-transform: uppercase;
    z-index: 10;
  }

  .discover-link {
    font-size: 1.2rem;
    font-weight: 900;
    display: flex;
    flex-direction: row;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }

  .panUp-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    image-rendering: auto;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
    width: 100%;
    gap: 30px;
  }
  /* 360view end */


  .watch-img-main{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bannerImg{
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100vh;
  }

  .bannerImgPhone{
    display: none;
  }

  .panImg{
    height: 45vh;
  }

  /* Styles for tablets */
  @media  (max-width: 1024px) {
    .header-cont{
      margin-top: -200px;
    }
    h1{
      font-size: 5rem;
    }
    h2{
      font-size: 2.5rem;
    }
    h3{
      font-size: 1.3rem;
    }

    .watch360view-cont {
      flex-direction: column-reverse;
      gap: 40px;
      margin-bottom: 100px;
    }

    .background-360view-headers{
      display: none;
    }

    .headers-360view {
    justify-content: center;
    text-align: center;
    }
  
    .discover-link {
      justify-content: center;
      font-size: 1rem;
    }

    .panUp-cont {
      flex-direction: column-reverse;
      gap: 40px;
    }

    .background-panUp-headers{
      display: none;
    }

    .headers-panUp {
    justify-content: center;
    text-align: center;
    }
  
    .discover-link {
      justify-content: center;
      font-size: 1rem;
    }


  }

  @media (max-width: 767px) {
    .bannerImg{
    display: none;
  }

  .bannerImgPhone{
    display: block;
  }
    h1{
      font-size: 3.8rem;
    }
    h2{
      font-size: 1.8rem;
    }
    h3{
      font-size: 1rem;
    }

    .discover-link {
      justify-content: center;
      font-size: 0.8rem;
    }
    .discover-link {
      justify-content: center;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 767px) {

h1{
  font-size: 3.5rem;
}
h2{
  font-size: 1.4rem;
}
h3{
  font-size: 1rem;
}

a{
  font-size: 1rem;
}
.discover-link {
  justify-content: center;
  font-size: 0.8rem;
}
.discover-link {
  justify-content: center;
  font-size: 0.8rem;
}
}


</style>
