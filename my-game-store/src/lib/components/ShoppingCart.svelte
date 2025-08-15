<script lang="ts">
  import { cart, type CartItem } from '$lib/stores/cart';
  import { slide } from 'svelte/transition';

  let isOpen = false;

  // คำนวณราคารวม
  $: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>

<div class="fixed top-4 right-4">
  <button on:click={() => isOpen = !isOpen} class="relative bg-primary-yellow p-3 rounded-full shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-dark-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    {#if $cart.length > 0}
      <span class="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{$cart.length}</span>
    {/if}
  </button>

  {#if isOpen}
    <div transition:slide class="absolute top-16 right-0 w-80 bg-medium-gray rounded-lg shadow-xl p-4 z-10">
      <h3 class="text-white text-lg font-bold mb-4">ตะกร้าของคุณ</h3>
      {#if $cart.length === 0}
        <p class="text-gray-400">ยังไม่มีสินค้าในตะกร้า</p>
      {:else}
        {#each $cart as item (item.id)}
          <div class="flex justify-between items-center text-white mb-2">
            <span>{item.name} x{item.quantity}</span>
            <span>{item.price * item.quantity}฿</span>
            <button on:click={() => cart.removeItem(item.id)} class="text-red-500 hover:text-red-400">ลบ</button>
          </div>
        {/each}
        <hr class="my-2 border-gray-600">
        <div class="flex justify-between items-center text-primary-yellow font-bold text-xl">
          <span>ยอดรวม:</span>
          <span>{total}฿</span>
        </div>
        <button class="w-full bg-primary-yellow text-dark-gray font-bold py-2 mt-4 rounded">ชำระเงิน</button>
      {/if}
    </div>
  {/if}
</div>