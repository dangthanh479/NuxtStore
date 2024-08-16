<template>
	<nav>
		<NuxtLink to="/">{{ $t('general.home') }}</NuxtLink>
		<NuxtLink to="/products">{{ $t('general.allProducts') }}</NuxtLink>
		<NuxtLink to="/categories">{{ $t('shop.category', 2) }}</NuxtLink>
		<NuxtLink to="/contact">{{ $t('general.contact') }}</NuxtLink>
		<NuxtLink
			class="lg:hidden"
			to="/"
			:prefetch="false"
			>Wishlist</NuxtLink
		>
		<NuxtLink
			class="lg:hidden"
			to="/my-account"
			:prefetch="false"
			>My Account</NuxtLink
		>
	</nav>
</template>

<script setup lang="ts"></script>
