<template>
  <div class="flex justify-center mt-8 mb-16">
    <nav
      v-if="totalPages > 1"
      class="inline-flex -space-x-px rounded-md shadow-sm"
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
        <i class="fa-solid fa-chevron-left"></i>
      </NuxtLink>

      <!-- PAGE NUMBERS -->
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

      <!-- NEXT -->
      <NuxtLink
        :to="nextPageUrl"
        class="next"
        :disabled="currentPage === totalPages"
        :class="{ 'cursor-not-allowed opacity-50': currentPage === totalPages }"
        aria-label="Next"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

interface Props {
  totalPages: number; // Tổng số trang
  currentPage: number; // Trang hiện tại
  queryKey?: string; // Tên query key cho page (mặc định là "page")
  siblingCount?: number; // Số lượng trang hiển thị xung quanh trang hiện tại
}

const props = defineProps<Props>();


const route = useRoute();

const queryKey = props.queryKey || 'page';
const siblingCount = props.siblingCount || 3;

// Lấy query hiện tại (trừ `page`)
const otherQueryParams = computed(() => {
  const query = { ...route.query };
  delete query[queryKey];
  return query;
});

// Tạo URL cho một trang
const pageUrl = (pageNumber: number) => {
  return {
    path: route.path,
    query: { ...otherQueryParams.value, [queryKey]: pageNumber },
  };
};

// Tạo URL cho nút Previous
const prevPageUrl = computed(() => {
  const prevPage = props.currentPage > 1 ? props.currentPage - 1 : 1;
  return pageUrl(prevPage);
});

// Tạo URL cho nút Next
const nextPageUrl = computed(() => {
  const nextPage = props.currentPage < props.totalPages ? props.currentPage + 1 : props.totalPages;
  return pageUrl(nextPage);
});

// Hiển thị danh sách các trang (bao gồm sibling pages)
const visiblePages = computed(() => {
  const startPage = Math.max(1, props.currentPage - siblingCount);
  const endPage = Math.min(props.totalPages, props.currentPage + siblingCount);
  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
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

.cursor-not-allowed {
  pointer-events: none;
}

.opacity-50 {
  opacity: 0.5;
}
</style>
