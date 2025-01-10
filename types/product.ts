export interface Product {
  id: number;
  code: string;
  name: string;
  priceOld: number;
  price: number;
  description: string | null;
  image: string;
  categoryId: number;
  categoryName: string;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
}

export interface ProductResponse {
  content: Product[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
