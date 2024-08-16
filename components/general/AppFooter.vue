<template>
	<footer class="bg-white order-last">
		<div
			class="container flex flex-wrap justify-between gap-12 my-12 md:gap-24">
			<div class="mr-auto">
				<div
					class="font-extrabold text-2xl cursor-pointer"
					@click="router.push('/')">
					AnyStore
				</div>
				<p class="mt-4 text-sm text-gray-700 xl:max-w-md">
					{{ $t('general.appDescription') }}
				</p>

				<GeneralLangSwitcher class="mt-8" />
			</div>
			<div class="w-3/7 lg:w-auto">
				<div class="mb-1 font-semibold">Information</div>
				<div class="text-sm">
					<a
						class="py-1.5 block"
						href="/"
						target="_blank"
						>About</a
					>
					<a
						href="/"
						class="py-1.5 block"
						>Careers</a
					>
					<a
						href="/"
						class="py-1.5 block"
						>Press</a
					>
					<a
						href="/"
						class="py-1.5 block"
						rel="noreferrer"
						target="_blank"
						>FAQ's</a
					>
				</div>
			</div>
			<div class="w-3/7 lg:w-auto">
				<div class="mb-1 font-semibold">Products</div>
				<div class="text-sm">
					<NuxtLink
						to="/products"
						class="py-1.5 block"
						>{{ $t('shop.newArrivals') }}</NuxtLink
					>
					<NuxtLink
						to="/products?filter=sale[true]"
						class="py-1.5 block"
						>On sale</NuxtLink
					>
					<NuxtLink
						to="/products?orderby=rating&order=ASC&filter=rating[1]"
						class="py-1.5 block"
						>Top rated</NuxtLink
					>
					<a
						href="/"
						class="py-1.5 block"
						>{{ $t('shop.giftCards') }}</a
					>
				</div>
			</div>
			<div class="w-3/7 lg:w-auto">
				<div class="mb-1 font-semibold">
					{{ $t('general.customerService') }}
				</div>
				<div class="text-sm">
					<NuxtLink
						to="/contact"
						class="py-1.5 block"
						>Contact Us</NuxtLink
					>
					<a
						href="/"
						class="py-1.5 block"
						>Shipping & Returns</a
					>
					<a
						href="/"
						class="py-1.5 block"
						>Privacy Policy</a
					>
					<a
						href="/"
						class="py-1.5 block"
						>Terms & Conditions</a
					>
				</div>
			</div>
			<div class="w-3/7 lg:w-auto">
				<div class="mb-1 font-semibold">
					{{ $t('account.myAccount') }}
				</div>
				<div class="text-sm">
					<NuxtLink
						to="/my-account/"
						class="py-1.5 block"
						>{{ $t('account.myAccount') }}</NuxtLink
					>
					<NuxtLink
						to="/my-account/?tab=orders"
						class="py-1.5 block"
						>{{ $t('shop.orderHistory') }}</NuxtLink
					>
					<NuxtLink
						:to="'/'"
						class="py-1.5 block"
						>{{ $t('shop.wishlist') }}</NuxtLink
					>
					<a
						href="/"
						class="py-1.5 block"
						>{{ $t('general.newsletter') }}</a
					>
				</div>
			</div>
		</div>
		<div class="container border-t flex items-center justify-center mb-4">
			<div class="copywrite">
				<p class="py-4 text-xs text-center">
					<a
						href="/"
						:title="``"
						>AnyStore</a
					>
					- by
					<a
						href="/"
						title="Thanh Dang - Web Developer"
						>Thanh Dang</a
					>
				</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { useRouter } from '#vue-router';

const router = useRouter();
</script>
