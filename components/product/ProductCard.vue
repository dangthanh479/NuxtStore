<template>
  <div class="relative product-card">
    <NuxtLink :to="`/products/${node.id}`" :title="node.name">
      <ProductSaleBadge :node="node" class="absolute top-2 right-2" />
      <NuxtImg
        v-if="imagetoDisplay"
        :width="imgWidth"
        :height="imgHeight"
        :src="imagetoDisplay"
        :alt="node.name || 'Product image'"
        :title="node.name"
        :loading="index <= 3 ? 'eager' : 'lazy'"
        placeholder
        placeholder-class="blur-xl" />
    </NuxtLink>
    <div class="p-2">
      <NuxtLink :to="`/products/${node.id}`" :title="node.name">
        <h2 class="mb-2 font-light leading-tight">{{ node.name }}</h2>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '~/types';

const route = useRoute();
const { storeSettings } = useAppConfig();
const props = defineProps({
  node: { type: Object as PropType<Product>, required: true },
  index: { type: Number, default: 1 },
});

const imgWidth = 500;
const imgHeight = Math.round(imgWidth * 1.125);

// example: ?filter=pa_color[green,blue],pa_size[large]
const filterQuery = ref(route.query?.filter as string);
const paColor = ref(filterQuery.value?.split('pa_color[')[1]?.split(']')[0]?.split(',') || []);

// watch filterQuery
watch(
  () => route.query,
  () => {
    filterQuery.value = route.query.filter;
    paColor.value = filterQuery.value?.split('pa_color[')[1]?.split(']')[0]?.split(',') || [];
  },
);

const mainImage = computed<string>(() => props.node?.image || '/images/placeholder.jpg');
const imagetoDisplay = computed<string>(() => {
  // if (paColor.value.length) {
  //   const activeColorImage = props.node?.variations?.nodes.filter((variation) => {
  //     const hasMatchingAttributes = variation.attributes?.nodes.some((attribute) => paColor.value.some((color) => attribute.value.includes(color)));
  //     const hasMatchingSlug = paColor.value.some((color) => variation.slug?.includes(color));
  //     return hasMatchingAttributes || hasMatchingSlug;
  //   });
  //   if (activeColorImage?.length) return activeColorImage[0].image?.producCardSourceUrl || activeColorImage[0].image?.sourceUrl || mainImage.value;
  // }
  return mainImage.value;
});
</script>
