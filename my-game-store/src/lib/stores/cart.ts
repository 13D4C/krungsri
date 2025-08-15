import { writable } from 'svelte/store';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function createCart() {
  const { subscribe, set, update } = writable<CartItem[]>([]);

  return {
    subscribe,
    addItem: (product: { id: number; name: string; price: number }) => {
      update(items => {
        const existingItem = items.find(item => item.id === product.id);
        if (existingItem) {
          existingItem.quantity++;
          return items;
        }
        return [...items, { ...product, quantity: 1 }];
      });
    },
    removeItem: (productId: number) => {
      update(items => items.filter(item => item.id !== productId));
    },
    clearCart: () => {
      set([]);
    }
  };
}

export const cart = createCart();