<template>
	<div>
		<div class="flex justify-center items-center">
			<div
				class="w-full h-1/2 shadow-md rounded-lg overflow-hidden bg-gray-100">
				<div class="flex items-center">
					<div class="p-4 w-1/2">
						<h1 class="text-3xl font-bold text-gray-800 mb-4">
							Congratulations!!
						</h1>
						<p class="font-semibold mb-2 text-xl">You have paid successfully</p>
						<p class="text-base text-gray-400">
							You will never miss important product updates, latest news and
							community QA sessions. Our newsletter is once a week, every
							Sunday.
						</p>

						<div class="flex mt-4">
							<button class="text-white font-bold btn px-8">
								View Products
							</button>
						</div>
					</div>
					<div class="flex-1">
						<img
							src="./../assets/images/checkout.svg"
							alt="Congratulations"
							class="w-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'products',
});
</script>
