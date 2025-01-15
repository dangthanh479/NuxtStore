<template>
	<div>
		<GeneralAppHeader />
		<div>
			<slot />
		</div>
		<div class="w-full bg-[#fff]">
			<LazyGeneralAppFooter class="container mx-auto p-4" />
		</div>
	</div>
</template>

<script setup>
import { useRouter } from '#vue-router';

const router = useRouter();
</script>
<style>
.router-link-exact-active {
	color: #581b98;
	font-weight: 600;
}
/* Slide-from-right & Slide-from-left */
.slide-from-right-leave-active,
.slide-from-right-enter-active,
.slide-from-left-leave-active,
.slide-from-left-enter-active {
	transition: transform 300ms ease-in-out;
}

.slide-from-right-enter-from,
.slide-from-right-leave-to {
	transform: translateX(500px);
}

.slide-from-left-enter-from,
.slide-from-left-leave-to {
	transform: translateX(-500px);
}

/* Fade */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 300ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
