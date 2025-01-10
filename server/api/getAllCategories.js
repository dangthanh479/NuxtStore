import { defineEventHandler } from 'h3';
import getAllCategories from '@/mocks/getAllCategories';

export default defineEventHandler(async (event) => {
  // if (process.env.USE_MOCK) {
  //   const [status, data] = getAllCategories.get();

  //   return { status, data };
  // }
  const [status, data] = getAllCategories.get();

    return { status, data };
});
