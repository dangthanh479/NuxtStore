<template>
  <div class="flex justify-center mt-8 mb-16">
    <nav
      v-if="totalPages > 1"
      class="inline-flex items-center"
      aria-label="Pagination"
    >
      <!-- PREVIOUS -->
      <NuxtLink
        :to="prevPageUrl"
        class="prev"
        :disabled="currentPage === 1"
        :class="{ 'cursor-not-allowed opacity-50': currentPage === 1 }"
        aria-label="Previous"
      >
        Prev
      </NuxtLink>

      <!-- First page -->
      <NuxtLink
        v-if="showFirstPage"
        :to="pageUrl(1)"
        class="page-number"
        :class="{ 'active': currentPage === 1 }"
      >
        1
      </NuxtLink>

      <!-- First ellipsis -->
      <span
        v-if="showFirstEllipsis"
        class="ellipsis"
      >
        ...
      </span>

      <!-- Page numbers -->
      <NuxtLink
        v-for="pageNumber in visiblePages"
        :key="pageNumber"
        :to="pageUrl(pageNumber)"
        :aria-current="pageNumber === currentPage ? 'page' : undefined"
        class="page-number"
        :class="{ 'active': pageNumber === currentPage }"
      >
        {{ pageNumber }}
      </NuxtLink>

      <!-- Last ellipsis -->
      <span
        v-if="showLastEllipsis"
        class="ellipsis"
      >
        ...
      </span>

      <!-- Last page -->
      <NuxtLink
        v-if="showLastPage"
        :to="pageUrl(totalPages)"
        class="page-number"
        :class="{ 'active': currentPage === totalPages }"
      >
        {{ totalPages }}
      </NuxtLink>

      <!-- NEXT -->
      <NuxtLink
        :to="nextPageUrl"
        class="next"
        :disabled="currentPage === totalPages"
        :class="{ 'cursor-not-allowed opacity-50': currentPage === totalPages }"
        aria-label="Next"
      >
        Next
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

interface Props {
  totalPages: number;
  currentPage: number;
  queryKey?: string;
  siblingCount?: number;
}

const props = defineProps<Props>();
const route = useRoute();

const queryKey = props.queryKey || 'page';
const siblingCount = props.siblingCount || 1; // Reduced sibling count for better UI

// Get current query params (except page)
const otherQueryParams = computed(() => {
  const query = { ...route.query };
  delete query[queryKey];
  return query;
});

const visiblePages = computed(() => {
  const total = props.totalPages;
  const current = props.currentPage;
  const siblings = siblingCount;

  let startPage = Math.max(2, current - siblings);
  let endPage = Math.min(total - 1, current + siblings);

  // Adjust range if at the start or end
  if (current <= siblings + 1) {
    endPage = Math.min(siblings * 2 + 1, total - 1);
  } else if (current >= total - siblings) {
    startPage = Math.max(total - (siblings * 2), 2);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
});

// Show logic for first/last pages and ellipsis
const showFirstPage = computed(() => visiblePages.value[0] > 1);
const showLastPage = computed(() => visiblePages.value.at(-1)! < props.totalPages);
const showFirstEllipsis = computed(() => visiblePages.value[0] > 2);
const showLastEllipsis = computed(() => visiblePages.value.at(-1)! < props.totalPages - 1);

// Create URL for a specific page
const pageUrl = (pageNumber: number) => ({
  path: route.path,
  query: { ...otherQueryParams.value, [queryKey]: pageNumber },
});

// URLs for Previous/Next buttons
const prevPageUrl = computed(() => {
  const prevPage = props.currentPage > 1 ? props.currentPage - 1 : 1;
  return pageUrl(prevPage);
});

const nextPageUrl = computed(() => {
  const nextPage = props.currentPage < props.totalPages ? props.currentPage + 1 : props.totalPages;
  return pageUrl(nextPage);
});
</script>

<style scoped>
.page-number {
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  text-decoration: none;
  color: #333;
}

.page-number.active {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

.prev,
.next {
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  text-decoration: none;
  color: #333;
}

.prev:hover,
.next:hover,
.page-number:hover {
  background-color: #f8f9fa;
}

.page-number.active:hover {
  background-color: #0056b3;
}

.ellipsis {
  padding: 0 0.5rem;
  font-size: 1rem;
  color: #666;
}
</style>