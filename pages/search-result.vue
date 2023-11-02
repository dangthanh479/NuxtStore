<template>
	<div>
		<div>name: {{ searchValue ? searchValue.name : '' }}</div>
		<div>type: {{ searchValue ? searchValue.type : '' }}</div>
		<div>brand: {{ searchValue ? searchValue.brand : '' }}</div>
		<div class="photobanner">
			<div>
				<img
					class="first"
					src="https://source.unsplash.com/user/erondu/350x233"
					alt="" />
				<img
					src="https://source.unsplash.com/user/erondu/350x233 "
					alt="" />
				<img
					src="https://source.unsplash.com/user/erondu/350x233 "
					alt="" />
				<img
					src="https://source.unsplash.com/user/erondu/350x233 "
					alt="" />
				<img
					src="https://source.unsplash.com/user/erondu/350x233 "
					alt="" />
				<img
					src="https://source.unsplash.com/user/erondu/350x233 "
					alt="" />
				<img
					src="https://source.unsplash.com/user/erondu/350x233 "
					alt="" />
			</div>
		</div>
		<div class="photobanner2">
			<div>
				<img
					class="first"
					src="https://source.unsplash.com/user/erondu/350x233"
					alt="" />
				<img
					src="https://source.unsplash.com/user/erondu/350x233 "
					alt="" />
				<img
					src="https://source.unsplash.com/user/erondu/350x233 "
					alt="" />
				<img
					src="https://source.unsplash.com/user/erondu/350x233 "
					alt="" />
				<img
					src="https://source.unsplash.com/user/erondu/350x233 "
					alt="" />
				<img
					src="https://source.unsplash.com/user/erondu/350x233 "
					alt="" />
				<img
					src="https://source.unsplash.com/user/erondu/350x233 "
					alt="" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { useUserStore } from '#imports';

definePageMeta({
	layout: 'products',
});

const userStore = useUserStore();
const searchValue = ref({
	name: '',
	type: '',
	brand: '',
});
if (userStore.userSearch) {
	searchValue.value = userStore.userSearch;
}
watch(
	() => userStore.userSearch,
	(newValue) => {
		searchValue.value = newValue;
	},
	{ immediate: true },
);
onMounted(() => {
	const speed = 1; // 2 pixels per frame at 60 frames per second
	const banner = document.getElementsByClassName('photobanner')[0];
	const bannerLine2 = document.getElementsByClassName('photobanner2')[0];
	// build images array
	let images = [...banner.getElementsByTagName('img')];
	let imagesLine2 = [...bannerLine2.getElementsByTagName('img')];

	// initialize images positions
	let rects = images.map((img, index) => {
		const style = getComputedStyle(img);
		const rect = {
			left: index * 350,
			top: 0,
			width: 350,
			height: parseInt(style.height, 10),
		};
		return rect;
	});
	let rectsLine2 = imagesLine2.map((img, index) => {
		const style = getComputedStyle(img);
		const rect = {
			left: index * 350,
			top: 0,
			width: 350,
			height: parseInt(style.height, 10),
		};
		return rect;
	});
	function animate() {
		const l = images.length;
		for (let i = 0; i < l; i++) {
			const img = images[i];
			const rect = rects[i];
			rect.left -= speed;
			if (rect.left + rect.width < 0) {
				// this image if fully overflowing left, put it at the end of the image list both in position and in images and rects
				const lastRect = rects[rects.length - 1];
				rect.left = lastRect.left + lastRect.width;
				images = images.slice(1, l);
				images.push(img);
				rects = rects.slice(1, l);
				rects.push(rect);
				i--;
			}
			// change the actual image style according to new rect value
			img.style.right = rect.left + 'px';
		}
		requestAnimationFrame(animate);
	}
	function animateLine2() {
		const l = imagesLine2.length;
		for (let i = 0; i < l; i++) {
			const img = imagesLine2[i];
			const rect = rectsLine2[i];
			rect.left -= speed;
			if (rect.left + rect.width < 0) {
				// this image if fully overflowing left, put it at the end of the image list both in position and in imagesLine2 and rectsLine2
				const lastRect = rectsLine2[rectsLine2.length - 1];
				rect.left = lastRect.left + lastRect.width;
				imagesLine2 = imagesLine2.slice(1, l);
				imagesLine2.push(img);
				rectsLine2 = rectsLine2.slice(1, l);
				rectsLine2.push(rect);
				i--;
			}
			// change the actual image style according to new rect value
			img.style.left = rect.left + 'px';
		}
		requestAnimationFrame(animateLine2);
	}

	animate();
	animateLine2();
});
</script>

<style scoped>
.photobanner {
	position: relative;
	height: 233px;
	width: 100%;
	overflow: hidden;
}

.photobanner img {
	top: 0px;
	width: 350px;
	box-shadow: 2px 2px 8px #8a8a8a;
	position: absolute;
}
.photobanner2 {
	position: relative;
	height: 233px;
	width: 100%;
	overflow: hidden;
}

.photobanner2 img {
	top: 0px;
	width: 350px;
	box-shadow: 2px 2px 8px #8a8a8a;
	position: absolute;
}
</style>
