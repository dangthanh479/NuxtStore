import { defineEventHandler } from 'h3';
import posts from '@/mocks/posts';

export default defineEventHandler(async (event) => {
  if (process.env.USE_MOCK) {
    return posts;
  }
});
