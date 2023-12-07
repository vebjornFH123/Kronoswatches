<script>
  // Import the svelte functions
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { navigate } from 'svelte-routing';


  import topDownImg from "$lib/img/product-images/Top-Down-View.png";
  import topDownImgLume from "$lib/img/product-images/Top-Down-View-lume.png";
  import leftSideImg from "$lib/img/product-images/Left-Side-View.png";
  import bottomImg from "$lib/img/product-images/Bottom-View.png";
  import rightSideImg from "$lib/img/product-images/Right-Side-View.png";
  import ThreeSizeGuide from "$lib/threeSizeGuid.svelte";
 import dimensionsImg from "$lib/img/Size-Guide.png";

  import Logo from "$lib/logo.svelte";
  import ExitScr from "$lib/img/icons/exit-black-icon.svg";

  import leftArrow from "$lib/img/icons/arrow-icon-left.svg";
  import rightArrow from "$lib/img/icons/arrow-icon-right.svg";

  import dayIcon from "$lib/img/icons/day-icon.svg";
  import nightIcon from "$lib/img/icons/night-icon.svg";

  import galleryImg1 from "$lib/img/imgGallery/galleryImg1.jpg";
  import galleryImg1Lume from "$lib/img/imgGallery/galleryImg1-lume.jpg";
  import galleryImg2 from "$lib/img/imgGallery/galleryImg2.jpg";
  import galleryImg2Lume from "$lib/img/imgGallery/galleryImg2-lume.jpg";
  import galleryImg3 from "$lib/img/imgGallery/galleryImg3.jpg";
  import galleryImg3Lume from "$lib/img/imgGallery/galleryImg3-lume.jpg";
  import galleryImg4 from "$lib/img/imgGallery/galleryImg4.jpg";
  import galleryImg4Lume from "$lib/img/imgGallery/galleryImg4-lume.jpg";
  import galleryImg5 from "$lib/img/imgGallery/galleryImg5.jpg";
  import galleryImg5Lume from "$lib/img/imgGallery/galleryImg5-lume.jpg";
  import localTime from "$lib/img/product-images/LocalTime-V2.jpeg";
  import localTimeLume from "$lib/img/product-images/LocalTime-Lume-V2.jpeg";
  import bracelet from "$lib/img/product-images/Bracelet.jpeg";
  import braceletLume from "$lib/img/product-images/Bracelet-lume.jpeg";
  import caseImg from "$lib/img/product-images/Case-View.jpeg";
  import caseImgLume from "$lib/img/product-images/Case-View-Lume.jpeg";


  import sizeGuidePrint from "$lib/img/Size Guide Print A4.pdf";

  import Cart from "$lib/cart.svelte";
  import { addItemToCart } from "$lib/addToCart";



  const productImages = [topDownImg, leftSideImg, bottomImg, rightSideImg];

