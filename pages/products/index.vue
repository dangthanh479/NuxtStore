<template>
	<div>
		<ProductResultCount />
		<div>
			<p class="font-bold text-gray-500 m-4 mt-20">Products List</p>
		</div>
		<ProductGrid />
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'products',
});

const { $apiHandler } = useNuxtApp();
const { setProducts } = useProducts();
const route = useRoute();

const data = await $apiHandler({
	method: 'GET',
	path: `products`,
});
setProducts(data.value);

watch(
  () => route.query,
  async (newVal) => {
		if (route.name === 'products') {
			try {
        const queryParams = new URLSearchParams(newVal).toString(); // Convert query object to query string
        const apiUrl = `products?${queryParams}`; // Append query string to path
        const newData = await $apiHandler({
          method: 'GET',
          path: apiUrl, // Use constructed URL with query params
				});
        setProducts(newData.value);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
  },
  { immediate: true }
);


useHead({
	title: 'AnyStore | Products List',
	meta: [{ name: 'description', content: 'AnyStore' }],
});
</script>
