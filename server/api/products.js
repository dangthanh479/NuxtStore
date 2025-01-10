import { defineEventHandler } from 'h3';
import mockProducts from '@/mocks/products';

async function handleRequest(method, useMock) {
  if (useMock) {
    if (method === 'GET') {
      const [status, data] = mockProducts.get();
      return { status, data };
    }
  }
}

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  const useMock = process.env.USE_MOCK === 'true';
  return await handleRequest(method, useMock);
});