//------------------------------ header -------------------------------->
  /**
   * @type {HTMLDivElement} // hamburger menu button;
   */
  let hamburgerMenuBtn;
  let hamburgerMenuClicked= ""; 
  let headerClose = "";
  onMount(() => {
    window.addEventListener("scroll", () => {
  if (hamburgerMenuClicked === "") {
    const scrollY = window.scrollY;

    if (Math.abs(scrollY - lastScrollY) > 70) {


    if (scrollY > lastScrollY) {
      headerClose = "close";
    } else if (scrollY < lastScrollY) {
      headerClose = "";
    }

    lastScrollY = scrollY;
  }
}
});

let lastScrollY = window.scrollY;

  });

  function menuOpenClose(){
  const hamburgerLinks = document.querySelectorAll(".hamburger-link")
      let fadeInDelay = 0;
      if(hamburgerMenuClicked === "clicked"){
        hamburgerMenuClicked = "";
      document.body.style.overflow = "auto";
      /**
      * @type {HTMLDivElement} // Main cont;
      */
      hamburgerLinks.forEach(link=>{
      link.classList.remove("appear")
      
      // @ts-ignore
      link.style.opacity = "0";
      })
      }else{
      hamburgerMenuClicked = "clicked";
      document.body.style.overflow = "hidden";
      hamburgerLinks.forEach(link=>{
      // Apply the animation and delay
      link.classList.add("appear")
      // @ts-ignore
      link.style.animationDelay = `${fadeInDelay}s`;
      fadeInDelay += 0.1;
    })
    }
  }

  

  /**
   * @type {HTMLElement}  
   */
  let product;
  /**
   * @type {HTMLElement}  
   */
  let specifications;
  /**
   * @type {HTMLElement}  
   */
  let dimensions;
  /**
   * @type {HTMLElement}  
   */
  let gallery

  let productBtnActive = "active";
  let specificationsBtnActive = "";
  let dimensionsBtnActive = "";
  let galleryBtnActive = "";

   let dayNightExBtn = "";
   function displayDayNightBtn() {
      const specificationsRect = specifications.getBoundingClientRect();
      if (specificationsRect.top <= 0) {
        dayNightExBtn = "showBtn";
      } else {
        dayNightExBtn = "";
      }
    }
  onMount(()=>{
    window.addEventListener("scroll", () => {
      const specificationsRect = specifications.getBoundingClientRect();
      const dimensionsRect = dimensions.getBoundingClientRect();
      const galleryRect = gallery.getBoundingClientRect();
      if (specificationsRect.top <= 0) {
        productBtnActive = "";
        specificationsBtnActive = "active";
      } else {
        productBtnActive = "active";
        specificationsBtnActive = "";
      }
      if (dimensionsRect.top <= 0) {
        specificationsBtnActive = ""
        dimensionsBtnActive = "active";
      } else {
        dimensionsBtnActive = "";     
      }
      if (galleryRect.top <= 0) {
        dimensionsBtnActive = ""
        galleryBtnActive = "active"
      } else {
        galleryBtnActive ="";
      }
      displayDayNightBtn();
    });
    displayDayNightBtn();
  })
  /**
   * @type {{ style: { color: string; }; } | null}
   */
  let prevuesEvent = null;

  /**
   * @param {MouseEvent & { currentTarget: EventTarget & HTMLHeadingElement; }} event
   */
