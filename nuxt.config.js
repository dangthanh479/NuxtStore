// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
        "@nuxtjs/i18n",
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxtjs/device',
        "@nuxt/image"
    ],
	i18n: {
		vueI18n: './i18n.config.js'
	},
	app: {
		head: {
			title: 'AnyStore',
			meta: [{ name: 'description', content: 'AnyStore' }],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
				},
				{
					rel: 'stylesheet',
					href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
					integrity:
						'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==',
					crossorigin: 'anonymous',
					referrerpolicy: 'no-referrer',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Grey+Qo&display=swap',
				},
			],
		},
	},
});
