<template>
	<div>
		<div>
			<label
				class="block text-gray-700 text-sm font-bold mb-2 mt-5"
				for="name">
				Product Name
			</label>
			<input
				class="border border-green-500 px-2 py-1 focus:outline-none focus:border-green-700 focus:ring-1 focus:border-green-700 w-80"
				id="name"
				type="text"
				placeholder="Product name"
				v-model="formData.name" />
		</div>
		<div>
			<label
				class="block text-gray-700 text-sm font-bold mb-2 mt-5"
				for="price">
				Product Price
			</label>
			<input
				class="border border-green-500 px-2 py-1 focus:outline-none focus:border-green-700 focus:ring-1 focus:border-green-700 w-80"
				id="price"
				type="number"
				placeholder="Product Price"
				v-model="formData.price" />
		</div>
		<div>
			<label
				class="block text-gray-700 text-sm font-bold mb-2 mt-5"
				for="content">
				Product Content
			</label>
			<input
				class="border border-green-500 px-2 py-1 focus:outline-none focus:border-green-700 focus:ring-1 focus:border-green-700 w-80"
				id="content"
				type="text"
				placeholder="Product content"
				v-model="formData.content" />
		</div>
		<div>
			<label
				class="block text-gray-700 text-sm font-bold mb-2 mt-5"
				for="description">
				Product Description
			</label>
			<textarea
				class="border border-green-500 px-2 py-1 focus:outline-none focus:border-green-700 focus:ring-1 focus:border-green-700 w-80"
				id="description"
				placeholder="Product Description"
				v-model="formData.description" />
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	modelValue: {
		type: Object,
		required: true,
	},
});

const emit = defineEmits(['update:modelValue']);

const formData = computed({
	get() {
		return props.modelValue;
	},
	set(newValue) {
		emit('update:modelValue', newValue);
	},
});
</script>