function scrollIntoView(event) {
 productBtnActive = "";

  if (prevuesEvent) {
    prevuesEvent.style.color = "#ffffff73";
  }
  prevuesEvent = event.currentTarget;

  event.currentTarget.style.color = "#fff";

  if (event.currentTarget.id === "product-btn") {
    product.scrollIntoView({
      behavior: "smooth",
    });
    headerClose = "close";
  } else if (event.currentTarget.id === "specifications-btn") {
    specifications.scrollIntoView({
      behavior: "smooth",
    });
    headerClose = "";
  } else if (event.currentTarget.id === "dimensions-btn") {
    dimensions.scrollIntoView({
      behavior: "smooth",
    });
    headerClose = "";
  } else if (event.currentTarget.id === "gallery-btn") {
    gallery.scrollIntoView({
      behavior: "smooth",
    });
    headerClose = "";
  }
}
//------------------------------ header -------------------------------->


  let imageIndex = 0;
  /**
   * @param {string} nextOrPrev // a parameter to separate between the next or previous btn;
   */
  function imageCont(nextOrPrev) {
    if ((nextOrPrev = "next")) {
      imageIndex = (imageIndex + 1) % productImages.length;
    } else if ((nextOrPrev = "prev")) {
      imageIndex = (imageIndex - 1) % productImages.length;
      if (imageIndex > 0) {
        imageIndex = 3;
      }
    }
if(imageIndex === 0){
  setTimeout(() => {
    lumedial.style.display = "block"; 
  }, 220);
}else{
  lumedial.style.display = "none";
}
}
      
  let specificationsInfo = [
    {
      headerInfo: "Integrated bracelet",
      img: bracelet,
      info: "Introducing the ultimate integrated stainless steel bracelet, a fusion of form and function that's perfect for every occasion. Crafted with precision and care, this bracelet is a seamless part of the watch's design. The integrated bracelet features a combination of brushed and hand, high-polished steel, creating a striking visual contrast that sets it apart from the ordinary. The brushed finish adds durability and resilience, perfect for the rigors of outdoor activities and sports, while the polished steel exudes sophistication and elegance, making it a natural fit for formal occasions. This integrated bracelet isn't just an accessory; it's a fundamental component of the watch's versatility. Whether you're hitting the gym, going for a run, attending a business meeting, or dressing up for a special event, this watch effortlessly adapts to your lifestyle. It's built to withstand the toughest challenges and look impeccable doing it. With its robust stainless steel construction, you can count on this watch to accompany you on your adventures and mark the most significant moments in your life. Versatile, stylish, and built to last, this sport watch with an integrated stainless steel bracelet is the ultimate timepiece for all your diverse endeavors.",
      btnImg: rightArrow,
      infoId: "1",
      active: "",
    },
    {
      headerInfo: "Kronøs Polaris Dial",
      img: localTime,
      info: "Behold the mesmerizing beauty of our hand-painted watch dial, a true masterpiece that captures the serene magic of the Aurora Polaris in shades of blue and green. Crafted by skilled artisans, each dial is a unique work of art, showcasing the tranquil colors of the Northern Lights. As you gaze upon the dial, you'll be transported to the Arctic skies, where soothing shades of deep blues and vibrant greens intertwine and dance across the canvas of the night. The painstaking artistry behind this creation ensures that no two dials are exactly alike, making your watch a one-of-a-kind treasure. This exquisite timepiece not only tells the time but also tells a story of nature's grandeur and human craftsmanship. With the Aurora Polaris-inspired dial in shades of blue and green, you carry a piece of the polar lights with you, reminding you of the serene beauty that graces our world. In the realm of watchmaking, this Aurora Polaris-inspired timepiece with its hand-painted dial represents a harmonious blend of art and precision engineering. The intricate brushstrokes and the use of serene blues and vibrant greens pay homage to the beauty of our natural world.",
      btnImg: rightArrow,
      infoId: "2",
      active: "",
    },
    {
      headerInfo: "Case",
      img: caseImg,
      info: "Introducing our premium stainless steel watch case, meticulously crafted to elevate your timepiece to new heights of versatility and sophistication. This exceptional case is a harmonious blend of brushed and hand-polished components, ensuring that your watch is ready for all occasions. The brushed stainless steel lends a rugged charm, perfect for the adventurous spirit within you. It's designed to withstand the challenges of your active lifestyle, whether you're exploring the great outdoors or simply on the go. In contrast, the high-polished parts exude elegance and refinement, making your watch a stylish companion for formal events, business meetings, or special occasions. Its mirror-like finish reflects your impeccable taste and attention to detail. This watch case is a testament to the seamless fusion of style and substance. Designed for the modern individual who values versatility, it effortlessly adapts to any setting. From casual to formal, from leisure to business, your timepiece will be the perfect accessory, reflecting your unique sense of style.",
      btnImg: rightArrow,
      infoId: "3",
      active: "",
    },
  ];

    /**
   * @type {any[]}
   */
    let moreInfoImgs = []
    /**
   * @type {any[]}
   */
    let moreInfo = []
    const displaySpecificationsInfo = (/** @type {string} */ id)=>{
      let infoImg = moreInfoImgs.filter(img => img.id === id)[0];
      const infoText = moreInfo.filter(info => info.id === id)[0];
      specificationsInfo.forEach(info => {
        if( id === info.infoId){
          if(info.active === ""){
            infoImg.style.transform = "rotate(-90deg)"
            infoImg.style.transition = "transform 0.5s";
            info.active = "active";
            infoText.style.maxHeight = "780px"
          }else{
            infoImg.style.transform = "rotate(90deg)"
            infoImg.style.transition = "transform 0.5s";
            infoText.style.maxHeight = "0"
            info.active = "";
          }
        }
      });
    }


  /**
   * @type {any[]}
   */
  let galleryImgs = [];
  /**
   * @type {any[]}
   */
  let galleryImages = [];
  /**
   * @type {HTMLImageElement}
   */
  let productImg;
    /**
   * @type {HTMLImageElement}
   */
  let lumedial;

  let darkLight = "";
  let activeDay = "";
  let activeNight = "";

  onMount(() => {       
    // @ts-ignore
    window.dayNight = function (/** @type {string} */ clicked) {
      if (clicked === "day") {
        darkLight = "";
        activeNight = "";
        activeDay = "active";
        productImg.style.filter = "brightness(1)";
        lumedial.style.opacity = "0";
        galleryImgs = [
          galleryImg1,
          galleryImg2,
          galleryImg3,
          galleryImg4,
          galleryImg5,
          bracelet,
        ];
        specificationsInfo[0].img = bracelet;
        specificationsInfo[1].img = localTime;
        specificationsInfo[2].img = caseImg;
      } else if (clicked === "night") {
        darkLight = "dark";
        activeDay = "";
        activeNight = "active";
        productImg.style.filter = "brightness(0.4)";
        lumedial.style.opacity = "1";
        galleryImgs = [
          galleryImg1Lume,
          galleryImg2Lume,
          galleryImg3Lume,
          galleryImg4Lume,
          galleryImg5Lume,
          braceletLume,
        ];
      specificationsInfo[0].img = braceletLume;
      specificationsInfo[1].img = localTimeLume;
      specificationsInfo[2].img = caseImgLume;
      }
    };
    // @ts-ignore
    dayNight("day");
});

 


