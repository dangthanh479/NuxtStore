<template>
	<div>
		<header class="shadow-sm bg-[#fff4e3]">
			<nav class="container mx-auto p-4 flex justify-between">
				<NuxtLink
					to="/"
					class="font-bold"
					>Nuxt Store</NuxtLink
				>
				<ul class="flex gap-4 items-center">
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/about">About</NuxtLink></li>
					<li><NuxtLink to="/tasks">Tasks</NuxtLink></li>
					<li>
						<NuxtLink
							to="/products"
							class="btn"
							>Store</NuxtLink
						>
					</li>
				</ul>
			</nav>
		</header>
		<div class="container mx-auto p-4">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.router-link-exact-active {
	color: #581b98;
}
</style>
