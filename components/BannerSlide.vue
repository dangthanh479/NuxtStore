<template>
	<div>
		<Carousel
			ref="carousel"
			class="carousel"
			wrapAround
			:itemsToShow="1"
			:infiniteScroll="true"
			:loop="true"
			:autoplayTimeout="0"
			:autoplay="3000"
			:modelValue="currentSlide"
			@update:modelValue="changeEditModel">
			<Slide
				v-for="item in bannerItems"
				:key="item.id">
				<div class="relative w-full">
					<img
						:src="item.link"
						alt="img"
						class="w-full h-[70vh] object-cover brightness-[50%]" />
					<div
						class="w-full absolute top-1/2 left-0 text-white flex flex-col items-center xl:items-start xl:pl-32 translate-y-[-50%]">
						<div class="text-5xl font-bold mb-4">
							{{ item.title }}
						</div>
						<div class="opacity-70 mb-4">
							{{ item.description }}
						</div>
						<NuxtLink :to="`/products`" class="btn w-40 py-3 font-bold text-lg">Shop now</NuxtLink>
					</div>
				</div>
			</Slide>
		</Carousel>
	</div>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel/dist/carousel.es.js';
import 'vue3-carousel/dist/carousel.css';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/3.jpg';
import image4 from '@/assets/images/4.jpg';
import image5 from '@/assets/images/5.jpg';

const { t } = useI18n();

const bannerItems = computed(() => [
	{
		id: 1,
		link: image2,
		title: t('banner.banner1Title'),
		description: t('banner.banner1Description'),
	},
	{
		id: 2,
		link: image3,
		title: t('banner.banner2Title'),
		description: t('banner.banner2Description'),
	},
	{
		id: 3,
		link: image4,
		title: t('banner.banner3Title'),
		description: t('banner.banner3Description'),
	},
	{
		id: 4,
		link: image5,
		title: t('banner.banner4Title'),
		description: t('banner.banner4Description'),
	},
]);

const currentSlide = ref(0); // Set your initial slide index here

const changeEditModel = (newSlide) => {
	// Handle event
};
</script>

<style scoped></style>
