import nextConfig from "eslint-config-next";
import tsParser from "@typescript-eslint/parser";

export default [
  ...nextConfig,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
    },

    rules: {
      "jsx-a11y/alt-text": "error",

      "@next/next/no-img-element": "warn",

      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/aria-role": "warn",
    },
  },
];
