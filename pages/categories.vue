<template>
	<main class="container mx-auto p-4">
		<div
			v-if="productCategories && productCategories.length"
			class="grid grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-3">
			<CategoryCard
				v-for="(category, i) in productCategories"
				:key="i"
				:node="category"
				:image-loading="i <= 2 ? 'eager' : 'lazy'" />
		</div>
	</main>
</template>

<script setup>
useHead({
	title: `Categories`,
	meta: [{ name: 'description', content: 'All product categories' }],
	link: [{ rel: 'canonical', href: '' }],
});

const { data: getAllProductCategories } = await useFetch(
	'/api/getAllCategories',
);
const productCategories = getAllProductCategories.value.data || [];
</script>
