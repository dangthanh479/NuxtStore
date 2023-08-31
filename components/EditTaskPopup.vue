<template>
	<div
		class="absolute inset-0 w-1/2 h-1/2 mx-auto my-auto bg-gray-500 p-5 rounded-lg flex items-center justify-center flex-col">
		<p class="mb-4 font-bold uppercase">Edit Task popup</p>
		<form
			@submit.prevent="addTask"
			class="">
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
					type="submit"
					class="btn mr-3">
					Submit
				</button>
				<button
					type="submit"
					class="btn bg-red-500"
					@click="closePopup">
					Close
				</button>
			</div>
		</form>
		<p
			v-if="error"
			class="text-red-400">
			Pls enter name + description
		</p>
	</div>
</template>

<script setup>
import { db } from '../composables/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const props = defineProps(['data']);
const emit = defineEmits(['close']);
const error = ref(false);

const task = ref({
	name: 'init name',
	description: 'init description',
	createdDate: new Date(),
});

onMounted(() => {
	task.value = { ...props.data };
});

const editTask = async () => {
	if (Object.values(task.value).some((value) => value === '')) {
		error.value = true;
		return;
	} else {
		error.value = false;
		await updateDoc(doc(db, 'tasks', props.data.id), task.value);
		window.location.reload();
	}
};

const closePopup = () => {
	emit('close');
};
</script>

<style lang="scss" scoped></style>
