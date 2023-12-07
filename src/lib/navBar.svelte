<script>
  import Logo from "./logo.svelte";
  import { onMount } from "svelte";
  import Cart from "./cart.svelte";

  let hamburgerMenuClicked= ""; 

  // header open or closed; 
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
</script>

<header class="header-main-cont {headerClose}">
  <!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="hamburger-menu-btn" on:click={menuOpenClose}>
    <div class="bar1 {hamburgerMenuClicked}"></div>
    <div class="bar2 {hamburgerMenuClicked}"></div>
    <div class="bar3 {hamburgerMenuClicked}"></div>
  </div>
  <div class="logo"  on:click={()=>{hamburgerMenuClicked = ""}}>
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
  <div class="hamburger-menu-cont {hamburgerMenuClicked}">
    <div style="display: flex; align-items: start; flex-direction: column; gap: 10vh; margin-top: -20vh;">
    <a class="hamburger-link" href="/" on:click={()=>{menuOpenClose()}}>HOME</a>
    <a class="hamburger-link" href="/products" on:click={()=>{menuOpenClose()}}>WATCHES</a>
    <a class="hamburger-link" href="/about" on:click={()=>{menuOpenClose()}}>ABOUT US</a>
    <a class="hamburger-link" href="/location" on:click={()=>{menuOpenClose()}}>LOCATION</a>
  </div>
  </div>
</header>


<style>
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
  background-color: #112033;
  overflow: hidden; /* Hide content that goes beyond the height */
  transition: height 0.7s; /* Add a smooth transition effect */

  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
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



@media (max-width: 768px) {

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

.hamburger-menu-cont{
  display: flex;
}
  }
</style>
