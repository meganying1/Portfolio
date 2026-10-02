import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  // Case-study prose retains the author's original apostrophes and quotations.
  { rules: { "react/no-unescaped-entities": "off" } },
  globalIgnores([".next/**", "out/**", "public/pages/**", "next-env.d.ts"]),
]);
