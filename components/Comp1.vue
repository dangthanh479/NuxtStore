<template>
	<div>
		<div>
			<label :for="props.name">{{ props.label }}</label>
			<input
				:id="props.name"
				v-model="props.formData[props.name]"
				:type="props.type"
				:name="props.name" />
			<div>
				<span
					v-if="isError(props.name, props.errorsRef)"
					style="color: #fd5c70; margin-left: 5px; font-size: 12px">
					{{ getErrorMessage(props.name, props.errorsRef) }}
				</span>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(['formData', 'errorsRef', 'name', 'label', 'type']);
</script>
