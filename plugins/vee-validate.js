import { defineNuxtPlugin } from '#app';
import { defineRule, configure } from 'vee-validate';
import * as rules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';


export default defineNuxtPlugin(nuxtApp => {
  const { $i18n } = nuxtApp;
  Object.keys(rules).forEach(rule => {
    if (typeof rules[rule] === 'function') {
      defineRule(rule, rules[rule]);
    }
  });
  
  defineRule('start_00', (value) => {
    if (value.match(/^00\d*$/)) {
      return true;
    }
    return $i18n.t('error.error_00');
  });

  // Configure Vee-Validate
  configure({
    generateMessage: localize({
      en: {
        messages: {
          required: `{field} ${$i18n.t('error.required')}`,
        }
      },
      vi: {
        messages: {
          required: '{field} rat la required',
        }
      }
    }),
  });

  setLocale($i18n.locale.value);
});
