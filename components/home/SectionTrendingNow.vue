<template>
	<section class="my-36">
		<div class="grid grid-cols-3 gap-4">
			<div class="flex flex-col items-center justify-center">
				<div class="dancing-font text-4xl font-bold mb-4 text-center">
					{{ $t('general.section3') }}
				</div>
				<div class="mb-4 text-center">
					{{ $t('general.section3Description') }}
				</div>
				<div>
					<NuxtLink
						class="click-link"
						to="/categories"
						>{{ $t('shop.shopNow') }}</NuxtLink
					>
				</div>
			</div>
			<NuxtImg
				class="object-cover w-full h-80 col-span-2"
				src="/images/section3.jpg"
				alt="section3" />
		</div>
	</section>
</template>
