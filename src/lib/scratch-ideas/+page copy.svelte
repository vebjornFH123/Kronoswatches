<script>
  // Import the svelte functions
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

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

  import dial1Img from "$lib/img/dial1.jpeg";

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
  import topDownNoHans from "$lib/img/product-images/Top-Down-No-Hands.jpg";
  import topDownNoHansLume from "$lib/img/product-images/Top-Down-No-Hands-lume.jpg";
  import bracelet from "$lib/img/product-images/Bracelet.jpg";
  import braceletLume from "$lib/img/product-images/Bracelet-lume.jpg";
  import caseImg from "$lib/img/product-images/Case-View.jpg";
  import caseImgLume from "$lib/img/product-images/Case-View-Lume.jpg";


  import hourHandImg from "$lib/img/hourHand.png";
  import minuteHandImg from "$lib/img/hourHand.png";
  import secondHandImg from "$lib/img/secondHand.png";


  import sizeGuidePrint from "$lib/img/Size Guide Print A4.pdf";

  import Cart from "$lib/cart.svelte";
  import { addItemToCart } from "$lib/addToCart";



  const productImages = [topDownImg, leftSideImg, bottomImg, rightSideImg];

  let imageIndex = 0;
  function imageCunt(nextOrPrev) {
    if ((nextOrPrev = "next")) {
      imageIndex = (imageIndex + 1) % productImages.length;
    } else if ((nextOrPrev = "prev")) {
      imageIndex = (imageIndex - 1) % productImages.length;
      if (imageIndex > 0) {
        imageIndex = 3;
      }
    }
  }


  let headerCont;
  let hamburgerMenuBtn;
  let hamburgerMenuClicked= ""; 
  onMount(() => {
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        headerCont.style.top = "-100px";
      } else {
        headerCont.style.top = "0px";
      }
    });

    hamburgerMenuBtn.addEventListener("click", () => {
      if(hamburgerMenuClicked === "clicked"){
        hamburgerMenuClicked = "";
      document.body.style.overflow = "auto";

      }else{
        hamburgerMenuClicked = "clicked";
      document.body.style.overflow = "hidden";
      }
    });

  });

  onMount(() => {
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        headerCont.style.top = "-90px";
      } else {
        headerCont.style.top = "0px";
      }
    });
  });

  let galleryImgs = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
  ];

  let detailInfo = [
    {
      headerInfo: "Kronøs Polaris Dial",
      img: topDownNoHans,
      info: "Behold the mesmerizing beauty of our hand-painted watch dial, a true masterpiece that captures the serene magic of the Aurora Polaris in shades of blue and green. Crafted by skilled artisans, each dial is a unique work of art, showcasing the tranquil colors of the Northern Lights.",
      info1: "As you gaze upon the dial, you'll be transported to the Arctic skies, where soothing shades of deep blues and vibrant greens intertwine and dance across the canvas of the night. The painstaking artistry behind this creation ensures that no two dials are exactly alike, making your watch a one-of-a-kind treasure.",
      info2: "This exquisite timepiece not only tells the time but also tells a story of nature's grandeur and human craftsmanship. With the Aurora Polaris-inspired dial in shades of blue and green, you carry a piece of the polar lights with you, reminding you of the serene beauty that graces our world.",
      info3: "In the realm of watchmaking, this Aurora Polaris-inspired timepiece with its hand-painted dial represents a harmonious blend of art and precision engineering. The intricate brushstrokes and the use of serene blues and vibrant greens pay homage to the beauty of our natural world. It's a testament to our dedication to both aesthetic excellence and functionality, making it a watch that not only adorns your wrist but also stirs your soul with the wonder of the Northern Lights. Wear this watch with pride, knowing it's a testament to the fusion of human ingenuity and the breathtaking beauty of our planet.",
      imagePos: "",
    },
    {
      headerInfo: "Integrated bracelet",
      img: bracelet,
      info: "Introducing the ultimate integrated stainless steel bracelet, a fusion of form and function that's perfect for every occasion. Crafted with precision and care, this bracelet is a seamless part of the watch's design.",
      info1:"The integrated bracelet features a combination of brushed and hand, high-polished steel, creating a striking visual contrast that sets it apart from the ordinary. The brushed finish adds durability and resilience, perfect for the rigors of outdoor activities and sports, while the polished steel exudes sophistication and elegance, making it a natural fit for formal occasions.",
      info2: "This integrated bracelet isn't just an accessory; it's a fundamental component of the watch's versatility. Whether you're hitting the gym, going for a run, attending a business meeting, or dressing up for a special event, this watch effortlessly adapts to your lifestyle. It's built to withstand the toughest challenges and look impeccable doing it.",
      info3: "With its robust stainless steel construction, you can count on this watch to accompany you on your adventures and mark the most significant moments in your life. Versatile, stylish, and built to last, this sport watch with an integrated stainless steel bracelet is the ultimate timepiece for all your diverse endeavors.",
      imagePos: "left",
    },
    {
      headerInfo: "Case",
      img: caseImg,
      info: "Introducing our premium stainless steel watch case, meticulously crafted to elevate your timepiece to new heights of versatility and sophistication. This exceptional case is a harmonious blend of brushed and hand-polished components, ensuring that your watch is ready for all occasions.",
      info1: "The brushed stainless steel lends a rugged charm, perfect for the adventurous spirit within you. It's designed to withstand the challenges of your active lifestyle, whether you're exploring the great outdoors or simply on the go.",
      info2: "In contrast, the high-polished parts exude elegance and refinement, making your watch a stylish companion for formal events, business meetings, or special occasions. Its mirror-like finish reflects your impeccable taste and attention to detail.",
      info3: "This watch case is a testament to the seamless fusion of style and substance. Designed for the modern individual who values versatility, it effortlessly adapts to any setting. From casual to formal, from leisure to business, your timepiece will be the perfect accessory, reflecting your unique sense of style.",
      imagePos: "",
    },
  ];

  let productImg;
  let lumedial;

  let darkLight = "";
  let activeDay = "",
    imgDay = dayIcon;
  let activeNight = "",
    imgNight = nightIcon;

  onMount(() => {
    window.dayNight = function (clicked) {
      if (clicked === "day") {
        darkLight = "";
        activeNight = "";
        imgNight = nightIcon;
        activeDay = "active";
        productImg.style.filter = "brightness(1)";
        lumedial.style.opacity = "0";
        imgDay = dayIcon.slice(0, dayIcon.length - 4) + `-black.svg`;
        galleryImgs = [
          galleryImg1,
          galleryImg2,
          galleryImg3,
          galleryImg4,
          galleryImg5,
        ];
        detailInfo.forEach((detail, i) => {
          if (i === 0) {
            detail.img = topDownNoHans;
          } else if (i === 1) {
            detail.img = bracelet;
          } else if (i === 2) {
            detail.img = caseImg;
          }
        });
        detailInfo = detailInfo;
      } else if (clicked === "night") {
        darkLight = "active";
        activeDay = "";
        imgDay = dayIcon;
        activeNight = "active";
        productImg.style.filter = "brightness(0.4)";
        lumedial.style.opacity = "1";
        imgNight = nightIcon.slice(0, nightIcon.length - 4) + `-black.svg`;
        galleryImgs = [
          galleryImg1Lume,
          galleryImg2Lume,
          galleryImg3Lume,
          galleryImg4Lume,
          galleryImg5Lume,
        ];
        detailInfo.forEach((detail, i) => {
          if (i === 0) {
            detail.img = topDownNoHansLume;
          } else if (i === 1) {
            detail.img = braceletLume;
          } else if (i === 2) {
            detail.img = caseImgLume;
          }
        });
        detailInfo = detailInfo;
      }
    };

    dayNight("day");
  });

  let productBtn;
  let product;
  let galleryBtn;
  let gallery;
  let detailsBtn;
  let details;
  let specificationsBtn;
  let specifications;
  let dimensionsBtn;
  let dimensions;
  let galleryImages;

  let extraDayNightBtn;

  onMount(() => {
    window.addEventListener("scroll", () => {
      const rect = gallery.getBoundingClientRect();
      if (rect.top < 0) {
        console.log(rect.top / 5);
        galleryImages.style.transform = `translateX(${rect.top / 10}%)`;
      }
    });

    let galleryRect = gallery.getBoundingClientRect();
    window.addEventListener("scroll", () => {
      galleryRect = gallery.getBoundingClientRect();
      let detailsRect = details.getBoundingClientRect();
      let specificationsRect = specifications.getBoundingClientRect();
      let dimensionsRect = dimensions.getBoundingClientRect();
      if (galleryRect.top <= 0) {
        productBtn.style.color = "#ffffff73";
        galleryBtn.style.color = "#fff";
        extraDayNightBtn.style.opacity = "1";
      } else {
        productBtn.style.color = "#fff";
        galleryBtn.style.color = "#ffffff73";
        extraDayNightBtn.style.opacity = "0";
      }

      if (detailsRect.top <= 0) {
        galleryBtn.style.color = "#ffffff73";
        detailsBtn.style.color = "#fff";
      } else {
        detailsBtn.style.color = "#ffffff73";
      }

      if (specificationsRect.top <= 0) {
        detailsBtn.style.color = "#ffffff73";
        specificationsBtn.style.color = "#fff";
      } else {
        specificationsBtn.style.color = "#ffffff73";
      }
      if (dimensionsRect.top <= 0) {
        specificationsBtn.style.color = "#ffffff73";
        dimensionsBtn.style.color = "#fff";
      } else {
        dimensionsBtn.style.color = "#ffffff73";
      }
    });

    function displayDayNightBtn() {
      if (galleryRect.top <= 0) {
        extraDayNightBtn.style.opacity = "1";
      } else {
        extraDayNightBtn.style.opacity = "0";
      }
    }

    displayDayNightBtn();
  });



  let hourHand;
  let minuteHand;
  let secondHand;
  onMount(() => {
    function getCurrentTime() {
      let date = new Date();
      let currentHours = date.getHours();
      let currentMinutes = date.getMinutes();
      let currentSeconds = date.getSeconds();
      hourHand.style.transform = `rotate(${
        currentHours * 30 + currentMinutes / 2 + 180
      }deg) translate(0%, 0%)`;
      hourHand.style.transformOrigin = "0% 0%";

      secondHand.style.transform = `rotate(${
        currentSeconds * 6
      }deg) translate(0%, 0%)`;
      secondHand.style.transformOrigin = "0% 0%";

        minuteHand.style.transform = `rotate(${
          currentMinutes * 6 + 180
        }deg) translate(0%, 0%)`;
        minuteHand.style.transformOrigin = "0% 0%";
    }
    getCurrentTime();

    setInterval(getCurrentTime, 1000);
  });





  

  let prevuesEvent = null;

  function scrollIntoView(event) {
    productBtn.style.color = "#ffffff73";

    if (prevuesEvent) {
      prevuesEvent.style.color = "#ffffff73";
    }
    prevuesEvent = event.currentTarget;

    event.currentTarget.style.color = "#fff";

    if (event.currentTarget.id === "product-btn") {
      product.scrollIntoView({
        behavior: "smooth",
      });
      headerCont.style.top = "0";
    } else if (event.currentTarget.id === "gallery-btn") {
      gallery.scrollIntoView({
        behavior: "smooth",
      });
      headerCont.style.top = "-90px";
    } else if (event.currentTarget.id === "details-btn") {
      details.scrollIntoView({
        behavior: "smooth",
      });
      headerCont.style.top = "-90px";
    } else if (event.currentTarget.id === "specifications-btn") {
      specifications.scrollIntoView({
        behavior: "smooth",
      });
      headerCont.style.top = "-90px";
    } else if (event.currentTarget.id === "dimensions-btn") {
      dimensions.scrollIntoView({
        behavior: "smooth",
      });
      headerCont.style.top = "-90px";
    }
  }

  let threeGuideCont;
  let threeSizeGuid;
  onMount(() => {
    window.displayThreeCont = (openClose) => {
      if (openClose === "open") threeGuideCont.style.display = "block";
      if (openClose === "close") threeGuideCont.style.display = "none";
      threeSizeGuid.lodeCanvas(openClose);
    };

    window.addEventListener("resize", () => {
      threeSizeGuid.lodeCanvas("open");
    });
  });
