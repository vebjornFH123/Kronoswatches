<script>
  import facebookScr from "$lib/img/icons/facebook-icon.svg";
  import instagramScr from "$lib/img/icons/instagram-icon.svg";
  import twitterScr from "$lib/img/icons/twitter-icon.svg";
  import youTubeScr from "$lib/img/icons/youtube-icon.svg";

  const channels = [
    twitterScr, 
    facebookScr, 
    instagramScr, 
    youTubeScr,
  ];
</script>

<footer class="main-footer-cont">
  <h4 class="waterMark">© all rights reserved to kronøs</h4>
  <div class="channels ">
    {#each channels as channel }
    <img style="cursor: pointer; height: 25px;" src="{channel}" alt="">
    {/each}
  </div>
</footer>

<style>
  h4 {
    color: #fff;
    margin: 0;
    font-weight: 100;
  }

  footer {
    position: absolute;
    left: 0;
    right: 0;
    height: 160px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #112033;
    text-transform: uppercase;
  }

.waterMark{
  width: 100%;
  display: flex;
  justify-content: center;
}
.channels{
  width: 100%;
  display: flex;
  gap: 80px;
  justify-content: center;
}

@media screen and (max-width: 767px) {
  footer{
    flex-direction: column-reverse;
    gap: 30px;
  }
}
</style>
