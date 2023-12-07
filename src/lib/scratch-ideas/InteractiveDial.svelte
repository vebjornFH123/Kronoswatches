<script>
  import { onMount } from "svelte";
  import dialImg from "$lib/img/Detaildial.png";
  import hourHandImg from "$lib/img/hourHand.png";
  import minuteHandImg from "$lib/img/hourHand.png";
  import secondHandImg from "$lib/img/secondHand.png";

  let watchCont;
  let hourHand;
  let minuteHand;
  let secondHand;
  let detailsInfoCont;
  let htmlInfo;

  let mousemove = false;

  let sliderCount = 0;
  let hideSlider = "none";

  onMount(() => {
    function getCurrentTime() {
      let date = new Date();
      let currentHours = date.getHours();
      let currentMinutes = date.getMinutes();
      let currentSeconds = date.getSeconds();
      hourHand.style.transform = `rotate(${
        currentHours * 30 + currentMinutes / 2 + 180
      }deg) translate(-50%, 0%)`;
      hourHand.style.transformOrigin = "0% 0%";

      secondHand.style.transform = `rotate(${
        currentSeconds * 6
      }deg) translate(-50%, 0%)`;
      secondHand.style.transformOrigin = "0% 0%";

      if (mousemove === false) {
        minuteHand.style.transform = `rotate(${
          currentMinutes * 6 + 180
        }deg) translate(-50%, 0%)`;
        minuteHand.style.transformOrigin = "0% 0%";

        const kuk = 6.9;

        let secondHandPos = secondHand.style.transform.slice(7, -24);

        sliderCount++;
        console.log("he" + hideSlider);

        console.log(currentSeconds);
        if (currentSeconds === 15) {
          sliderCount = 0;
          hideSlider = "block";
        } else if (currentSeconds === 30) {
          hideSlider = "block";
          sliderCount = 0;
        } else if (currentSeconds === 45) {
          hideSlider = "block";
          sliderCount = 0;
        } else if (currentSeconds === 0) {
          hideSlider = "block";
          sliderCount = 0;
        }

        if (secondHandPos >= 0 && secondHandPos <= 90) {
          if (secondHandPos >= 0 + 6 && secondHandPos <= 90 - 6) {
            htmlInfo = `
                    <h2>Dial</h2>
                    <p>The dials capture the stunning natural beauty of Jan Mayen, encompassing the black volcanic sand beaches, vividly colored rocks, resilient mosses, and the fiery basaltic lava interior of the volcano Beerenberg. Each texture is carefully crafted and transformed into a series of stamping tools, progressively increasing in fidelity. The dials are stamped in multiple stages, layered with metallic coatings to add a sheen, infused with fumé colors, and finally coated with a glossy finish, resulting in a truly captivating visual experience.</p>
                    <div class="time-slider-cont" style="width: ${
                      kuk * sliderCount - kuk
                    }%; height: 5px; border-radius: 5px; background-color: #fff; display:${hideSlider}; transition: width 1s, height 1s, background-color 1s;">
                    </div>
                `;
            detailsInfoCont.style.opacity = 1;
          } else {
            detailsInfoCont.style.opacity = 0;
          }
        } else if (secondHandPos >= 90 && secondHandPos <= 180) {
          if (secondHandPos >= 90 + 6 && secondHandPos <= 180 - 6) {
            htmlInfo = `
                    <h2>Integrated bracelet</h2>
                    <p></p>
                    <div class="time-slider-cont" style="width: ${
                      kuk * sliderCount - kuk
                    }%; height: 5px; border-radius: 5px; background-color: #fff; display:${hideSlider}; transition: width 1s, height 1s, background-color 1s;"></div>
                    </div>
                `;
            detailsInfoCont.style.opacity = 1;
          } else {
            detailsInfoCont.style.opacity = 0;
          }
        } else if (secondHandPos >= 180 && secondHandPos <= 270) {
          if (secondHandPos >= 180 + 6 && secondHandPos <= 270 - 6) {
            htmlInfo = `
                    <h2>Case</h2>
                    <p></p>
                    <div class="time-slider-cont" style="width: ${
                      kuk * sliderCount - kuk
                    }%; height: 5px; border-radius: 5px; background-color: #fff; display:${hideSlider}; transition: width 1s, height 1s, background-color 1s;"></div>
                    </div>
                `;
            detailsInfoCont.style.opacity = 1;
          } else {
            detailsInfoCont.style.opacity = 0;
          }
        } else if (secondHandPos >= 270 && secondHandPos <= 360) {
          if (secondHandPos >= 270 + 6 && secondHandPos <= 360 + 6) {
            htmlInfo = `
                    <h2>Dimensions</h2>
                    <img src="https://straum.co/cdn/shop/files/jan-mayen--dimensions-tp_f85c8de5-c63f-448d-9e89-b6549281edcf.png?v=1680787797">
                    <div class="time-slider-cont" style="width: ${
                      kuk * sliderCount - kuk
                    }%; height: 5px; border-radius: 5px; background-color: #fff; display:${hideSlider}; transition: width 1s, height 1s, background-color 1s;"></div>
                    </div>
                `;
            detailsInfoCont.style.opacity = 1;
          } else {
            detailsInfoCont.style.opacity = 0;
          }
        }
        console.log(detailsInfoCont.style.opacity);
        detailsInfoCont.innerHTML = htmlInfo;
      }
    }
    getCurrentTime();

    setInterval(getCurrentTime, 1000);

    watchCont.addEventListener("mousemove", (event) => {
      mousemove = true;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const divRect = watchCont.getBoundingClientRect();
      const centerX = divRect.left + divRect.width / 2;
      const centerY = divRect.top + divRect.height / 2;
      // Calculate the angle in radians between the center and the mouse position
      const angleRadians = Math.atan2(mouseY - centerY, mouseX - centerX);

      // Convert radians to degrees
      const angleDegrees = Math.floor((angleRadians * 180) / Math.PI);

      // Rotate the indicator element to show the angle
      minuteHand.style.transform = `rotate(${
        angleDegrees - 90
      }deg) translate(-50%, 0%)`;
      minuteHand.style.transformOrigin = "0% 0%";
      console.log(angleDegrees);
      if (angleDegrees >= -90 && angleDegrees <= 0) {
        if (angleDegrees >= -90 + 6 && angleDegrees <= -6) {
          htmlInfo = `
                <h2>Dial</h2>
                <p>The dials capture the stunning natural beauty of Jan Mayen, encompassing the black volcanic sand beaches, vividly colored rocks, resilient mosses, and the fiery basaltic lava interior of the volcano Beerenberg. Each texture is carefully crafted and transformed into a series of stamping tools, progressively increasing in fidelity. The dials are stamped in multiple stages, layered with metallic coatings to add a sheen, infused with fumé colors, and finally coated with a glossy finish, resulting in a truly captivating visual experience.</p>`;
          detailsInfoCont.style.opacity = 1;
        } else {
          detailsInfoCont.style.opacity = 0;
        }
      } else if (angleDegrees >= 0 && angleDegrees <= 90) {
        if (angleDegrees >= 0 + 6 && angleDegrees <= 90 - 6) {
          htmlInfo = `
                    <h2>Integrated bracelet</h2>
                    <p></p>
                `;
          detailsInfoCont.style.opacity = 1;
        } else {
          detailsInfoCont.style.opacity = 0;
        }
      } else if (angleDegrees >= 90 && angleDegrees <= 180) {
        if (angleDegrees >= 90 + 6 && angleDegrees <= 180 - 6) {
          htmlInfo = `
                    <h2>Case</h2>
                    <p></p>
                `;
          detailsInfoCont.style.opacity = 1;
        } else {
          detailsInfoCont.style.opacity = 0;
        }
      } else if (angleDegrees >= -180 && angleDegrees <= -90) {
        if (angleDegrees >= -180 + 6 && angleDegrees <= -90 + 6) {
          htmlInfo = `
                <h2>Dimensions</h2>
                <img src="https://straum.co/cdn/shop/files/jan-mayen--dimensions-tp_f85c8de5-c63f-448d-9e89-b6549281edcf.png?v=1680787797">
                `;
          detailsInfoCont.style.opacity = 1;
        } else {
          detailsInfoCont.style.opacity = 0;
        }
      }
      console.log(detailsInfoCont.style.opacity);
      detailsInfoCont.innerHTML = htmlInfo;
    });

    watchCont.addEventListener("mouseleave", () => {
      mousemove = false;
      minuteHand.style.transition = "all 0.8s";
      setTimeout(() => {
        minuteHand.style.transition = "none";
      }, 2000);
      console.log(mousemove);
    });
  });