</script>

<header class="header-main-cont" bind:this={headerCont}>
  <div class="hamburger-menu-btn" bind:this={hamburgerMenuBtn}>
    <div class="bar1 {hamburgerMenuClicked}"></div>
    <div class="bar2 {hamburgerMenuClicked}"></div>
    <div class="bar3 {hamburgerMenuClicked}"></div>
  </div>
  <div class="logo">
    <Logo />
  </div>
  <div class="header-inner-cont">
    <a href="/products">WATCHES</a>
    <a href="">ASSISTANCE</a>
    <Logo />
    <a href="/about">ABOUT US</a>
    <Cart/>
  </div>
  <div class="hamburger-menu-cont {hamburgerMenuClicked}">
  </div>

  <div class="side-menu">
    <div class="side-menu-hader-cont">
      <h3
        class="product-btn"
        id="product-btn"
        style="color: #fff;"
        bind:this={productBtn}
        on:mousedown={(event) => scrollIntoView(event)}
      >
        PRODUCT
      </h3>
      <h3
        class="gallery-btn"
        id="gallery-btn"
        bind:this={galleryBtn}
        on:mousedown={(event) => scrollIntoView(event)}
      >
        GALLERY
      </h3>
      <h3
        class="details-btn"
        id="details-btn"
        bind:this={detailsBtn}
        on:mousedown={(event) => scrollIntoView(event)}
      >
        DETAILS
      </h3>
      <h3
        class="specifications-btn"
        id="specifications-btn"
        bind:this={specificationsBtn}
        on:mousedown={(event) => scrollIntoView(event)}
      >
        SPECIFICATIONS
      </h3>
      <h3
        class="dimensions-btn"
        id="dimensions-btn"
        bind:this={dimensionsBtn}
        on:mousedown={(event) => scrollIntoView(event)}
      >
        DIMENSIONS
      </h3>
    </div>
  </div>
