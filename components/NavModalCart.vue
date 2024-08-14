<template>
	<div class="select-none">
		<div class="cart-icon relative">
			<i class="fa-solid fa-cart-shopping cursor-pointer"></i>
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
					<div
						class="mx-auto border border-solid rounded-2xl bg-green-100 text-green-600 px-5 py-1">
						<i class="fa-solid fa-bag-shopping"></i>
						{{ itemsInCartMessage }}
					</div>
					<div class="overflow-y-auto my-4 h-96 h-[230px]">
						<div
							v-for="(item, index) in cartStore.cart"
							:key="index + item.id">
							<div class="flex items-center mb-1 font-bold">
								<div class="w-20 mr-4">
									<img
										:src="`${item.image}`"
										alt=""
										class="h-16 w-16" />
								</div>
								<div class="flex-1 text-left mr-4">
									<div>{{ item.title }}</div>
									<div class="text-gray-400">{{ item.category }}</div>
									<div class="flex justify-between">
										<div>$ {{ item.price }}</div>
										<div>
											<button
												class="btn w-8"
												@click="decreaseQuantity(item.id)">
												-
											</button>
											<span class="mx-2">{{ item.quantity }}</span>
											<button
												class="btn w-8"
												@click="increaseQuantity(item.id)">
												+
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr class="divider my-2" />
				</div>
				<div>
					<div class="flex justify-between">
						<div class="text-gray-400">{{ CART.PRICE }}:</div>
						<div class="font-bold">$ {{ cartStore.getCartPrice() }}</div>
					</div>
					<div class="flex justify-between">
						<div class="text-gray-400">{{ CART.DISCOUNT }}:</div>
						<div class="font-bold">- $ {{ cartStore.getCartDiscount() }}</div>
					</div>
					<hr class="divider my-2" />
					<div class="flex justify-between">
						<div class="text-gray-400">{{ CART.TOTAL }}:</div>
						<div class="font-bold">$ {{ cartStore.getTotalPrice() }}</div>
					</div>
					<div
						class="btn-checkout"
						@click="goToCheckoutPage">
						{{ CART.CHECKOUT }}
					</div>
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

const itemsInCartMessage = computed(() =>
	CART.getItemsInCartMessage(cartStore.cart.length),
);

const increaseQuantity = (productId) => {
	const product = cartStore.cart.find((item) => item.id === productId);
	if (product) {
		cartStore.addItemToCart(product);
	}
};

const decreaseQuantity = (productId) => {
	cartStore.removeItemFromCart(productId);
};

const goToCheckoutPage = () => {
	router.push('/checkout');
};
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
