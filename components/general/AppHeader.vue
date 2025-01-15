<template>
	<header class="sticky top-0 z-40 bg-[#F6F1EB] shadow-sm shadow-light-500">
		<div
			class="container px-4 mx-auto flex items-baseline justify-between py-4">
			<div class="flex items-center">
				<MenuTrigger class="lg:hidden" />
				<div
					class="font-extrabold text-2xl cursor-pointer"
					@click="router.push('/')">
					AnyStore
				</div>
			</div>
			<MenuMain
				class="items-center hidden gap-6 text-sm text-gray-500 lg:flex lg:px-4" />
			<div
				class="flex justify-end items-center md:w-[160px] flex-1 ml-auto gap-4 md:gap-6">
				<div class="flex gap-4 items-center">
					<MenuSignInLink />
					<CartTrigger />
				</div>
			</div>
		</div>
		<Transition
			name="scale-y"
			mode="out-in">
			<div
				class="container mb-3 -mt-1 sm:hidden"
				v-if="isShowingSearch"></div>
		</Transition>
		<Transition name="slide-from-left">
			<MenuMobileMenu v-if="isShowingMobileMenu" />
		</Transition>
	</header>
</template>

<script setup lang="ts">
const { isShowingSearch } = useSearch();
const { isShowingMobileMenu } = useHelpers();

const router = useRouter();
</script>
