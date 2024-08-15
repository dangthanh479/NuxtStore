<template>
	<div>
		<LazyBannerSlide class="container mx-auto p-4" />
		<LazyBrandLogo class="container mx-auto p-4" />
		<LazyHomeSectionCategories class="container mx-auto p-4" />
		<LazyHomeSectionTrendingNow class="container mx-auto p-4" />
		<LazyHomeSectionAllProducts />
	</div>
</template>

<script setup>
definePageMeta({
	middleware: 'check-user-agent',
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
