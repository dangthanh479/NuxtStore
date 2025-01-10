<template>
	<div>
		<Transition name="slide-from-right">
			<LazyCartSide v-if="isShowingCart" />
		</Transition>
		<LazyBannerSlide class="container mx-auto p-4" />
		<LazyBrandLogo class="container mx-auto p-4" />
		<LazyHomeSectionCategories class="container mx-auto p-4" />
		<LazyHomeSectionTrendingNow class="container mx-auto p-4" />
		<LazyHomeSectionNewProducts />
	</div>
</template>

<script setup>
definePageMeta({
	middleware: 'check-user-agent',
});

const { siteName, description, shortDescription, siteImage } = useAppConfig();
const route = useRoute();
const { isShowingCart, toggleCart } = useCart();
const { isShowingMobileMenu, toggleMobileMenu, addBodyClass, removeBodyClass } =
	useHelpers();
const closeCartAndMenu = () => {
	toggleCart(false);
	toggleMobileMenu(false);
};

watch([isShowingCart, isShowingMobileMenu], () => {
	isShowingCart.value || isShowingMobileMenu.value
		? addBodyClass('overflow-hidden')
		: removeBodyClass('overflow-hidden');
});

watch(
	() => route.path,
	() => closeCartAndMenu(),
);

useSeoMeta({
  title: `Home`,
  ogTitle: siteName,
  description: description,
  ogDescription: shortDescription,
  ogImage: siteImage,
  twitterCard: `summary_large_image`,
});
</script>

<style lang="scss" scoped>
h2 {
	margin-bottom: 20px;
	font-size: 36px;
}
p {
	margin: 20px 0;
}
</style>
