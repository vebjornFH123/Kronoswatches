<script>
    import { onMount} from "svelte";
    import backgroundImg from "$lib/img/Background.jpeg"
    import foregroundImg from "$lib/img/Foreground.png"

  /**
   * @type {HTMLElement}
   */
let mainCont; 
let backgroundOffset = 0;
let translateY = 0;

onMount(() => {
    const handleScroll = () => {
        const rect = mainCont.getBoundingClientRect()
        backgroundOffset = rect.top / 10;
        let stopPoint = 450;

        console.log("Window Width: ",window.innerWidth);
        if(window.innerWidth < 400 && window.innerWidth > 380){
            stopPoint = 500
        }else if(window.innerWidth < 380 && window.innerWidth > 360){
            stopPoint = 650
        }else{
            stopPoint = 450
        }
        
        if (rect.top <= 400) {
    // Move header up from the bottom and stop in the center
    translateY = Math.max(stopPoint, rect.bottom - window.innerHeight / 2);
}
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
<div class="header-cont"  style={`transform: translateY(${translateY}px);`}>
    <h1>Elevating time with versatile design,</h1>
    <h3>merging style seamlessly with purposeful precision.</h3>
</div>
<img class="background-img" style={`transform: translateY(${backgroundOffset}px);`} src={backgroundImg} alt="">
<img class="foreground-img"src={foregroundImg} alt="">
</section>


<style>
    a{
        border-bottom: 0.5px solid #fff;
        color:  #fff;
        font-size: 1.1rem;
        font-weight: 350;
    }
    h3{
        font-size: 2rem;
        font-weight: 400;
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
}

section img.foreground-img {
    z-index: 10;
    top: 0px;
    transition: transform 0.3s ease-out; /* Add a transition for smoother animation */
}

.header-cont{
    position: absolute;
    z-index: 1;
    justify-content: center;
    bottom: 1100px;
    gap: 40px;
    text-align: center;
    text-transform: uppercase;
    color:  #fff;
    transition: top 1s ease-out; /* Add a transition for smoother animation */
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
}
</style>