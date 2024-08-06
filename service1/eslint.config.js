import global from "globals";
export default [
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        ...global.browser,
        ...global.es2021,
        ...global.node,
        myCustomGlobal: "readonly",
      },
    },
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      "public/",
      "*.config.js",
      "*.json",
      "*.log",
      "*.tmp",
      ".env",
    ],
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
    },
  },
];
