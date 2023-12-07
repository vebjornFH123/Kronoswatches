<script>
  import testVideo from "$lib/img/testAnimasjon/00001.jpg";
  import { onMount } from "svelte";

  let canvas;
  let canvasCont;
  onMount(() => {
    const html = document.documentElement;
    const context = canvas.getContext("2d");

    const frameCount = 1500;
    const currentFrame = (index) =>
      testVideo.slice(0, 27) + `${index.toString().padStart(5, "0")}.jpg`;

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    window.addEventListener("resize", () => {
      resizeCanvas();
    });
    let imageHeight = 1000;
    let imageWidth = 3000;
    const img = new Image();
    img.src = currentFrame(1);
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      context.drawImage(
        img,
        canvas.width / 2 - imageWidth / 2,
        canvas.height / 2 - imageHeight / 2,
        imageWidth,
        imageHeight
      );
    }
    resizeCanvas();
    img.onload = function () {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        img,
        canvas.width / 2 - imageWidth / 2,
        canvas.height / 2 - imageHeight / 2,
        imageWidth,
        imageHeight
      );
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(
        img,
        canvas.width / 2 - imageWidth / 2,
        canvas.height / 2 - imageHeight / 2,
        imageWidth,
        imageHeight
      );
    };

    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );
      requestAnimationFrame(() => updateImage(frameIndex + 1 * 5));
    });

    preloadImages();
  });
</script>

<div class="canvas-cont" bind:this={canvasCont}>
  <canvas id="myCanvas" bind:this={canvas} />
</div>

<style>
  .canvas-cont {
    position: sticky;
    position: -webkit-sticky;
    width: 100%;
    height: 1000px;
    top: 0px;
  }
</style>
