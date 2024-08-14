<template>
	<div>
		<BannerSlide />
		<BrandLogo />
		<SectionCategories />
	</div>
</template>

<script setup>
definePageMeta({
	middleware: 'check-user-agent',
});
const { data: users } = await useFetch('/api/users', {
	method: 'POST',
	body: {
		itemType: '11',
	},
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
