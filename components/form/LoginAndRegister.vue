<template>
	<div class="max-w-lg mx-auto my-16 min-h-[600px] lg:my-24">
		<div class="flex flex-col items-center">
			<div
				class="font-extrabold text-2xl cursor-pointer"
				@click="router.push('/')">
				AnyStore
			</div>
			<h1 class="text-xl font-semibold lg:text-3xl">
				<ClientOnly>
					{{ formTitle }}
					<template #fallback>Loading...</template>
				</ClientOnly>
			</h1>
			<div
				v-if="formView === 'login'"
				class="my-2 text-center">
				<ClientOnly>
					{{ $t('account.noAccount') }}
					<a
						class="font-semibold cursor-pointer text-primary"
						@click="navigate('register')">
						{{ $t('account.accountRegister') }} </a
					>.
					<template #fallback>Loading...</template>
				</ClientOnly>
			</div>
			<div
				v-if="formView === 'register'"
				class="my-2 text-center">
				<ClientOnly>
					{{ $t('account.hasAccount') }}
					<a
						class="font-semibold cursor-pointer text-primary"
						@click="navigate('login')">
						{{ $t('general.please') }}
						{{ $t('account.accountLogin') }}.
					</a>
					<template #fallback>Loading...</template>
				</ClientOnly>
			</div>
		</div>
		<Form
			:validateOnInput="false"
			class="mt-6"
			@submit="handleFormSubmit()">
			<FormInputValidate
				v-if="formView === 'register' || formView === 'forgotPassword'"
				id="email"
				name="email"
				v-model="userInfo.email"
				:placeholder="inputPlaceholder.email"
				:label="emailLabel"
				required
				type="text"
				rules="required|email" />
			<p
				v-if="formView === 'forgotPassword'"
				class="text-sm text-gray-500">
				<ClientOnly>
					{{ $t('account.enterEmailOrUsernameForReset') }}
					<template #fallback>Loading...</template>
				</ClientOnly>
			</p>
			<div v-if="formView !== 'forgotPassword'">
				<FormInputValidate
					id="username"
					name="username"
					v-model="userInfo.username"
					:placeholder="inputPlaceholder.username"
					:label="usernameLabel"
					required
					type="text"
					rules="required" />
				<FormInputPassword
					id="password"
					name="password"
					className="border rounded-lg w-full p-3 px-4 bg-white"
					v-model="userInfo.password"
					:label="passwordLabel"
					:placeholder="inputPlaceholder.password"
					:autocomplete="
						formView === 'login' ? 'current-password' : 'new-password'
					"
					rules="required"
					required />
			</div>
			<Transition
				name="scale-y"
				mode="out-in">
				<div
					v-if="message"
					class="my-4 text-sm text-green-500"
					v-html="message"></div>
			</Transition>
			<Transition
				name="scale-y"
				mode="out-in">
				<div
					v-if="errorMessage"
					class="my-4 text-sm text-red-500"
					v-html="errorMessage"></div>
			</Transition>
			<button class="flex items-center justify-center gap-4 mt-4 text-lg">
				<IconLoading
					v-if="isPending"
					stroke="4"
					size="16"
					color="#fff" />
				<span>
					<ClientOnly>
						{{ buttonText }}
						<template #fallback>Loading...</template>
					</ClientOnly>
				</span>
			</button>
		</Form>
		<div
			class="my-8 text-center cursor-pointer"
			@click="navigate('forgotPassword')"
			v-if="formView === 'login'">
			<ClientOnly>
				{{ $t('account.forgotPassword') }}
				<template #fallback>Loading...</template>
			</ClientOnly>
		</div>
		<div
			class="my-8 text-center cursor-pointer"
			@click="navigate('login')"
			v-if="formView === 'forgotPassword'">
			<ClientOnly>
				{{ $t('account.backToLogin') }}
				<template #fallback>Loading...</template>
			</ClientOnly>
		</div>
	</div>
</template>

<script setup>
import { Form } from 'vee-validate';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const { loginUser, isPending, registerUser, sendResetPasswordEmail } =
	useAuth();
const userInfo = ref({ email: '', password: '', username: '' });
const formView = ref('login');
const message = ref('');
const errorMessage = ref('');

const updateFormView = () => {
	if (route.query.action === 'forgotPassword') {
		formView.value = 'forgotPassword';
	} else if (route.query.action === 'register') {
		formView.value = 'register';
	} else {
		formView.value = 'login';
	}
};

watch(route, updateFormView, { immediate: true });

const login = () => {
	//
};

const handleFormSubmit = async () => {
	console.log(userInfo.value);
	return;
	if (formView.value === 'register') {
		const { success, error } = await registerUser(userInfo.value);
		if (success) {
			errorMessage.value = '';
			message.value =
				t('account.accountCreated') + ' ' + t('account.loggingIn');
			resetForm();
			setTimeout(() => {
				login(userInfo);
			}, 2000);
		} else {
			errorMessage.value = error;
		}
	}
};

const resetPassword = () => {
	//
};

const navigate = (view) => {
	formView.value = view;
	if (view === 'forgotPassword') {
		router.push({ query: { action: 'forgotPassword' } });
	} else if (view === 'register') {
		router.push({ query: { action: 'register' } });
	} else {
		router.push({ query: {} });
	}
};

const formTitle = computed(() => {
	if (formView.value === 'login') {
		return t('account.loginToAccount');
	} else if (formView.value === 'register') {
		return t('account.accountRegister');
	} else if (formView.value === 'forgotPassword') {
		return t('account.forgotPassword');
	}
});

const buttonText = computed(() => {
	if (formView.value === 'login') {
		return t('account.login');
	} else if (formView.value === 'register') {
		return t('account.register');
	} else if (formView.value === 'forgotPassword') {
		return t('account.sendPasswordResetEmail');
	}
});

const emailLabel = computed(() =>
	formView.value === 'register'
		? t('account.email')
		: t('account.emailOrUsername'),
);
const usernameLabel = computed(() =>
	formView.value === 'login'
		? t('account.emailOrUsername')
		: t('account.username'),
);
const passwordLabel = computed(() => t('account.password'));

const inputPlaceholder = computed(() => {
	return {
		email: 'johndoe@email.com',
		username: formView.value === 'login' ? 'johndoe@email.com' : 'johndoe',
		password: '********',
	};
});
</script>

<style scoped>
input,
button {
	@apply border rounded-lg w-full p-3 px-4 bg-white;
}
form button {
	@apply rounded-lg font-bold bg-gray-800 text-white py-3 px-8 hover:bg-gray-800;
}
</style>
