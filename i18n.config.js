import en from "@/locales/en.json";
import vn from "@/locales/vn.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    vn
  }
}));