// ------------------------------ open and close the three Size guide start  -------------->
  let threeGuideActive = "";
  /**
   * @type {ThreeSizeGuide}
   */
  let threeSizeGuid;
  onMount(() => {
    // @ts-ignore
    window.displayThreeCont = (/** @type {string} */ openClose) => {
      if (openClose === "open") threeGuideActive = "active";
      if (openClose === "close") threeGuideActive = "";
      threeSizeGuid.lodeCanvas();      
    };

    window.addEventListener("resize", () => {
      threeSizeGuid.lodeCanvas();
    });
  });
// ------------------------------ open and close the three Size guide end -------------->

</script>

<header class="header-main-cont {headerClose} {darkLight}">
  <!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="hamburger-menu-btn" on:click={menuOpenClose}>
    <div class="bar1 {hamburgerMenuClicked}"></div>
    <div class="bar2 {hamburgerMenuClicked}"></div>
    <div class="bar3 {hamburgerMenuClicked}"></div>
  </div>
  <div class="logo">
    <Logo />
  </div>
  <div class="hamburger-cart">
    <Cart/>
    </div>
  <div class="header-inner-cont">
    <a href="/products">WATCHES</a>
    <a href="/about">ABOUT US</a>
    <Logo />
    <a href="/location">LOCATION</a>
    <Cart/>
  </div>
  <div class="hamburger-menu-cont {hamburgerMenuClicked} {darkLight}">
    <div style="display: flex; align-items: start; flex-direction: column; gap: 10vh; margin-top: -20vh;">
      <a class="hamburger-link" href="/" on:click={()=>{document.body.style.overflow = "auto"; menuOpenClose()}}>HOME</a>
    <a class="hamburger-link" href="/products" on:click={()=>{document.body.style.overflow = "auto";menuOpenClose()}}>WATCHES</a>
    <a class="hamburger-link" href="/about" on:click={()=>{document.body.style.overflow = "auto"; menuOpenClose()}}>ABOUT US</a>
    <a class="hamburger-link" href="/location" on:click={()=>{document.body.style.overflow = "auto"; menuOpenClose()}}>LOCATION</a>
  </div>
  </div>
  <div class="side-menu {darkLight}">
    <div class="side-menu-header-cont">
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <h3
        class="product-btn {productBtnActive}"
        id="product-btn"
        on:mousedown={(event) => scrollIntoView(event)}
      >
        PRODUCT
      </h3>
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <h3
      class="specifications-btn {specificationsBtnActive}"
      id="specifications-btn"
      on:mousedown={(event) => scrollIntoView(event)}
    >
      SPECIFICATIONS
    </h3>
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <h3
        class="dimensions-btn {dimensionsBtnActive}"
        id="dimensions-btn"
        on:mousedown={(event) => scrollIntoView(event)}
      >
        DIMENSIONS
      </h3>
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <h3
      class="gallery-btn {galleryBtnActive}"
      id="gallery-btn"
      on:mousedown={(event) => scrollIntoView(event)}
    >
      GALLERY
    </h3>
    </div>
  </div>
  
