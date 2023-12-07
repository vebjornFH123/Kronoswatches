<script>
    import imgDivider from "$lib/img/imgGallery/galleryImg2.jpg"
    import ingAboutKronos from "$lib/img/imgGallery/about-img-k.jpg"
    import sImg from "$lib/img/Sindre-Web.jpg"
    import vImg from "$lib/img/Vebjørn-Web.jpg"
    import ParallaxScrollingImg from "$lib/parallaxScrollingImgAboutPage.svelte";
</script>


<body>
  <div class="main-cont">
  <section class="about-header-cont">
    <ParallaxScrollingImg />
  </section>
  <section class="about-founders">
    <div class="s-cont">
      <div class="img-s-cont">
        <img style="height: 400px; border-radius: 30px; object-fit: contain; max-width: max-content;" src={sImg} alt="">
        <div class="s-info">
          <h3>SINDRE WANG TVEIT</h3>
          <h4 style="font-style: italic;">FOUNDER AND CEO</h4>
          <p style="margin-top: 10px;">Sindre is the creative mind behind the design of kronøs. A watch
            enthusiast by heart, but a designer by mind he has created the polaris
            watch. With a passion for designing products the polaris was created
            with the thought that the watch could be used for all purposes.
             </p>
        </div>
      </div>
      <div class="founder-info-cont">
        <h2 class="info-f-header">THE FOUNDER</h2>
        <p class="info-f-p">Founded by two aspiring students hailing from the
          enchanting landscapes of Norway, our journey began 
          with an unwavering passion for the art of watchmaking. 
          In the tranquil fjords and amidst the mystic aura of 
          the Arctic, we found our inspiration, a constant reminder of the beauty that nature weaves into time itself</p>
      </div>
    </div>
    <div class="v-cont">
      <div class="img-v-cont">
        <img  style="height: 400px; border-radius: 30px; object-fit: contain; max-width: max-content;" src={vImg} alt="">
        <div class="v-info">
          <h3>VEBØRN FUHRE HAUGHOLT</h3>
          <h4 style="font-style: italic;">FOUNDER AND CEO</h4>
          <p style="margin-top: 10px;">Vebjørn is the skilled production operator and developer behind the creation of Kronøs. A dedicated watch enthusiast at heart, his mind is geared toward the intricacies of production. Vebjørn has crafted the Polaris watch with a unique perspective, emphasizing its versatility for all purposes. With a passion for developing exceptional products, the Polaris stands as a testament to Vebjørn's commitment to quality and functionality.</p>
        </div>
      </div>
      <div class="ourStory-info-cont">
        <h2 class="info-o-header">OUR STORY</h2>
        <p class="info-o-p">In Norway, we, two passionate students, transformed our shared love for watches and the northern lights into a distinctive brand. Drawing inspiration from the vibrant hues of the aurora borealis, our watches weave a narrative that reflects our deep connection with timepieces and the celestial beauty of our homeland.</p>
      </div>
    </div>
  </section>
  <section class="image-divider">
    <img style="width: 100%;" src={imgDivider} alt="">
  </section>
  <section class="about-kronos">
  <img class="img-k" src={ingAboutKronos} alt="">
  <div class="about-k-info">
    <h2 class="about-k-header">kronøs watches</h2>
    <p>In every Kronøs watch, you'll discover a fusion of elegance and 
      innovation.  We are committed to using only the finest materials 
      and techniques, ensuring that our timepieces are not just instruments 
      to mark time but expressions of timeless artistry. Our passion for 
      the Aurora Polaris  and our devotion to the craft of watchmaking are 
      evident in every detail, making Kronøs more than just a brand —
      it's a gateway to the celestial wonders of the North.
      <br>
      <br>
      <br>
      Join us on this celestial journey and explore our collection, 
      where passion and precision converge to create watches that tell a
      unique and enchanting story. Kronøs is more than a timepiece; 
      it's a connection to the Arctic's magic, a reminder of nature's 
      own craftsmanship that dances across the night sky. 
      </p>
  </div>
  </section>
