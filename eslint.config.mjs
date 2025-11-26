import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js: js, prettier: require("eslint-plugin-prettier") },
    extends: ["js/recommended", "plugin:prettier/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
]);
