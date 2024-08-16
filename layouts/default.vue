<template>
	<div>
		<!-- <header class="shadow-sm bg-[#fff4e3]">
			<nav class="container mx-auto p-4 flex justify-between items-center">
				<div
					class="font-extrabold text-2xl cursor-pointer"
					@click="router.push('/')">
					AnyStore
				</div>
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
							to="/tasks"
							>Tasks</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							to="/products"
							class="btn"
							>Shop</NuxtLink
						>
					</li>
				</ul>
			</nav>
		</header> -->
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
