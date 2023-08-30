<template>
	<div>this is Tasks page</div>
	<form @submit.prevent="submitForm">
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
	</form>
	<div
		v-for="task in allTasks"
		:key="task.id">
		Name: {{ task.name }} - description: {{ task.description }}
	</div>
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
} from 'firebase/firestore';

const allTasks = ref([]);

onMounted(async () => {
	let tasks = await getDocs(
		query(collection(db, 'tasks'), orderBy('createdDate')),
	);
	tasks.forEach((task) => {
		allTasks.value.push({ ...task.data(), id: task.id });
	});
});

const formData = ref({
	name: '',
	description: '',
	createdDate: new Date(),
});
const submitForm = async () => {
	await addDoc(collection(db, 'tasks'), formData.value);
	location.reload();
};
</script>

<style lang="scss" scoped></style>
