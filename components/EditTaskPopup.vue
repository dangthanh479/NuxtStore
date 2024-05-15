<template>
	<div
		class="absolute inset-0 w-1/2 h-1/2 mx-auto my-auto bg-gray-500 p-5 rounded-lg flex items-center justify-center flex-col">
		<p class="mb-4 font-bold uppercase">Edit Task popup</p>
		<div>
			<div>
				<div class="mb-5">
					<input
						type="text"
						placeholder="name"
						v-model="task.name" />
				</div>
				<div>
					<input
						type="text"
						placeholder="description"
						v-model="task.description" />
				</div>
			</div>
			<div class="flex justify-center mt-5">
				<button
					@click="editTask"
					class="btn mr-3">
					Submit
				</button>
				<button
					class="btn bg-red-500"
					@click="closePopup">
					Close
				</button>
			</div>
		</div>
		<p
			v-if="errorMessage"
			class="text-red-400">
			{{ errorMessage }}
		</p>
	</div>
</template>

<script setup>
const props = defineProps(['data', 'isOpen', 'errors']);
const emit = defineEmits(['close', 'submit']);

const errorMessage = computed(() => {
	return props.errors;
});

const task = ref(props.data ?? null);

const editTask = async () => {
	emit('submit', task.value);
};

const closePopup = () => {
	emit('close');
};
</script>

<style lang="scss" scoped></style>
