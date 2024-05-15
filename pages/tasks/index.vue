<template>
	<div>
		<div class="mb-4 font-bold uppercase">Create new tasks</div>
		<form
			@submit.prevent="addTask"
			class="mb-10">
			<div class="mb-4 flex items-center">
				<label
					for="name"
					class="w-24"
					>Name:</label
				>
				<input
					type="text"
					id="name"
					class="border border-green-500 px-2 py-1 focus:outline-none focus:border-green-700 focus:ring-1 focus:border-green-700"
					placeholder="name"
					v-model="formData.name" />
			</div>
			<div class="flex items-center">
				<label
					for="description"
					class="w-24"
					>Description:</label
				>
				<input
					type="text"
					class="border border-green-500 px-2 py-1 focus:outline-none focus:border-green-700 focus:ring-1 focus:border-green-700"
					id="description"
					placeholder="description"
					v-model="formData.description" />
			</div>
			<div class="flex">
				<div class="w-24"></div>
				<button
					type="submit"
					class="btn mt-4">
					Submit
				</button>
			</div>
			<p
				v-if="error"
				class="text-red-600">
				{{ error }}
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
			:data="data"
			:is-open="isOpenPopup"
			:errors="error"
			@submit="handleSubmit"
			@close="handleCloseEditPopup" />
	</div>
</template>

<script setup>
import { useTasksStore } from '../../stores/tasksStore';

const tasksStore = useTasksStore();
const response = await tasksStore.getAllTasks();
const allTasks = ref(response);
const data = ref({});
const formData = ref({
	name: '',
	description: '',
	createdDate: new Date(),
});
const isOpenPopup = ref(false);
const error = ref('');

const addTask = async () => {
	if (Object.values(formData.value).some((value) => value === '')) {
		error.value = 'Name & Description is required';
		return;
	} else {
		error.value = false;
		await tasksStore.addTask(formData.value);
		getAllTask();
	}
};

const openPopupEdit = (task) => {
	data.value = task;
	isOpenPopup.value = true;
};

const handleSubmit = async (taskData) => {
	if (Object.values(taskData).some((value) => value === '')) {
		error.value = 'Name & Description is required';
		return;
	} else {
		error.value = '';
		await tasksStore.editTask(taskData.id, taskData);
		getAllTask();
		isOpenPopup.value = false;
	}
};

const handleCloseEditPopup = async () => {
	error.value = '';
	isOpenPopup.value = false;
};

const removeTask = async (id) => {
	await tasksStore.deleteTaskById(id);
	getAllTask();
};

const getAllTask = async () => {
	await tasksStore.getAllTasks();
	allTasks.value = tasksStore.tasks;
};
</script>
