<template>
	<div class="select-none">
		<div @click="handleOpenSearchForm">
			<i class="fa-solid fa-magnifying-glass cursor-pointer"></i>
		</div>
		<form
			@submit.prevent="submitForm"
			:class="{ active: props.isOpenModal }"
			@click.stop=""
			class="searchForm flex flex-col items-center justify-center bg-[#fff4e3]">
			<div class="mb-5">
				<input
					v-model="searchForm.name"
					type="text"
					placeholder="name"
					class="px-3 py-2 rounded-md" />
			</div>
			<div class="mb-5">
				<input
					v-model="searchForm.type"
					type="text"
					placeholder="type"
					class="px-3 py-2 rounded-md" />
			</div>
			<div class="mb-5">
				<input
					v-model="searchForm.brand"
					type="text"
					placeholder="brand"
					class="px-3 py-2 rounded-md" />
			</div>
			<div>
				<button
					type="submit"
					class="btn">
					Search
				</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useUserStore } from '~~/stores/userStore';

const userStore = useUserStore();

const props = defineProps({
	isOpenModal: {
		type: Boolean,
		default: false,
	},
});
const emit = defineEmits(['closeSearch']);
const path = useRouter().currentRoute.value.fullPath;
const isShowSearch = ref(false);
const searchForm = ref({
	name: '',
	type: '',
	brand: '',
});
const resetForm = (form) => {
	for (const key in form.value) {
		form.value[key] = '';
	}
};
const handleOpenSearchForm = () => {
	isShowSearch.value = !isShowSearch.value;
};
const submitForm = async () => {
	userStore.userSearch = { ...searchForm.value };
	emit('closeSearch');
	resetForm(searchForm);
	if (!(path === '/search-result')) {
		await useRouter().push({ path: '/search-result' });
	}
};
</script>

<style scoped>
.searchForm {
	position: absolute;
	height: 0;
	width: 100%;
	overflow: hidden;
	left: 0;
	top: 100%;
	transition: all 0.3s;
}
.active {
	height: 300px;
}
</style>
