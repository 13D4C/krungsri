<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav>
  <div class="nav-container container">
    <a href="/" class="logo">Horse Zone</a>
    <div class="nav-links">
      <a href="/" class:active={$page.url.pathname === '/'}>Home</a>
      <a href="/products" class:active={$page.url.pathname === '/products'}>Products</a>
      <a href="/community" class:active={$page.url.pathname === '/community'}>Community</a>
    </div>
  </div>
</nav>

<style>
  nav {
    background-color: var(--dark-gray);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem 0;
  }
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 1.75rem;
    font-weight: bold;
    color: var(--primary-yellow);
  }
  .nav-links {
    display: flex;
    gap: 1.5rem;
  }
  .nav-links a {
    color: var(--text-white);
    padding: 0.5rem;
    border-radius: 4px;
    transition: background-color 0.2s;
  }
  .nav-links a:hover {
    background-color: var(--medium-gray);
  }
  .nav-links a.active {
    color: var(--primary-yellow);
    font-weight: bold;
  }
</style>