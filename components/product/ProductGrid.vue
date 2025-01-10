<template>
	<Transition
		name="fade"
		mode="out-in">
		<section v-if="!!products.length" class="relative w-full">
      <TransitionGroup
			name="shrink"
			tag="div"
			mode="in-out"
			class="product-grid">
			<div
				v-for="(product, i) in products"
				:key="product.id || i">
				<ProductCard :node="product" />
			</div>
		</TransitionGroup>
    <Pagination :total-pages="productAllPages" :current-page="productCurrentPage" />
    </section>
	</Transition>
</template>

<script setup>
const { products, productAllPages, productCurrentPage } = useProducts();
console.log(productAllPages, 1111)
</script>

<style lang="scss" scoped>
.product-grid:empty {
	display: none;
}

@media (min-width: 768px) {
	.product-grid {
		grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
	}
}

.shrink-move {
	transition: all 400ms;
}

.shrink-leave-active {
	transition: transform 300ms;
	position: absolute;
	opacity: 0;
}

.shrink-enter-active {
	transition: opacity 400ms ease-out 200ms, transform 400ms ease-out;
	will-change: opacity, transform;
}

.shrink-enter,
.shrink-leave-to,
.shrink-enter-from {
	opacity: 0;
	transform: scale(0.75) translateY(25%);
}
</style>
