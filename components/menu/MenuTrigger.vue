<template>
	<div class="mr-4 cursor-pointer">
		<div @click="toggleMobileMenu">
			<i class="fa-solid fa-bars"></i>
		</div>
	</div>
</template>

<script setup>
const { toggleMobileMenu } = useHelpers();
</script>
