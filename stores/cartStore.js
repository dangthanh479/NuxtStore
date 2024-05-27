import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => {
    return {
      cart: [],
    };
  },
  actions: {
    async getAllCart() {
      try {
        const response = await useFetch("https://fakestoreapi.com/products");
        this.cart = [];

        return response.data.value;
      } catch (e) {
        console.log("catch", e);
      }
    },
    addItemToCart(product) {
      const existingProduct = this.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },

    removeItemFromCart(productId) {
      const productIndex = this.cart.findIndex((item) => item.id === productId);
      if (productIndex !== -1) {
        if (this.cart[productIndex].quantity > 1) {
          this.cart[productIndex].quantity -= 1;
        } else {
          this.cart.splice(productIndex, 1);
        }
      }
    },
    getCartPrice() {
      return this.cart
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2);
    },
    getCartDiscount() {
      // TODO get discount from API
      const discountValue = 10;
      const cartPrice = this.getCartPrice();

      return ((cartPrice * discountValue) / 100).toFixed(2);
    },
    getTotalPrice() {
      return (this.getCartPrice() - this.getCartDiscount()).toFixed(2);
    },
  },
});