</div>
</body>
  
  
  <style>
  
    body{
      padding: none;
      overflow-x: clip;
      margin: 0; 
      padding: 0;
      overscroll-behavior-x: none;
    }
    h2{
      font-size: 1.7rem;
      font-weight: 50;
      color: #fff;
    }
    h3{
      font-size: 1.3rem;
      font-weight: 50;
      color: #fff;
    }

    h4{
      font-size: 0.8rem;
      font-weight: 50;
      color: #fff;
    }
    p{
      color: #fff;
      font-weight: 200;
    }
  
    .main-cont{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 100px;
    }
    
    .about-header-cont{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    }

    .about-founders{
      min-height: 100vh;
      width: 90%;
      max-width: 1300px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 100px;
      position: relative;
    }

    .s-cont, .v-cont{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: start;
      gap: 10%;
      position: relative;
    }


    .v-cont{
      flex-direction: row-reverse;
    }

    .founder-info-cont, .ourStory-info-cont{
      display: flex;
      width: 100%;
      flex-direction: column;
    }

    .img-s-cont, .img-v-cont{
      position: relative; 
      display: flex; 
      flex-direction: column; 
      width: max-content;
    }

    .s-info,.v-info{
      position: absolute;
      z-index: 1;
      background-color: #112b41;
      width: 600px;
      height: fit-content;
      border-radius: 30px;
      padding: 20px;
    }

    .s-info{
      bottom: -70px;
      margin-left: 40%;
    }

    .v-info{
      bottom:-70px;
      margin-left: -140%;
    }

    .info-f-header, .info-o-header{
      border-bottom: 0.5px solid;
      width: 100%; display: flex;
      padding-bottom: 5px; 
      margin-bottom: 10px;
    }

    .info-f-header{
      justify-content: end;
    }

    .info-o-p, .info-f-p{
      font-size: 1.3rem;
      word-spacing: 4px;
      line-height: 30px;
    }

    .info-f-p{
      text-align: end;
    }

  .image-divider{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 100%;
    overflow: hidden; 
    object-fit: contain;
  }


  .about-kronos{
    width: 90%;
    max-width: 1100px;
    min-height:80vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 200px;
    margin-bottom: 100px;
    
  }

  .about-k-info{
    display: flex;
    flex-direction: column;
    text-align: end;
    width: 100%;
    max-width: 500px;
    font-size: 1.3rem;
    word-spacing: 4px;
    line-height: 30px;
  }
  
  .about-k-header{
    border-bottom: 0.5px solid;
    width: 100%; display: flex;
    padding-bottom: 5px; 
    margin-bottom: 15px;
    text-transform: uppercase;
    display: flex;
    justify-content: end;  
  }
  .img-k{
    height: 100%;
    border-radius: 40px;
  }
  /* Styles for tablets */
  @media (max-width: 1024px) {
    .s-cont{
      flex-direction: column-reverse;
      align-items: center;
    }

    .v-cont{
      flex-direction: column;
      align-items: center;
    }
    .founder-info-cont, .ourStory-info-cont{
      align-items: center;
      margin-bottom: 100px;
    }

    .ourStory-info-cont{
      margin-top: 100px;
    }

    .info-f-header, .info-o-header{
      justify-content: center;
      width: 50%;
    }
    .info-f-p, .info-o-p{
      text-align: center;
      width: 80%;
    }
    .s-info, .v-info{
      position: relative;
      top: 0;
      margin: auto;
      margin-top: 30px;
      background: none;
      text-align: center;
      max-width: 80%;
    }

    .img-s-cont, .img-v-cont{
      align-items: center;
    }

    .img-k{
      display: none;
    }

    .about-kronos{
      justify-content: center;
      min-height: 60vh;
    }
    .about-k-info{
    text-align: center;
    }

    .about-k-header{
      justify-content: center;
    }
  }


  
  @media (max-width: 768px) {

    .main-cont{
      gap: 30px;
    }
    .info-f-p{
      width: 90%;
      font-size: 1.3rem;
    }
    h2{
      font-size: 1.5rem;
    }
    }

    @media (max-width: 480px) {
      .info-f-p{
      width: 90%;
      font-size: 1.1rem;
    }
    .info-o-p{
      width: 90%;
      font-size: 1.1rem;
    }

    .s-info, .v-info{
      width: 380px;
      font-size: 0.9rem;

    }
    .about-header-cont{
      min-height: 100vh;
    }
    }

  </style>
  
  