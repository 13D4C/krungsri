<script lang="ts">
  import type { Product } from '$lib/data/products';
  export let product: Product;
</script>

<div class="product-card">
  <img class="product-image" src={product.imageUrl} alt={product.name} />
  <div class="product-info">
    <h3 class="product-name">{product.name}</h3>
    <p class="product-category">{product.category}</p>
    <p class="product-description">{product.description}</p>
    <div class="product-footer">
      <span class="product-price">{product.price}฿</span>
      <button class="add-to-cart-btn">เพิ่มลงตะกร้า</button>
    </div>
  </div>
</div>

<style>
  .product-card {
    background-color: var(--dark-gray);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    overflow: hidden;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  .product-card:hover {
    transform: translateY(-5px) scale(1.02);
  }
  .product-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  .product-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .product-name {
    color: var(--text-white);
    font-size: 1.25rem;
    font-weight: bold;
  }
  .product-category {
    color: var(--text-gray);
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
  }
  .product-description {
    color: var(--text-gray);
    font-size: 0.9rem;
    flex-grow: 1; /* Ensure description takes up space */
    margin-bottom: 1rem;
  }
  .product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto; /* Push footer to bottom of card */
  }
  .product-price {
    color: var(--primary-yellow);
    font-size: 1.5rem;
    font-weight: bold;
  }
  .add-to-cart-btn {
    background-color: var(--primary-yellow);
    color: var(--dark-gray);
    font-weight: bold;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .add-to-cart-btn:hover {
    background-color: #ffd43b;
  }
</style>