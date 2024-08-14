import { defineEventHandler, readBody } from 'h3';
import mockUsers from '@/mocks/users';

async function handleRequest(method, useMock, event) {
  if (useMock) {
    if (method === 'POST') {
      const body = await readBody(event);
      const [status, data] = await mockUsers.post({ data: body });
      return { status, body: data };
    } else if (method === 'GET') {
      const [status, data] = mockUsers.get();
      return { status, data };
    }
  } else {
    const baseUrl = process.env.API_URL;
    const options = {
      method,
      ...(method === 'POST' && { body: await readBody(event) }),
    };
    return await $fetch(baseUrl, options);
  }
}

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  const useMock = process.env.USE_MOCK === 'true';
  return await handleRequest(method, useMock, event);
});
