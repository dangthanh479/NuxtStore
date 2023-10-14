<template>
	<div>
		<div>
			name: {{ searchValue.name }}
		</div>
		<div>
			type: {{ searchValue.type }}
		</div>
		<div>brand: {{ searchValue.brand }}</div>
	</div>
</template>

<script setup>
import { useUserStore } from '#imports';

definePageMeta({
	layout: 'products',
});

const userStore = useUserStore();
const searchValue = ref({
	name: '',
	type: '',
	brand: '',
});
if (userStore.userSearch) {
	searchValue.value = userStore.userSearch;
}
watch(
	() => userStore.userSearch,
	(newValue) => {
		searchValue.value = newValue;
	},
	{ immediate: true },
);
</script>

<style scoped></style>
