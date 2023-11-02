<template>
	<div>
		<label for="phone">Phone</label>
		<input
			id="phone"
			v-model="formData.phone"
			type="text"
			name="phone" />
		<label for="email">Email</label>
		<input
			id="email"
			v-model="formData.email"
			type="text"
			name="email" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(["formData"])
const formData = ref(props.formData);
</script>
