<template>
	<label :for="name">
		<ClientOnly>
			{{ label }}
			<span
				v-if="required"
				class="text-red-500"
				>*</span
			>
			<br />
			<template #fallback>Loading...</template>
		</ClientOnly>
		<div class="relative flex items-center w-full">
			<Field
				:id="id"
				:name="name"
				:type="showPassword ? 'text' : 'password'"
				class="flex items-center flex-1"
				:value="modelValue"
				@input="handleInputChanged"
				:class="className"
				:placeholder="placeholder"
				:autocomplete="autocomplete"
				:rules="rules"
				:required="required" />
			<i
				@click="showPassword = !showPassword"
				v-if="showPassword"
				class="fa-regular fa-eye absolute cursor-pointer right-4"></i>
			<i
				v-else
				@click="showPassword = !showPassword"
				class="fa-regular fa-eye-slash absolute cursor-pointer right-4"></i>
		</div>
	</label>
	<ErrorMessage
		class="my-4 text-sm text-red-500"
		:name="name" />
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';

const showPassword = ref(false);

const { modelValue, name, rules, className, placeholder, required, label } =
	defineProps({
		modelValue: { type: String, required: true },
		id: { type: String, default: '' },
		name: { type: String, required: true },
		rules: { type: String, default: '' },
		className: { type: String, default: '' },
		placeholder: { type: String, default: '' },
		autocomplete: { type: String, default: 'new-password' },
		required: { type: Boolean, default: false },
		label: { type: String, default: '' },
	});

const emit = defineEmits<{
	'update:modelValue': [value: string];
}>();

const handleInputChanged = (e: Event) => {
	const target = e.target as HTMLInputElement;
	emit('update:modelValue', target.value);
};
</script>
