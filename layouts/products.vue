<template>
	<div>
		<div
			v-if="isShowWrapper"
			@click="handleWrapperClick"
			class="wrapper bg-[black] opacity-70"></div>
		<header class="shadow-sm relative p-4 bg-[#fff4e3]">
			<nav class="container mx-auto flex justify-between">
				<NuxtLink
					to="/"
					class="font-bold"
					>Nuxt Store</NuxtLink
				>
				<ul class="flex gap-4 items-center">
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/about">About</NuxtLink></li>
					<li>
						<NuxtLink
							to="/products"
							class="btn"
							>Store</NuxtLink
						>
					</li>
					<!-- <li>
						<NuxtLink to="/search-result">Result</NuxtLink>
					</li> -->
					<li class="cursor-pointer">
						<SearchModal
							:isOpenModal="isOpenSearch"
							@click="toggleModal('search')" />
					</li>
					<li class="cursor-pointer">
						<CartModal
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
			<ul class="flex gap-4 items-center">
				<li><NuxtLink to="/">Home</NuxtLink></li>
				<li><NuxtLink to="/about">About</NuxtLink></li>
				<li>
					<NuxtLink
						to="/products"
						class="btn"
						>Store</NuxtLink
					>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script setup>
const isOpenSearch = ref(false);
const isOpenCart = ref(false);
const isShowWrapper = ref(false);

const toggleModal = (modal) => {
	if (modal === 'search') {
		isOpenSearch.value = !isOpenSearch.value;
		if (isOpenSearch.value) {
			isOpenCart.value = false;
		}
	} else if (modal === 'cart') {
		isOpenCart.value = !isOpenCart.value;
		if (isOpenCart.value) {
			isOpenSearch.value = false;
		}
	}
	isShowWrapper.value = isOpenSearch.value || isOpenCart.value;
};

const handleWrapperClick = () => {
	isOpenSearch.value = false;
	isOpenCart.value = false;
	isShowWrapper.value = false;
};
</script>

<style scoped>
.wrapper {
	position: absolute;
	width: 100%;
	height: 100vh;
}
.router-link-exact-active {
	color: #581b98;
}
</style>
