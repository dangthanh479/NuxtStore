<template>
	<section class="my-36">
		<div class="flex flex-col items-center">
			<div class="dancing-font text-4xl font-bold mb-4">
				{{ $t('general.section1') }}
			</div>
			<div class="mb-4">{{ $t('general.section1Description') }}</div>
			<div>
				<NuxtLink
					class="click-link"
					to="/categories"
					>{{ $t('general.discover') }}</NuxtLink
				>
			</div>
		</div>
		<div
			class="grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-4">
			<template
				v-for="(product, i) in productCategories"
				:key="i">
				<CategoryCard
					v-if="i <= 3"
					class="w-full"
					:node="product" />
			</template>
		</div>
	</section>
</template>

<script setup>
const { data: getAllProductCategories } = await useFetch(
	'/api/getAllCategories',
);
const productCategories = getAllProductCategories.value.data || [];
</script>
