<script>
  import "../app.css"; // Import global CSS
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="site-wrapper">
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .site-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex-grow: 1; /* Makes main content take up available space */
  }
</style>