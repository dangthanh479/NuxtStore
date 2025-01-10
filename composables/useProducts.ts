import { Product, ProductResponse } from "~/types";

let allProducts = [] as Product[];
let productAllPages = 0;
let productCount = 0;

export function useProducts() {
  // Declare the state variables and the setter functions
  const products = useState<Product[]>('products');
  const productCurrentPage = useState('productCurrentPage');

  /**
   * Sets the products state variable and the allProducts variable.
   * @param {ProductResponse} productResponse - The new product response to set.
   */
  function setProducts(productResponse: ProductResponse): void {
    productAllPages = productResponse.totalPages;
    productCurrentPage.value = productResponse.pageable.pageNumber;
    productCount = productResponse.totalElements;
    products.value = productResponse.content ?? [];
    allProducts = JSON.parse(JSON.stringify(productResponse.content));
  }

  const updateProductList = async (): Promise<void> => {
    const { scrollToTop } = useHelpers();
    // const { isSortingActive, sortProducts } = useSorting();
    // const { isFiltersActive, filterProducts } = useFiltering();
    // const { isSearchActive, searchProducts } = useSearching();

    // scroll to top of page
    // scrollToTop();

    // return all products if no filters are active
    // if (!isFiltersActive.value && !isSearchActive.value && !isSortingActive.value) {
    //   products.value = allProducts;
    //   return;
    // }

    // otherwise, apply filter, search and sorting in that order
    try {
      let newProducts = [...allProducts];
      // if (isFiltersActive.value) newProducts = filterProducts(newProducts);
      // if (isSearchActive.value) newProducts = searchProducts(newProducts);
      // if (isSortingActive.value) newProducts = sortProducts(newProducts);

      products.value = newProducts;
    } catch (error) {
      console.error(error);
    }
  };

  return { products, allProducts, productCount, productAllPages, productCurrentPage, setProducts, updateProductList };
}