</header>
  <div class="main-cont {darkLight}" bind:this={product}>
    <section class="main-product-cont">
      <div class="product-cont">
        <div class="img-cont">
          <img
            style="position: absolute; min-height: 500px;
            max-height: 600px;
            height: 40vw; z-index: 10; opacity: 0; transition: opacity 1.5s;"
            bind:this={lumedial}
            src={topDownImgLume}
            alt=""
          />
          {#each [productImages[imageIndex]] as src (imageIndex)}
            <img
              class="product-img"
              bind:this={productImg}
              in:fade={{ delay: 200 }}
              {src}
              alt=""
            />
          {/each}
          <div class="img-controls">
            <button
              class="btn-img-controls"
              on:mousedown={() => imageCont("prev")}
            >
              <img style="height: 15px;" src={leftArrow} alt="" />
            </button>
            <div class="dayNightBtn">
              <div
                class="day-cont {activeDay}"
                on:mousedown={() => dayNight("day")}
              >
                <img class="day-img {activeDay}" src={dayIcon} alt="" />
              </div>
              <div
                class="night-cont {activeNight}"
                on:mousedown={() => dayNight("night")}
              >
                <img class="night-img {activeNight}" src={nightIcon} alt="" />
              </div>
            </div>
            <button
              class="btn-img-controls"
              on:mousedown={() => imageCont("next")}
            >
              <img style="height: 15px;" src={rightArrow} alt="" />
            </button>
          </div>
        </div>
        <div class="info-watch-cont">
          <div class="header-watch-info">
            <h1>KRONØS POLARIS</h1>
            <h4 style="font-style: italic;">SUB SECOND SPORTS WATCH</h4>
          </div>
          <p style="border-bottom: solid 1px; padding-bottom: 20px; font-size: 1rem; letter-spacing: 2px;">
            Stainless steel case with integrated stainless steel bracelet.
            Paired with a spectacular hand painted aurora polaris dial, high-polished hands, and sapphire glass.
            <br>
            <br>
            <br>
            Introducing the versatile kronøs Polaris, a timepiece for all occasions.
            a watch that seamlessly adapts to your lifestyle, 
            wherever you go and whatever you do.
          <div class="price-cont">
            <div style="display: flex; flex-direction: column; width: 100%;">
              <span style="letter-spacing: 2px; font-size: 1rems; font-weight: 400;">€ 1490</span>
              <span style="letter-spacing: 2px; font-weight: 100;">RETAIL PRICE (INCL. VAT)</span>
            </div>
            <div class="buy-btns">
            <button class="buy-btn"
            on:click={()=>{navigate('/checkOut'); window.location.reload(); addItemToCart();}}
            >Buy Now</button>
            <button class="buy-btn"
              on:click={() => {
                headerClose = "";
                setTimeout(() => {
                  addItemToCart();
                }, 350);
              }}>Add to cart</button
            >
          </div>
        </div>
        </div>
      </div>
    </section>
    <section class="specifications-main-cont" bind:this={specifications}>
      <div class="header-divider {darkLight}"><h2>SPECIFICATIONS</h2></div>
      <div class="specifications-cont">
        {#each specificationsInfo as info, i}
          <div class="specifications-info-cont">
            <img class="specifications-img" src={info.img} alt="">
            <button id={info.infoId} class="more-info-btn" on:click={()=>{displaySpecificationsInfo(info.infoId)}}><h3 class="specifications-info-header">{info.headerInfo}</h3><img style="transform: rotate(90deg); height: 20px;" id={info.infoId} bind:this={moreInfoImgs[i]} src={info.btnImg} alt=""></button>
            <div id={info.infoId} bind:this={moreInfo[i]} class="specifications-info">
            <p class="info-specifications-text">{info.info}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>
    <section class="dimensions-main-cont" bind:this={dimensions}>
      <div class="header-divider {darkLight}"><h2>DIMENSIONS</h2></div>
      <div class="dimensions-cont">
        <div class="dimensions-info">
        <div class="dimensions-info-inner">
          <p class="dimensions-info-text">The Kronøs Polaris watch is crafted with versatile dimensions, ensuring an optimal user experience for various occasions. The Polaris´s thoughtful design seamlessly blends functionality with style.</p>
        <div style="display: flex; flex-direction: row; gap: 10px;">
          <button class="sizeGuid-btn" on:click={()=>{displayThreeCont("open")}}>Test our 3d size guide</button>
          <button class="print-btn" on:click={()=>{window.open(sizeGuidePrint)}}>Print out size guide</button>
        </div>
      </div>
        </div>
        <img class="dimensions-img" src={dimensionsImg} alt="">
        <button class="print-btn-mobile" on:click={()=>{window.open(sizeGuidePrint)}}>Print out size guide</button>
      </div>


      <div class="three-guide-cont-background {threeGuideActive}">
        <div class="main-cont-three-guide">
          <div class="exitDiv">
            <div
              class="exitBtn"
              on:mousedown={() => {
                displayThreeCont("close");
              }}
            >
              <img class="exit-img" src={ExitScr} alt="" />
            </div>
            <ThreeSizeGuide bind:this={threeSizeGuid} />
          </div>
        </div>
      </div>
    </section>
    <section class="gallery-main-cont" bind:this={gallery}>
      <div class="header-divider {darkLight}"><h2>GALLERY</h2></div>
      <div class="gallery-cont">
        {#each galleryImgs as img}
          <img class="gallery-img" src={img}>
        {/each}
      </div>
    </section>
  </div>
  <div class="dayNightExBtn {dayNightExBtn}">
    <div class="day-cont {activeDay}" on:mousedown={() => dayNight("day")}>
      <img class="day-img {activeDay}" src={dayIcon} alt="" />
    </div>
    <div
      class="night-cont {activeNight}"
      on:mousedown={() => dayNight("night")}
    >
      <img class="night-img  {activeNight}" src={nightIcon} alt="" />
    </div>
  </div>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;400;500;700&display=swap');
  html {
    background: #123d62;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-family: "Proxima Nova", sans-serif;
    font-weight: 100;
    font-size: calc(9px + 0.3vw);
  }
  a:hover {
    border-bottom: 0.1rem solid;
    scale: 1.1;
  }

  h1 {
    font-weight: 100;
    font-size: 3.5rem;
  }

  h2 {
    font-weight: 300;
    font-size: 3rem;
    margin: 0;
    text-transform: uppercase;
  }

  h3 {
    font-weight: 100;
    font-size: 0.9rem;
  }

  h4{
    font-weight: 300;
    font-size: 1.3rem;

  }
  p{
    font-weight: 100;
    font-size: 1.2rem;
  }


  .main-cont{
    padding: none;
    overflow-x: hidden;
    margin: none;
    margin: 0;
    padding: 0;
    background:
      radial-gradient(
        50.75% 15.73% at 50.29% 15.27%,
        #3b588150 0%,
        rgba(13, 26, 46, 0) 100%
      );
    transition: background 1s linear;
  }

  .main-cont.dark{
    background: #020f1a;
  }

  /* --------------Header Start------------- */
  .header-main-cont {
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    height: 90px;
    background: #112033;
    transition: all 1s;
    color: #fff;
    font-family: "Proxima Nova", sans-serif;
    font-weight: 100;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-main-cont.close{
    top: -100px; 
  }

  .header-main-cont.dark{
    background: #020f1a;
  }
  .header-inner-cont{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  } 
.hamburger-menu-btn{
  position: absolute;
  left: 20px;
  cursor: pointer;
  display: none;
}
.bar1,.bar2,.bar3 {
  width: 25px;
  height: 3px;
  margin: 4px 0;
  background-color: #ffffff;
  transition: transform 0.5s;
}

.bar1.clicked {
  transform: rotate(-45deg) translate(-5px, 5px);
}

.bar2.clicked {
  opacity: 0;
}

.bar3.clicked {
  transform: rotate(45deg) translate(-5px, -5px);
}

.logo{
  position: absolute;
  display: none;
}

.hamburger-menu-cont {
  position: absolute;
  top: 90px;
  z-index: 100;
  height: 0;
  width: 100%; /* Cover the entire width of the viewport */
  background: #112033;
  overflow: hidden; /* Hide content that goes beyond the height */
  transition: height 0.7s; /* Add a smooth transition effect */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
}

.hamburger-menu-cont.dark{
  background: #020f1a;
}

.hamburger-menu-cont a {
  font-size: 3.4rem;
}

.hamburger-menu-cont.clicked {
  height: 95vh;
}

.hamburger-cart{
  position: absolute;
    right: 20px;
    display: none;
  }


/* Animations */

.appear {
	opacity: 0;
  transform: translateX(-70vh);
	animation: appear;
	animation-duration: 0.5s;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;
}

@keyframes appear {
	from {
		opacity: 0;
    transform: translateX(-70vh);

	}
	to {
		opacity: 1;
    transform: translateX(0);
	}
}
  /* Styles for tablets */
  @media (max-width: 1024px) {
  .header-inner-cont {
    display: none;
    position: relative;
  }

  .hamburger-menu-btn{
    display: block;
  }


  .logo{
  display: block;
  }

  .hamburger-cart{
    display: block;
  }

  .nav-links.clicked{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 30px;
    background-color: red;
}
  }

  .side-menu {
    position: absolute;
    padding: 0px 20px 0px 20px;
    height: 50px;
    top: 90px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff73;
    background: #112033;
    transition: all 0.5s;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    transition: background 1s linear;
  }

  .side-menu.dark{
    background: #020f1a;
  }

  .side-menu-header-cont {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }

  .product-btn,
  .gallery-btn,
  .dimensions-btn,
  .specifications-btn {
    transition: all 0.5s;
  }
  .product-btn:hover,
  .gallery-btn:hover,
  .dimensions-btn:hover,
  .specifications-btn:hover {
    color: #fff;
    cursor: pointer;
  }

  .product-btn.active,
  .gallery-btn.active,
  .dimensions-btn.active,
  .specifications-btn.active {
    color: #fff;
    cursor: pointer;
  }
    /* --------------Header End------------- */

  /* --------------Main Star------------- */
  .main-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #fff;
    gap: 100px;
  }

  .main-product-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  /* --------------Main End------------- */


  /* --------------Product Start------------- */
  .product-cont {
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    gap: 50px;
    max-width:1500px;
  }
  .info-watch-cont {
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    text-transform: uppercase;
  }

  .header-watch-info{
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    border-bottom: solid 1px #efefef;
  }
  .img-controls {
    position: absolute;
    display: flex;
    flex-direction: row;
    gap: 10px;
    z-index: 100;
    bottom: -40px;
  }

  .btn-img-controls {
    border: none;
    background-color: transparent;
  }

  .img-cont {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 40vh;
    min-height: 500px;
    max-height: 600px;
    height: 40vw;
  }

  .product-img {
    transition: filter 1.5s;
    min-height: 500px;
    max-height: 600px;
    height: 40vw;
  }
  .dayNightBtn, .dayNightExBtn{
    width: 120px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.139);
    backdrop-filter: blur(5px);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1px;
  }

  .dayNightExBtn{
    position: fixed; 
    bottom: 30px; 
    left: 30px; 
    opacity: 0; 
    transition: opacity .5s; 
    z-index: 10;
  }

  .dayNightExBtn.showBtn{
    opacity: 1;
  }

  .day-cont,
  .night-cont {
    width: 55px;
    height: 30px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    transition: all 0.3s;
    cursor: pointer;
  }

  .day-cont.active,
  .night-cont.active {
    background-color: #fff;
    cursor: auto;
  }

  .day-img,
  .night-img {
    scale: 0.6;
  }

  .day-img.active,
  .night-img.active {
    scale: 0.6;
    filter:invert(1);
  }
  

  .price-cont{
    display: flex; 
    flex-direction: row; 
    align-items: end; 
    justify-content: start;
  }

  .buy-btns {
    display: flex;
    flex-direction: row;
    gap: 30px;
    }

  .buy-btn {
    height: 40px;
    width: 200px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    color: #0c2840;
  }
  /* --------------Product End------------- */


   /* --------------Header divider Start------------- */
   .header-divider{
    margin-top: 50px;
    width: 100%;
    height: 115px;
    background-color: #17294043;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 1s linear;
  }
  .header-divider.dark{
    background: #020f1a;
  }
    /* --------------Header divider End------------- */


  /* --------------Specifications Start------------- */

  .specifications-main-cont{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    width: 100%;
  }
  .specifications-cont{
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    gap: 50px;   
  }

  .specifications-info-cont{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 422px;
  }

  .specifications-img{
    height: 422px;
    border-radius: 20px;
  }

  .more-info-btn{
    width: 100%; 
    border: none;
    color: #fff;
    border-bottom: 1px solid #fff; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    cursor: pointer;
    background-color: transparent;
  }

  .specifications-info-header{
    font-size: 2rem;
    display: flex;
    justify-content: start;
    align-items: start;
    padding-bottom: 15px;
    -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  }

  .specifications-info{
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s ease-out;
  }

  .info-specifications-text{
    line-height: 30px;
    word-spacing: 4px;
  }

  /* --------------Specifications End------------- */

  /* --------------Dimensions Start------------- */

  .dimensions-main-cont{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    width: 100%;
  }
  .dimensions-cont{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 2000px;
  }

  .dimensions-info{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dimensions-info-inner{
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 70%;
  }
  .dimensions-info-text{
    font-size: 2rem;
  }

  .dimensions-img{
    filter: invert(1);
    height: 30vw;
    min-height:400px;
    max-height: 800px;
  }
  .sizeGuid-btn, .print-btn{
    height: 40px;
    width: 100%;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    color: #0c2840;
  }
  .print-btn-mobile{
    display: none;
    height: 40px;
    width: 50%;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    color: #0c2840;
  }

  /* three Guid start */
  .three-guide-cont-background {
    position:fixed;
    top: 0;
    display: none;
    z-index: 10000;
    background-color: rgba(33, 33, 33, 0.8);
    backdrop-filter: blur(4px);
    height: 100%;
    width: 100%;
  }
  .three-guide-cont-background.active{
    display: block;
  }
  .main-cont-three-guide {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    height: 700px;
    width: 50%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .exitDiv {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 40px;
    margin-right: 40px;
  }
  .exitBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    z-index: 10;
    background-color: #efefef;
  }
  .exitBtn:hover {
    scale: 1.05;
    cursor: pointer;
    background-color: #f9f9f9;
  }
  /* three Guid End */
  /* --------------Dimensions End------------- */

  /* --------------Gallery Start------------- */
    .gallery-main-cont{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    width: 100%;
    min-height: 100vh;
    }

    .gallery-cont{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px; /* Adjust the gap as needed */
    width: 80%;
    margin-bottom: 100px;
    max-width:1500px;
    }

    .gallery-img{
      height: 422px;
      border-radius: 20px;
    }  
  

  /* --------------Gallery End------------- */




  @media (max-width: 1333px){
    .price-cont{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }

    span{
      text-align: center;
    }
  }

  @media (max-width: 1024px) {

    .product-cont{
      flex-direction: column;
      align-items: center;    
      text-align: center;
    }

    .info-watch-cont{
      width: 80%;
    }

    .specifications-cont{
      flex-direction: column;
    }
    .dimensions-cont{
      flex-direction: column;
      text-align: center;
      gap: 30px;
    }

    .sizeGuid-btn, .print-btn{
      display: none;
    }
    .print-btn-mobile{
      display: block;
    }
    .dimensions-info-inner{
      width: 80%;
    }

  }

  
  @media (max-width: 767px) {
      h1{
        font-size: 3.1rem;
      }
      h2{
        font-size: 2.8rem;
      }

      .gallery-img{
        height: 350px;
      }
      
  }

  @media (max-width: 480px) {
      h1{
        font-size: 2.6rem;
      }
      h2{
        font-size: 2.4rem;
      }

      h3{
        font-size: 0.7rem;
      }

      .side-menu{
        font-size: 0.9rem;
      }

      .buy-btns{
        width: 90%;
      }

      .specifications-info-cont{
        max-width: 370px;
      }

      .specifications-img{
        height: 370px;
      }

      .info-specifications-text{
        text-align: center;
        font-size: 1.1rem;
      }
      .dimensions-info-text{
        font-size: 1.5rem;
      }
      .dimensions-img{
        min-height: 300px;
      }

    
  }


</style>