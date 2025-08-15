<script lang="ts">
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { products } from '$lib/data/products'; // ใช้ข้อมูลเดิม
</script>

<svelte:head>
  <title>Products - GameZone</title>
</svelte:head>

<div class="container page-container">
  <h1 class="page-title">สินค้าของเรา</h1>
  <div class="product-grid">
    {#each products as product (product.id)}
      <ProductCard {product} />
    {/each}
  </div>
</div>

<style>
  .page-container {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .page-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--primary-yellow);
    margin-bottom: 2.5rem;
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }
</style>