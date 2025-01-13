import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
	const runtimeConfig = useRuntimeConfig();
	const apiBaseUrl = runtimeConfig.public.apiBaseUrl;
	
	const apiHandler = async ({ method, path, body, key }) => {
		try {
			const response = await useFetch(`${apiBaseUrl}/${path}`, {
				method,
				headers: {
					Authorization: `Bearer`,
					Accept: 'application/vnd.api+json',
					'Content-type': 'application/vnd.api+json',
				},
				body: body ? JSON.stringify(body) : undefined,
				key,
			});

			if (!response.data.value || response.error.value) {
        throw new Error(
          response.error.value?.message || 'An unknown error occurred.'
        );
			}
			
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	};
	
	return {
		provide: {
			apiHandler
		}
	};
});
