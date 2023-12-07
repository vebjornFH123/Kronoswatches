<script>
  import { onMount } from "svelte";

  const totalImages = 201; // Assuming you have 12 images to load
  let loadedImages = 0; // Counter for loaded images  
  let testVideo = "/360-bilder/0000.png";


     /**
     * @param {number} index
     */
  const currentFrame = (index) => testVideo.slice(0, 12) + `${index.toString().padStart(4, "0")}.png`;

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
   * @type {HTMLDivElement}
   */
  let cont; 
  /**
   * @type {HTMLCanvasElement}
   */
  let canvas;
  onMount(() => {
    const context = canvas.getContext("2d");

    const FRAME_COUNT = 200;


    testNewPreLoad().then(() => {
     
    window.addEventListener("resize", () => {
      resizeCanvas();
    });
    
    let imageHeight = 1100;
    let imageWidth =  1100;
    const img = new Image();
    img.src = images[0].src;
    function resizeCanvas() {
      canvas.width = cont.clientWidth;
      canvas.height = cont.clientHeight;
      if (window.innerWidth <= 480) {
      imageHeight = 900;
      imageWidth = 900;
  } else if (window.innerWidth <= 767) {
    imageHeight = 1000;
    imageWidth = 1000;
    console.log("767", imageHeight);
  } else if (window.innerWidth <= 1023) {
    imageHeight = 1000;
    imageWidth = 1000;
    console.log(imageHeight);
  } else {
    imageHeight = 1100;
    imageWidth = 1100;
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
      console.log("fuck", index)
      img.src = images[index].src;
      console.log();
      // @ts-ignore
      context.drawImage(
        img,
        canvas.width / 2 - imageWidth / 2,
        canvas.height / 2 - imageHeight / 2,
        imageWidth,
        imageHeight
      );
    };

let count = 0;
let scrolling;
const SCROLL_SPEED = 2;
const SWIPE_THRESHOLD = 50; // Minimum distance for a swipe to be registered

// Function to handle the scroll event
/**
 * @param {{ deltaY: number; deltaX: number; }} event
 */
function handleScroll(event) {
  if (event.deltaY > 0 || event.deltaY < 0) {
    scrolling = true;
  } else {
    if (event.deltaX < 0) {
      // Scrolling to the left
      count += SCROLL_SPEED;
      if (count >= FRAME_COUNT) {
        count -= FRAME_COUNT;
      }
      scrolling = false;
      // @ts-ignore
      context.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(() => updateImage(Math.round(count)));

    } else if (event.deltaX > 0) {
      // Scrolling to the right
      count -= SCROLL_SPEED;
      if (count < 0) {
        count += FRAME_COUNT;
      }
      scrolling = false;
      // @ts-ignore
      context.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(() => updateImage(Math.round(count)));

    }
  }
}

// Add event listeners for wheel and touch events
cont.addEventListener("wheel", handleScroll);

  let initialTouchX = 0;
  let touchXDelta = 0;
  let swipeDirection = "";
  let oldValue = 0;

  cont.addEventListener('touchstart', function (event) {
    // Store the initial touch position
    initialTouchX = event.touches[0].clientX;
  });

  cont.addEventListener('touchmove', function (event) {


    // Get the current touch position
    const currentTouchX = event.touches[0].clientX;

    // Calculate the difference between current and initial touch position
    touchXDelta = ((currentTouchX - initialTouchX)/2);
    
   touchXDelta += oldValue;


    if(touchXDelta > 0){
      swipeDirection = "right";
    }else{
      swipeDirection = "left";
    }

    if(touchXDelta > 200){
      touchXDelta = (touchXDelta - 200);
    }else if(touchXDelta < 0){
      if(touchXDelta){
        touchXDelta = (touchXDelta + 200);
      }
      
    }

    // @ts-ignore
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(() => updateImage(Math.round(touchXDelta)));
  });

  cont.addEventListener("touchend", (e)=>{
  oldValue = touchXDelta;
})


let initialMouseX = 0;
let mouseXDelta = 0;
let mousedown = false;

cont.addEventListener('mousedown', function (event) {
  // Store the initial mouse position
  initialMouseX = event.clientX;
  mousedown = true;
});

cont.addEventListener('mousemove', function (event) {

  if(mousedown){
    event.preventDefault()
  // Get the current mouse position
  const currentMouseX = event.clientX;

  // Calculate the difference between current and initial mouse position
  mouseXDelta = (currentMouseX - initialMouseX) / 2;

  mouseXDelta += oldValue; 

  if (mouseXDelta > 0) {
    swipeDirection = "right";
  } else {
    swipeDirection = "left";
  }

  if (mouseXDelta > 200) {
    mouseXDelta = (mouseXDelta - 200);
  } else if (mouseXDelta < 0) {
    if (mouseXDelta) {
      mouseXDelta = (mouseXDelta + 200);
    }
  }
  
  // Log the calculated difference
  // @ts-ignore
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(() => updateImage(Math.round(mouseXDelta)));
  // You can perform any other actions based on the calculated difference here
  }


});




cont.addEventListener('mouseup', function () {
  mousedown = false;
  // Reset values when mouse button is release
  oldValue = mouseXDelta;
  initialMouseX = 0;
  mouseXDelta = 0;
  swipeDirection = "";
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
    cursor: grab;
  }
</style>
