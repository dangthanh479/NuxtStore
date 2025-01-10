<template>
	<div>
		<label :for="props.name">
			<ClientOnly>
				{{ props.label }}
				<span
					v-if="props.required"
					class="text-red-500"
					>*</span
				>
				<br />
				<template #fallback>Loading...</template>
			</ClientOnly>
			<Field
				v-model="internalValue"
				:id="props.id"
				:name="props.name"
				:placeholder="props.placeholder"
				:type="props.type"
				:rules="props.rules" />
			<ErrorMessage
				class="my-4 text-sm text-red-500"
				:name="props.name" />
		</label>
	</div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage, RuleExpression } from 'vee-validate';

interface InputValidate {
	modelValue: string;
	name: string;
	required?: boolean;
	label?: string;
	id?: string;
	type?: string;
	placeholder?: string;
	rules?: RuleExpression<unknown>;
}
const props = defineProps<InputValidate>();
const emit = defineEmits<{
	'update:modelValue': [value: string];
}>();

const internalValue = ref(props.modelValue);

watch(internalValue, (newValue) => {
	emit('update:modelValue', newValue);
});
</script>

<style scoped>
input {
	@apply border rounded-lg w-full p-3 px-4 bg-white;
}
</style>
