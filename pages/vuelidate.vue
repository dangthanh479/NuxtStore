<template>
	<div>
		<form @submit.prevent="submitForm">
			<div>
				<label for="phone">Account</label>
				<input
					id="account"
					v-model="formData.account"
					type="text"
					name="account" />
			</div>
			<div>
				<span
					v-if="isError('account', errorsRef)"
					style="color: #fd5c70; font-size: 12px">
					{{ getErrorMessage('account', errorsRef) }}
				</span>
			</div>
			<div>
				<label for="phone">Password</label>
				<input
					id="password"
					v-model="formData.password"
					type="text"
					name="password" />
			</div>
			<div>
				<span
					v-if="isError('password', errorsRef)"
					style="color: #fd5c70; font-size: 12px">
					{{ getErrorMessage('password', errorsRef) }}
				</span>
			</div>
			<button type="submit">Submit</button>
		</form>
	</div>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

const mode = 'login';
const errorsRef = reactive([]);
const formData = ref({
	account: '',
	password: '',
	email: '',
	phone: '',
});

const rules = computed(() => {
	return {
		account: {
			required: helpers.withMessage('The account field is required', required),
		},
		password: {
			required: helpers.withMessage('The password field is required', required),
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
	} else {
		const body = {
			username: formData.value.account,
			password: formData.value.password,
			phonenumber: 123,
		};

		if (mode === 'register') {
			await register(body);
		} else {
			await login(body);
		}
	}
};

const register = async (body) => {
	try {
		await useFetch('http://localhost:3001/api/v1/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
	} catch (e) {
		console.log(e);
	}
};

const login = async (body) => {
	try {
		await useFetch('http://localhost:3001/api/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
	} catch (e) {
		console.log(e);
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
