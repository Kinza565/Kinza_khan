import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Archived pre-src-migration tree: superseded by the root app/components/lib
    // structure and excluded from tsconfig, so it is not part of the build.
    "src/**",
  ]),
  {
    // eslint-config-next@16 pulls in eslint-plugin-react-hooks@7, whose
    // recommended-latest set enables the React Compiler preview rules. This
    // project runs next@15.5.25, which does not ship those rules, and the
    // existing effect/handler patterns (TerminalPanel mount effect, chat
    // message timestamps) predate them. Scoped off rather than removed, so all
    // other react-hooks rules stay active.
    rules: {
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