</script>

<div class="details">
  <div class="watch-cont" bind:this={watchCont}>
    <img class="dial-img" src={dialImg} alt="" />
    <img class="hourHand-img" src={hourHandImg} alt="" bind:this={hourHand} />
    <img
      class="minuteHand-img"
      src={minuteHandImg}
      alt=""
      bind:this={minuteHand}
    />
    <img
      class="secondHand-img"
      src={secondHandImg}
      alt=""
      bind:this={secondHand}
    />
  </div>
  <div class="details-info-cont" bind:this={detailsInfoCont} />
</div>

<style>
  .details {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  .details-info-cont {
    width: 30%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    transition: opacity 1s;
    gap: 50px;
    overflow: hidden;
  }

  .watch-cont {
    height: 60%;
    position: relative;
  }

  .dial-img {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
  }

  .hourHand-img {
    position: absolute;
    top: 50%; /* Example value */
    left: 50%; /* Example value */
    height: 170px;
    z-index: 5;
  }

  .minuteHand-img {
    position: absolute;
    top: 49.8%; /* Example value */
    left: 50%; /* Example value */
    height: 220px;
    z-index: 10;
  }

  .secondHand-img {
    position: absolute;
    top: 76.5%; /* Example value */
    left: 50%; /* Example value */
    height: 50px;
  }
</style>
