interface Cart {
  //
}

/**
 * @name useCart
 * @description A composable that handles the cart in local storage
 */
export const useCart = () => {
  const isShowingCart = useState<boolean>("isShowingCart", () => false);
  const cart = useState<Cart>("cart");

  // toggle the cart visibility
  function toggleCart(state: boolean | undefined = undefined): void {
    isShowingCart.value = state ?? !isShowingCart.value;
  }

  return {
    cart,
    isShowingCart,
    toggleCart,
  };
};
