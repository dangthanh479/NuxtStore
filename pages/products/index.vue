<template>
	<div>
		<div>
			<p class="font-bold text-gray-500 m-4">Add more products</p>
			<div>
				<form @submit.prevent="submitForm">
					<div>
						<label
							class="block text-gray-700 text-sm font-bold mb-2 mt-5"
							for="title">
							Product Name
						</label>
						<input
							class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="title"
							type="text"
							placeholder="Product Name"
							v-model="formData.title" />
					</div>

					<div>
						<label
							class="block text-gray-700 text-sm font-bold mb-2 mt-5"
							for="price">
							Product Price
						</label>
						<input
							class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="price"
							type="number"
							placeholder="Product Price"
							v-model="formData.price" />
					</div>

					<div>
						<label
							class="block text-gray-700 text-sm font-bold mb-2 mt-5"
							for="category">
							Product Category
						</label>
						<input
							class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="category"
							type="text"
							placeholder="Product Category"
							v-model="formData.category" />
					</div>

					<div>
						<label
							class="block text-gray-700 text-sm font-bold mb-2 mt-5"
							for="description">
							Product Description
						</label>
						<textarea
							class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="description"
							placeholder="Product Description"
							v-model="formData.description" />
					</div>
					<button
						class="btn mt-5"
						type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
		<div>
			<p class="font-bold text-gray-500 m-4 mt-20">Products List</p>
		</div>
		<div class="grid grid-cols-4 gap-5">
			<div v-for="p in products">
				<ProductCard :product="p" />
			</div>
		</div>
	</div>
</template>

<script setup>
import axios from 'axios';

const { data: products } = await useFetch('https://fakestoreapi.com/products');

definePageMeta({
	layout: 'products',
});

useHead({
	title: 'Nuxt Store | Products List',
	meta: [{ name: 'description', content: 'Nuxt Store' }],
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
		.then((json) => console.log(json));
};
</script>
