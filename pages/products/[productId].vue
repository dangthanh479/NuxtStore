<template>
	<div>
		<Head>
			<Title>Nuxt Store | {{ product.title }}</Title>
			<Meta
				name="description"
				:content="product.description" />
		</Head>

		<ProductDetails :product="product" />
	</div>
</template>

<script setup>
const { productId } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + productId;

//  fetch the products
const { data: product } = await useFetch(uri, { key: productId });

if (!product.value) {
	throw createError({ statusCode: 404, statusMessage: 'Product not found' });
}

definePageMeta({
	layout: 'products',
});
</script>
