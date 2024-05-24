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
        console.log(2222, response.data.value);
        // response.forEach((product) => {
        //   this.cart.push({
        //     id: product.data().id,
        //     name: product.data().name,
        //     description: product.data().description,
        //   });
        // });
        return response.data.value;
      } catch (e) {
        console.log("catch", e);
      }
    },
    addItemToCart(product) {
      this.cart.push(product);
      console.log(this.cart);
    },
    removeItemFromCart() {
      //
    },
  },
});
