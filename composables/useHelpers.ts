export function useHelpers() {
  const isShowingMobileMenu = useState<boolean>(
    "isShowingMobileMenu",
    () => false
  );
  const fallbackImage = "/images/placeholder.jpg";

  function toggleMobileMenu(state: boolean | undefined = undefined) {
    isShowingMobileMenu.value = state ?? !isShowingMobileMenu.value;
  }

  return {
    isShowingMobileMenu,
    fallbackImage,
    toggleMobileMenu,
  };
}
