import { defineEventHandler } from 'h3';
import getAllCategories from '@/mocks/getAllCategories';

export default defineEventHandler(async (event) => {
  // console.log(process.env.USE_MOCK, "USE_MOCK");
  // if (process.env.USE_MOCK) {
  //   const [status, data] = getAllCategories.get();

  //   return { status, data };
  // }
  const [status, data] = getAllCategories.get();

    return { status, data };
});
