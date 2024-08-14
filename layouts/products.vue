<template>
	<div class="min-h-screen flex flex-col justify-between">
		<div
			v-if="isShowWrapper"
			@click="handleWrapperClick"
			class="wrapper bg-[black] opacity-70"></div>
		<header class="shadow-sm relative p-4 bg-[#fff4e3]">
			<nav class="container mx-auto flex justify-between">
				<NuxtLink
					to="/"
					class="font-extrabold text-2xl cursor-pointer"
					>AnyStore</NuxtLink
				>
				<ul class="flex gap-4 items-center">
					<li>
						<NuxtLink
							class="router-link"
							to="/"
							>Home</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							class="router-link"
							to="/about"
							>About</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							class="router-link"
							to="/products"
							>Shop</NuxtLink
						>
					</li>
				</ul>
				<ul class="flex gap-4 items-center">
					<li>
						<NavModalSearch
							:isOpenModal="isOpenSearch"
							@click="toggleModal('search')" />
					</li>
					<li>
						<NavModalWishList
							:isOpenModal="isOpenWishList"
							@click="toggleModal('wishlist')" />
					</li>
					<li>
						<NavModalCart
							:isOpenModal="isOpenCart"
							@click="toggleModal('cart')" />
					</li>
				</ul>
			</nav>
		</header>
		<div class="container mx-auto p-4">
			<slot />
		</div>
		<footer class="container mx-auto p-4 flex justify-between border-t-2">
			© 2023 AnyStore. All rights reserved.
		</footer>
	</div>
</template>

<script setup>
import NavModalCart from '~/components/NavModalCart.vue';
import NavModalSearch from '~/components/NavModalSearch.vue';
import NavModalWishList from '~/components/NavModalWishList.vue';

const isOpenSearch = ref(false);
const isOpenWishList = ref(false);
const isOpenCart = ref(false);
const isShowWrapper = ref(false);

const modalStates = {
	search: isOpenSearch,
	wishlist: isOpenWishList,
	cart: isOpenCart,
};

const toggleModal = (modal) => {
	Object.keys(modalStates).forEach((key) => {
		if (key !== modal) {
			modalStates[key].value = false;
		}
	});
	modalStates[modal].value = !modalStates[modal].value;
	isShowWrapper.value = Object.values(modalStates).some((state) => state.value);
};

const handleWrapperClick = () => {
	Object.values(modalStates).forEach((state) => {
		state.value = false;
	});
	isShowWrapper.value = false;
};
</script>

<style scoped>
.wrapper {
	position: absolute;
	content: ' ';
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.router-link-exact-active {
	color: #581b98;
	font-weight: 600;
}
</style>
