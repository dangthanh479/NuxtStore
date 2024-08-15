<template>
	<div>
		<header class="shadow-sm bg-[#fff4e3]">
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
		</header>
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
<style scoped>
.router-link-exact-active {
	color: #581b98;
	font-weight: 600;
}
</style>
