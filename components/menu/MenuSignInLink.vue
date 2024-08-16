<template>
	<NuxtLink
		to="/my-account"
		class="hidden sm:inline-flex aspect-square items-center">
		<Transition
			name="pop-in"
			mode="out-in">
			<span
				v-if="avatar"
				class="relative avatar">
				<img
					src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/11/avatar-vo-tri-thumbnail.jpg"
					class="rounded-full transform scale-125 shadow-md overflow-hidden border border-white my-auto"
					width="22"
					height="22"
					alt="avatar" />
				<div class="account-dropdown">
					<NuxtLink
						to="/"
						class="hover:bg-gray-100"
						><i class="fa-regular fa-heart"></i
					></NuxtLink>
					<NuxtLink
						to="/my-account"
						class="hover:bg-gray-100"
						><i class="fa-solid fa-user"></i
					></NuxtLink>
					<button
						class="text-red-600 hover:bg-red-50"
						@click.prevent="logoutUser">
						<i class="fa-solid fa-arrow-right-from-bracket"></i>
						<span>Logout</span>
					</button>
				</div>
			</span>
			<i
				v-else
				class="fa-solid fa-user border border-transparent"></i>
		</Transition>
	</NuxtLink>
</template>

<script setup lang="ts">
const avatar = null;
const logoutUser = () => {
	//
};
</script>

<style scoped lang="scss">
.pop-in-enter-active,
.pop-in-leave-active {
	transition: transform 0.3s;
}

.pop-in-enter-from,
.pop-in-leave-to {
	transform: scale(0);
}
</style>
