<template>
	<div>
		<Head>
			<Title>AnyStore | {{ product.name }}</Title>
			<Meta
				name="description"
				:content="product.description" />
		</Head>

		<ProductDetails :product="product" />
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'products',
});

const { $apiHandler } = useNuxtApp();
const { productId } = useRoute().params;

const data = await $apiHandler({
  method: 'GET',
  path: `products/${productId}`,
})

const product = data.value;
if (!product) {
	throw createError({ statusCode: 404, statusMessage: 'Product not found' });
}
</script>
