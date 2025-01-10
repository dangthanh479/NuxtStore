<template>
	<select
		v-model="locale"
		aria-label="Language switcher"
		class="bg-white">
		<option
			v-for="locale in locales"
			:key="locale"
			:value="locale.code"
			v-html="locale.name" />
	</select>
</template>

<script setup>
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';

const { locales, locale, setLocaleCookie } = useI18n();

watch(locale, (newLocale) => {
	if (newLocale) {
		setLocaleCookie(newLocale);
		// change vee-validate localize
		configure({
			generateMessage: localize(newLocale),
		});
	}
});
</script>
