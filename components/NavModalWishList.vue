<template>
	<div class="select-none">
		<div class="cart-icon relative">
			<i class="fa-solid fa-heart cursor-pointer"></i>
			<div class="cart-notification">
				{{ cartStore.cart.length }}
			</div>
		</div>
		<div
			:class="{ active: props.isOpenModal }"
			@click.stop=""
			class="cart text-center h-full flex flex-col items-center justify-center bg-[#fff4e3]">
			<div class="flex flex-col justify-between w-full px-8">
				<div>
					<div class="text-center font-bold">{{ CART.MY_CART }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore';
import { CART } from '~/const/const';

const props = defineProps({
	isOpenModal: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(['closeModal']);

const cartStore = useCartStore();
const router = useRouter();
</script>

<style scoped>
.cart {
	position: absolute;
	height: 0;
	width: 600px;
	overflow: hidden;
	right: 0;
	top: 100%;
	transition: all 0.3s;
}
.active {
	height: 500px;
}
</style>
