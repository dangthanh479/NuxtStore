<template>
	<div>
		<div class="mt-[1000px]">
			<p class="font-bold text-gray-500 m-4">Add more products</p>
			<div>
				<ProductForm v-model="formData" />
				<button
					class="btn mt-5"
					type="submit"
					@click="submitForm">
					Submit
				</button>
			</div>
		</div>
		<div>
			<p class="font-bold text-gray-500 m-4 mt-20">Products List</p>
		</div>
		<div class="grid grid-cols-4 gap-5">
			<div v-for="product in products">
				<ProductCard :product="product" />
			</div>
		</div>
	</div>
</template>

<script setup>
import axios from 'axios';

definePageMeta({
	layout: 'products',
});

const { data: products } = await useFetch('https://fakestoreapi.com/products');

useHead({
	title: 'AnyStore | Products List',
	meta: [{ name: 'description', content: 'AnyStore' }],
});

const formData = ref({
	title: '',
	price: '',
	category: '',
	description: '',
});

const submitForm = () => {
	axios
		.post(
			'https://fakestoreapi.com/products',
			JSON.stringify({
				title: formData.title,
				price: formData.price,
				description: formData.description,
				image: '',
				category: formData.category,
			}),
		)
		.then((json) => {
			formData.value = {
				title: '',
				price: '',
				category: '',
				description: '',
			};
		});
};
</script>
