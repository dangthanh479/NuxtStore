<template>
  <span v-if="showSaleBadge" class="red-badge">{{ textToDisplay }}</span>
</template>

<script setup lang="ts">
import { Product } from '~/types';

const { t } = useI18n();
const { node } = defineProps({
  node: { type: Object as PropType<Product>, required: true },
});

const { storeSettings } = useAppConfig();

const salePercentage = computed((): string => {
  if (!node?.price || !node?.priceOld) return '';
  const salePrice = Number(node?.price);
  const regularPrice = Number(node?.priceOld);
  return Math.round(((salePrice - regularPrice) / regularPrice) * 100) + ` %`;
});

const showSaleBadge = computed(() => node.price && storeSettings.saleBadge !== 'hidden');

const textToDisplay = computed(() => {
  if (storeSettings?.saleBadge === 'percent') return salePercentage.value;
  return t('shop.onSale') ? t('shop.onSale') : t('shop.sale');
});
</script>

<style lang="postcss" scoped>
.red-badge {
  @apply rounded-md bg-red-400 text-xs text-white tracking-tight px-1.5 leading-6 z-10;
  background: #000 linear-gradient(0deg, #f87171, #f87171);
}
</style>
