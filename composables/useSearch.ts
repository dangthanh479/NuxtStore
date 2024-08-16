export function useSearch() {
  // TODO useSearch()
  const isShowingSearch = useState<boolean>("isShowingSearch", () => false);
  const searchQuery = useState<string>("searchQuery", () => "");

  const getSearchQuery = () => {};

  const setSearchQuery = () => {};

  const clearSearchQuery = () => {};

  const searchProducts = () => {};

  const isSearchActive = computed<boolean>(() => !!searchQuery.value);

  const toggleSearch = () => {
    isShowingSearch.value = !isShowingSearch.value;
  };
  return {
    getSearchQuery,
    setSearchQuery,
    clearSearchQuery,
    searchProducts,
    isSearchActive,
    isShowingSearch,
    toggleSearch,
  };
}
