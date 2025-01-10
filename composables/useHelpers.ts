export function useHelpers() {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();
  const isShowingMobileMenu = useState<boolean>(
    "isShowingMobileMenu",
    () => false
  );
  const fallbackImage = "/images/placeholder.jpg";
  const productsPerPage: number = Number(runtimeConfig.public?.PRODUCTS_PER_PAGE) || 24;

  function toggleMobileMenu(state: boolean | undefined = undefined) {
    isShowingMobileMenu.value = state ?? !isShowingMobileMenu.value;
  }

  function addBodyClass(className: string): void {
    const body = document.querySelector("body");
    body?.classList.add(className);
  }

  function removeBodyClass(className: string): void {
    const body = document.querySelector("body");
    body?.classList.remove(className);
  }

  const isQueryEmpty = computed<boolean>(() => Object.keys(route.query).length === 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    isShowingMobileMenu,
    fallbackImage,
    toggleMobileMenu,
    addBodyClass,
    removeBodyClass,
    isQueryEmpty,
    scrollToTop,
    productsPerPage,
  };
}
