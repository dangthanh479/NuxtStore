<template>
	<div>
		<form @submit.prevent="submitForm">
			<Comp1
				:name="'name'"
				:label="'Name'"
				:type="'text'"
				:formData="formData"
				:errorsRef="errorsRef"
				:rules="rules" />
			<Comp1
				:name="'address'"
				:label="'address'"
				:type="'text'"
				:formData="formData"
				:errorsRef="errorsRef"
				:rules="rules" />
			<Comp1
				:name="'phone'"
				:label="'phone'"
				:type="'text'"
				:formData="formData"
				:errorsRef="errorsRef"
				:rules="rules" />
			<Comp1
				:name="'email'"
				:label="'email'"
				:type="'text'"
				:formData="formData"
				:errorsRef="errorsRef"
				:rules="rules" />
			<button type="submit">Submit</button>
		</form>
	</div>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

const errorsRef = reactive([]);
const formData = ref({
	name: '',
	address: '',
	email: '',
	phone: '',
});

const rules = computed(() => {
	return {
		name: {
			required: helpers.withMessage('The name field is required', required),
		},
		address: {
			required: helpers.withMessage('The address field is required', required),
		},
		email: {
			required: helpers.withMessage('The email field is required', required),
		},
		phone: {
			required: helpers.withMessage('The phone field is required', required),
		},
	};
});

const v$ = useVuelidate(rules, formData);
const submitForm = async () => {
	errorsRef.value = [];
	v$.value.$validate();

	if (v$.value.$error) {
		const errors = JSON.parse(JSON.stringify(v$.value.$errors));
		errorsRef.value = [...errors];
		console.log(errorsRef.value);
		console.log(formData.value);
	} else {
		console.log(formData.value);
		console.log('OK');
	}
};
</script>

<style scoped>
input {
	border: 1px solid black;
}
button {
	border: 1px solid black;
	padding: 10px 15px;
	margin-top: 10px;
}
</style>
