<script>
  import { onMount } from "svelte";
  const totalImages = 201; // Assuming you have 12 images to load
  let loadedImages = 0; // Counter for loaded images  
  let panUpVideo = "/panUp-bilder/0000.png";


     /**
     * @param {number} index
     */
     const currentFrame = (index) =>
   panUpVideo.slice(0, 14) + `${index.toString().padStart(4, "0")}.png`;
  /**
   * @type {{ src: string; }[]}
   */
  let  images = [];

  function testNewPreLoad() {
  return new Promise((resolve) => {
    images = [];

    // Create Image objects for each URL and set the onload event
    for (let i = 0; i < totalImages; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedImages++;
        console.log(`Image ${loadedImages} loaded.`);
        if (loadedImages === totalImages) {
          // All images are loaded, resolve the promise
          console.log("All images are loaded and ready for use.");
          // @ts-ignore
          resolve();
        }
      };
      images.push(img);
    }
  });
}













   /**
   * @type {HTMLDivElement} // Main cont;
   */
  let cont;


  /**
   * @type {HTMLCanvasElement} // the canvas element; 
   */
  let canvas;


  onMount(() => {
    const html = document.documentElement;
    const context = canvas.getContext("2d");
    const FRAME_COUNT = 200;


    testNewPreLoad().then(() => {

    window.addEventListener("resize", () => {
      resizeCanvas();
    });
    let imageHeight = 700;
    let imageWidth =  700;
    const img = new Image();
    img.src = images[0].src;
    console.log(img);
    function resizeCanvas() {
      console.log(window.innerWidth)
      canvas.width = cont.clientWidth;
      canvas.height = cont.clientHeight;
      if (window.innerWidth <= 480) {
    imageHeight = 600;
    imageWidth = 600;
  } else if (window.innerWidth <= 767) {
    imageHeight = 650;
    imageWidth = 650;
    console.log("767", imageHeight);
  } else if (window.innerWidth <= 1023) {
    imageHeight = 700;
    imageWidth = 700;
    console.log(imageHeight);
  } else {
    imageHeight = 700;
    imageWidth = 700;
  }

  
      // @ts-ignore
      context.drawImage(
        img,
        canvas.width / 2 - imageWidth / 2,
        canvas.height / 2 - imageHeight / 2,
        imageWidth,
        imageHeight
      );
    }
    resizeCanvas();

    /**
     * @param {number} index
     */
    const updateImage = (index) => {
      if(index > 200){
        index = 0;
      }
      img.src = images[index].src;
      
      // @ts-ignore
      context.drawImage(
        img,
        canvas.width / 2 - imageWidth / 2,
        canvas.height / 2 - imageHeight / 2,
        imageWidth,
        imageHeight
      );
    };
    
window.addEventListener("scroll", () => {
  let frameIndex = 0;
  const threshold = 0; // Adjust this value to set the scroll threshold
  const handleIntersection = (/** @type {any[]} */ entries) => {
    let topPosition = 0;
      entries.forEach(entry => {
        topPosition = entry.boundingClientRect.top;
        const scrollFraction = Math.max(0, Math.min(1, 1 - (topPosition - threshold) / (window.innerHeight - threshold)));
        console.log(scrollFraction);
        frameIndex += Math.min(
        FRAME_COUNT - 1,
        Math.ceil(scrollFraction * FRAME_COUNT));
      });
      if(frameIndex > 0 && topPosition > 0){
        // @ts-ignore
        context.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(() => updateImage(frameIndex));
      }
    };

    const observer = new IntersectionObserver(handleIntersection);
    if(canvas){
    observer.observe(canvas);
    }


    return () => {
      // Cleanup the observer when the component is unmounted
      observer.disconnect();
    };
  
});

    });
  });
</script>

<div class="canvas-cont" bind:this={cont}>
  <canvas bind:this={canvas} />
</div>

<style>
  /* Apply these styles to the container */
  .canvas-cont {
    width: 100%;
    height: 60vh;
    overflow-x: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: brightness(1.2) saturate(1.1);
  }
</style>
