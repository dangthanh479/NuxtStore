import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      // "no-console": 1,
      "no-unused-vars": 2,
      indent: ["warn", 2],
      semi: ["warn", "always"],
      "vue/multi-word-component-names": off,
    },
  }
];