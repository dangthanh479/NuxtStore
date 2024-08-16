<template>
	<div class="text-center">TODO: {{ slug }} page</div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;
</script>

<style scoped></style>
