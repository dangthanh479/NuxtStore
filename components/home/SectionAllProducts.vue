<template>
	<section class="my-36">
		<div class="relative flex justify-center items-center">
			<NuxtImg
				class="object-cover w-screen h-80 brightness-[50%]"
				src="/images/bg1.webp"
				alt="section3"
				loading="" />
			<div class="absolute flex flex-col items-center text-white">
				<div class="dancing-font text-4xl font-bold mb-4">
					{{ $t('general.section2') }}
				</div>
				<div class="mb-4">{{ $t('general.section2Description') }}</div>
				<div>
					<NuxtLink
						class="click-link"
						to="/categories"
						>{{ $t('general.explore') }}</NuxtLink
					>
				</div>
			</div>
		</div>
	</section>
</template>
