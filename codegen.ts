
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "apollo/schema/*.graphql",
  documents: 'graphql/*.{ts,tsx}',
  generates: {
    "generated/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
