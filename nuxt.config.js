// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
        "@nuxtjs/i18n",
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxtjs/device',
				"@nuxt/image",
	],
	postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
	runtimeConfig: {
		public: {
			apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
			apiBaseUrl1: 'http://localhost:8080/api',
			useMock: process.env.NUXT_PUBLIC_USE_MOCK,
		},
	},
	plugins: [
		'~/plugins/vee-validate.js',
		'~/plugins/api-handler.js',
	],
	i18n: {
		locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'vi', file: 'vi.json', name: 'VietNam' },
		],
		langDir: 'locales/',
    defaultLocale: 'en',
		strategy: 'no_prefix',
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