</header>


<body class="body {darkLight}">
  <div class="main-cont" bind:this={product}>
    <div class="main-product-cont">
      <div class="product-cont">
        <div class="img-cont">
          <img
            style="position: absolute; height: 40vw; z-index: 10; opacity: 0; transition: opacity 1.5s;"
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
              on:mousedown={() => imageCunt("prev")}
            >
              <img src={rightArrow} alt="" />
            </button>
            <div class="dayNightBtn">
              <div
                class="day-cont {activeDay}"
                on:mousedown={() => dayNight("day")}
              >
                <img class="day-img" src={imgDay} alt="" />
              </div>
              <div
                class="night-cont {activeNight}"
                on:mousedown={() => dayNight("night")}
              >
                <img class="night-img" src={imgNight} alt="" />
              </div>
            </div>
            <button
              class="btn-img-controls"
              on:mousedown={() => imageCunt("next")}
            >
              <img src={leftArrow} alt="" />
            </button>
          </div>
        </div>
        <div class="info-watch-cont">
          <div class="header-watch-info">
            <h1>KRONØS POLARIS</h1>
            <h4 style="font-style: italic;">SUB SECOND SPORTS WATCH</h4>
          </div>
          <p style="border-bottom: solid 1px; padding-bottom: 20px; font-size: 1rem; letter-spacing: 2px;">
            Stainless steel case with integrated stainless steel bracelet. Paired with a spectacular hand painted aurora polaris dial, high-polished hands, and sapphire glass.
            <br>
            <br>
            Introducing the versatile kronøs Polaris, a timepiece for all occasions. a watch that seamlessly adapts to your lifestyle, wherever you go and whatever you do.
          </p>
          <p style="border-bottom: solid 1px; padding-bottom: 20px; font-size: 1rem; letter-spacing: 2px;">
            <span style="font-weight: 400; font-size: 1rem; letter-spacing: 2px;" >5-YEAR WARRANTY</span>
            <br>
            All kronøs watches are delivered with a 5-year warranty that covers the repair of any material or manufacturing defects. Please refer to the customer service for specific information about the warranty conditions and restrictions.
          </p>
          <div style="display: flex; flex-direction: row; align-items: end; justify-content: start;">
            <div style="display: flex; flex-direction: column; width: 100%;">
              <span style="letter-spacing: 2px; font-size: 1rems; font-weight: 400;">€ 1490</span>
              <span style="letter-spacing: 2px; font-weight: 100;">RETAIL PRICE (INCL. VAT)</span>
            </div>
            <div class="buy-btns">
            <button class="buy-btn">Buy Now</button>
            <button
              class="buy-btn"
              on:click={() => {
                headerCont.style.top = "0px";
                setTimeout(() => {
                  addItemToCart();
                }, 350);
              }}>Add to cart</button
            >
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="gallery-cont" bind:this={gallery}>
      <div class="gallery-img-cont">
        <div class="gallery-images" bind:this={galleryImages}>
          {#each galleryImgs as img}
            <img class="img-gallery" src={img} alt="" />
          {/each}
        </div>
      </div>
    </div>
    <div class="details-cont" bind:this={details}>
      {#each detailInfo as detail}
        <div class="details {detail.imagePos}">
          <div
            style="width: 50%; height: 100vh; overflow: hidden; display: flex; justify-content: center; position: relative;"
          >
            {#if detail.headerInfo === "Kronøs Polaris Dial"}
            <img class="hourHand-img" src={hourHandImg} alt="" bind:this={hourHand}>
            <img class="minuteHand-img" src={minuteHandImg} alt="" bind:this={minuteHand}>
            <img class="secondHand-img" src={secondHandImg} alt="" bind:this={secondHand}>
          {/if}
            <img style="object-fit:cover;" src={detail.img} alt="" />
          </div>
          <div class="details-info">
            <h2>{detail.headerInfo}</h2>
            <p style="width: 80%;">{detail.info}<br><br>{detail.info1}<br><br>{detail.info2}<br><br>{detail.info3}</p>
          </div>
        </div>
      {/each}
    </div>
    <div class="specifications-cont" bind:this={specifications} />
    <div class="three-guide-cont-background" bind:this={threeGuideCont}>
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
    <div class="dimensions-cont" bind:this={dimensions}>
      <div class="dimensions-info-cont">
        <div
          style="margin-left: 70px; display: flex; flex-direction: column; gap: 30px;"
        >
          <div>
            <h1>Product dimensions</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non velit nec arcu viverra hendrerit.
            </p>
          </div>
          <div>
            <h2>Size Guide</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div style="display: flex; flex-direction: row; gap: 40px;">
              <a href={sizeGuidePrint}  target="_blank">Print out size guide</a>
                            
              <button
                on:mousedown={() => {
                  displayThreeCont("open");
                }}>3D Guide</button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="dimensions-image-cont">
        <img
          style="height: 800px; filter: invert(1);"
          src={dimensionsImg}
          alt=""
        />
      </div>
    </div>
  </div>

  <div
    class="dayNightBtn"
    style="position: fixed; bottom: 30px; left: 30px; opacity: 0; transition: opacity .5s; z-index: 10;"
    bind:this={extraDayNightBtn}
  >
    <div class="day-cont {activeDay}" on:mousedown={() => dayNight("day")}>
      <img class="day-img" src={imgDay} alt="" />
    </div>
    <div
      class="night-cont {activeNight}"
      on:mousedown={() => dayNight("night")}
    >
      <img class="night-img" src={imgNight} alt="" />
    </div>
  </div>
</body>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;400;500;700&display=swap');
  html {
    background: #123d62;
  }
  .body {
    padding: none;
    overflow-x: hidden;
    margin: none;
    margin: 0;
    padding: 0;
    background: linear-gradient(
        50.22deg,
        rgba(18, 39, 47, 0.5) 60.86%,
        rgba(0, 0, 0, 0.277) 100%
      ),
      radial-gradient(
        50.75% 15.73% at 50.29% 15.27%,
        rgba(59, 88, 129, 0.7) 0%,
        rgba(13, 26, 46, 0) 100%
      ),
      linear-gradient(180deg, #0c1e2d 64.06%, #0c2840 100%);
    transition: background 1s linear;
  }

  .body.active {
    background: rgba(0, 0, 0, 0.85);
  }
  a {
    color: #fff;
    font-weight: 100;
    font-size: 15px;
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
  .main-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: #fff;
  }

  .main-product-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .product-cont {
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
  .info-watch-cont {
    width: 40vw;
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
    bottom: 50px;
  }

  .btn-img-controls {
    border: none;
    background-color: transparent;
  }

  .img-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 35vw;
  }

  .product-img {
    height: 40vw;
    transition: filter 1.5s;
  }
  .dayNightBtn {
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

  .gallery-cont {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 50px;
  }
  .gallery-img-cont {
    overflow-x: hidden;
  }

  .gallery-images {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .img-gallery {
    height: 500px;
  }

  .details-cont {
    padding-top: 150px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .details {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  } 

  .details.left {
    flex-direction: row-reverse;
  }

  .details-info {
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .hourHand-img {
    position: absolute;
    top: 49.6%; /* Example value */
    left: 50%; /* Example value */
    height: 180px;
    z-index: 5;
    filter: brightness(0.75);
  }

  .minuteHand-img {
    position: absolute;
    top: 48%; /* Example value */
    left: 48.6%; /* Example value */
    height: 220px;
    z-index: 10;
    filter: brightness(0.75);
  }

  .secondHand-img {
    position: absolute;
    top: 64.2%; /* Example value */
    left: 49.9%; /* Example value */
    height: 50px;
  }
  


  .dimensions-cont {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 5%;
    align-items: center;
    justify-content: start;
  }
  .dimensions-info-cont {
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 50%;
  }
  .dimensions-image-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
  }

  .header-main-cont {
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    height: 90px;
    background: #112033;
    transition: all 0.5s;
    color: #fff;
    font-family: "Proxima Nova", sans-serif;
    font-weight: 100;
    font-size: 15px;
    display: flex;
    justify-content: center;
  }

  .header-inner-cont{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  } 
.hamburger-menu-btn{
  position: absolute;
  top: 33px;
  right: 20px;
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
  top: 90px; /* Adjust the top position as needed */
  z-index: 100;
  height: 0;
  width: 100%; /* Cover the entire width of the viewport */
  background-color: #112033;
  overflow: hidden; /* Hide content that goes beyond the height */
  transition: height 0.5s; /* Add a smooth transition effect */
}

.hamburger-menu-cont.clicked {
  height: 100vh;
}

@media screen and (max-width: 768px) {

}

  /* Styles for tablets */
  @media screen and (max-width: 1024px) {

  .header-inner-cont {
    display: none;
  }

  .hamburger-menu-btn{
    display: block;
  }


  .logo{
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
    width: 40%;
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
  }

  .side-menu-hader-cont {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }

  .product-btn:hover,
  .gallery-btn:hover,
  .details-btn,
  .size-btn,
  .specifications-btn {
    transition: all 0.5s;
  }

  .product-btn:hover,
  .gallery-btn:hover,
  .details-btn:hover,
  .size-btn:hover,
  .specifications-btn:hover {
    color: #fff;
    cursor: pointer;
  }

  .three-guide-cont-background {
    display: none;
    position: fixed;
    z-index: 10000;
    background-color: rgba(33, 33, 33, 0.8);
    backdrop-filter: blur(4px);
    height: 100%;
    width: 100%;
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
</style>