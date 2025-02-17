import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node, // Definindo o ambiente como Node.js
      ecmaVersion: "latest", // Suporte para ECMAScript mais recente
      sourceType: "module"   // Habilita o uso de módulos ES6
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-console": "off",            // Permitir uso de console.log
      "eqeqeq": "error",              // Requer o uso de === e !==
      "no-unused-vars": "warn",       // Aviso para variáveis não utilizadas
      "strict": ["error", "global"],  // Usa o modo estrito no escopo global
      "semi": ["error", "always"],    // Sempre usar ponto e vírgula
      "quotes": ["error", "double"],  // Usar aspas duplas
      "indent": ["error", 2],         // Indentação de 2 espaços
      "comma-dangle": ["error", "never"] // Não permitir vírgulas no final de listas
    }
  }
];
