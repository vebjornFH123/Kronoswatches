<script>
    import { onMount} from "svelte";
    import backgroundImg from "$lib/img/Background.jpeg"
    import foregroundImg from "$lib/img/Foreground.png"


  /**
   * @type {HTMLElement}
   */
let mainCont; 
let backgroundOffset = 0;
onMount(() => {
    const handleScroll = () => {
        const rect = mainCont.getBoundingClientRect()
        if(rect.top <= 0){
        backgroundOffset = rect.top / 10;
        }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
});
</script>

<section bind:this={mainCont}>
    <div class="header-cont">
        <h1>ABOUT <span style="font-weight:bold;">KRONØS</span> WATCHES</h1>
        <h3>WHERE PASSION MEETS PRECISION</h3>
        <h3>UNDER THE SHIMMERING NORTHERN LIGHTS</h3>
      </div>
<img class="background-img" style={`transform: translateY(${backgroundOffset}px);`} src={backgroundImg} alt="">
<img class="foreground-img"src={foregroundImg} alt="">
</section>


<style>

    h1{
        font-size: 2rem;
        font-weight:inherit;
    }

    h3{
        font-size: 2rem;
        font-weight: 300;
    }
section {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden; /* Hide overflow to prevent scrollbars */
    display: flex;
    justify-content: center;
    align-items: center;
}
section img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio and cover container */

}

section img.background-img {
    transition: transform 0.3s ease-out; /* Add a transition for smoother animation */
    top: 90px;
}

section img.foreground-img {
    z-index: 10;
    top: 150px;
    transition: transform 0.3s ease-out; /* Add a transition for smoother animation */
}

.header-cont{
    position: absolute; 
    left: 50px;
    z-index: 1;
    justify-content: start; 
    gap: 40px;
    text-align: start;
    text-transform: uppercase;
    color:  #fff;
    transition: top 1s ease-out; /* Add a transition for smoother animation */
}

@media (max-width: 1900px) {
    h1{
        font-size: 1.8rem;
        font-weight:inherit;
    }

    h3{
        font-size: 1.8rem;
        font-weight: 300;
    } 
}


@media (max-width: 1700px) {
    h1{
        font-size: 1.6rem;
        font-weight:inherit;
    }

    h3{
        font-size: 1.6rem;
        font-weight: 300;
    } 
  }


  @media (max-width: 1500px) {
    h1{
        font-size: 1.2rem;
        font-weight:inherit;
    }

    h3{
        font-size: 1.2rem;
        font-weight: 300;
    } 
  }

@media (max-width: 1024px) {
    h1{
        font-size: 1.4rem;
        font-weight:inherit;
    }

    h3{
        font-size: 1.4rem;
        font-weight: 300;
    } 

    .header-cont{
        z-index: 100;
        position: relative;
        text-align: center;
        margin-bottom: 200px;
        left: 0px
    }
  }

  @media (max-width: 480px) {
    h1{
        font-size: 1.2rem;
        font-weight:inherit;
    }

    h3{
        font-size: 1.2rem;
        font-weight: 300;
    } 


section img.background-img {
    transition: transform 0.3s ease-out; /* Add a transition for smoother animation */
    top: 70px;
}
section img.foreground-img {
    transition: transform 0.3s ease-out; /* Add a transition for smoother animation */
    top: 70px;
}
}


</style>