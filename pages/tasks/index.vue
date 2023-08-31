<template>
	<div class="mb-4 font-bold uppercase">Create new tasks</div>
	<form
		@submit.prevent="addTask"
		class="mb-10">
		<input
			type="text"
			placeholder="name"
			v-model="formData.name" />
		<input
			type="text"
			placeholder="description"
			v-model="formData.description" />
		<button
			type="submit"
			class="btn">
			Submit
		</button>
		<p
			v-if="error"
			class="text-red-600">
			Pls enter name + description
		</p>
	</form>
	<div class="mb-4 font-bold uppercase">All tasks</div>
	<div
		v-for="task in allTasks"
		:key="task.id">
		<div
			class="bg-gray-300 p-5 rounded-lg mb-3 flex items-center justify-between">
			<div>Name: {{ task.name }} - description: {{ task.description }}</div>
			<div>
				<div
					class="btn mr-4"
					@click="openPopupEdit(task)">
					Edit
				</div>
				<div
					class="btn bg-red-500"
					@click="removeTask(task.id)">
					Remove
				</div>
			</div>
		</div>
	</div>
	<EditTaskPopup
		v-if="isOpenPopup"
		@close="isOpenPopup = false"
		:data="data" />
</template>

<script setup>
import { onMounted } from 'vue';
import { db } from './../../composables/firebase';
import {
	collection,
	getDocs,
	addDoc,
	orderBy,
	query,
	deleteDoc,
	doc,
} from 'firebase/firestore';

const allTasks = ref([]);
const data = ref({});
const formData = ref({
	name: '',
	description: '',
	createdDate: new Date(),
});
const isOpenPopup = ref(false);
const error = ref(false);

const addTask = async () => {
	if (Object.values(formData.value).some((value) => value === '')) {
		error.value = true;
		return;
	} else {
		error.value = false;
		await addDoc(collection(db, 'tasks'), formData.value);
		window.location.reload();
	}
};

const openPopupEdit = (task) => {
	data.value = task;
	isOpenPopup.value = true;
};

const removeTask = async (id) => {
	await deleteDoc(doc(db, 'tasks', id));
	window.location.reload();
};

onMounted(async () => {
	let tasks = await getDocs(
		query(collection(db, 'tasks'), orderBy('createdDate')),
	);
	tasks.forEach((task) => {
		allTasks.value.push({ ...task.data(), id: task.id });
	});
});
</script>

<style lang="scss" scoped></style>
