<script>
  import logoScr from "$lib/img/Kronøs-Logo.png";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="logo-cont">
 <a href="./">
  <img class="logo-img" src={logoScr} alt="" />
 </a> 
</div>

<style>
  .logo-cont {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-img {
    height: 80px;
    filter: invert(1);
    cursor: pointer;
  }
</style>
