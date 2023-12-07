<script>
  import NavBar from "$lib/navBar.svelte";
  import ContactForm from "$lib/contactForm.svelte";
  import Footer from "$lib/footer.svelte";
  import { page } from "$app/stores";
</script>

{#if $page.url.pathname !== "/products" && $page.url.pathname !== "/checkOut"}
  <NavBar />
{/if}
<ContactForm/>
<slot />
<Footer/>

