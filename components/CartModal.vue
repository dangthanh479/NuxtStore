<template>
	<div class="select-none">
		<div
			@click="handleOpenModal"
			class="cart-icon relative">
			<i class="fa-solid fa-cart-shopping"></i>
			<div class="absolute">{{ cartStore.cart.length }}</div>
		</div>
		<div
			:class="{ active: props.isOpenModal }"
			@click.stop=""
			class="cart flex flex-col items-center justify-center bg-[#fff4e3]">
			<div class="flex flex-col justify-between">
				<div>
					<div>My Cart</div>
					<div
						class="border border-solid rounded-2xl bg-green-100 text-green-600 px-5 py-1">
						<i class="fa-solid fa-bag-shopping"></i>
						You have {{ cartStore.cart.length }} items in your cart
					</div>
					<div class="overflow-y-auto mt-12 h-96 max-h-[200px]">
						<div
							v-for="(item, index) in cartStore.cart"
							:key="index + item.id">
							<div class="flex justify-between items-between">
								<div>
									<img
										:src="`${item.image}`"
										class="h-12 w-12" />
								</div>
								<div>Ten sp + price</div>
								<div>Button +/-</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div>Price: $102</div>
					<div>Discounts: $2</div>
					<div>Total: $100</div>
					<div>Checkout Button</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore';

const props = defineProps({
	isOpenModal: {
		type: Boolean,
		default: false,
	},
});
const emit = defineEmits(['closeModal']);

const cartStore = useCartStore();
const isShowModal = ref(false);
const path = useRouter().currentRoute.value.fullPath;
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
const handleOpenModal = () => {
	isShowModal.value = !isShowModal.value;
};
const submitForm = async () => {
	userStore.userSearch = { ...searchForm.value };
	emit('closeModal');
	resetForm(searchForm);
	if (!(path === '/search-result')) {
		await useRouter().push({ path: '/search-result' });
	}
};
</script>

<style scoped>
.cart {
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
