import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: ["./schema.graphql"],
  documents: ["./queries/*.graphql", "./mutations/*.graphql"],
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    "./types.ts": {
      plugins: [
        "add",
        "typescript",
        "typescript-resolvers",
        "typescript-operations",
      ],
      config: {
        scalars: {
          Date: "string",
          ID: {
            input: "string",
            output: "string",
          },
          Cursor: {
            input: "string",
            output: "string",
          },
        },
        avoidOptionals: false,
        preResolveTypes: false,
        content: "// THIS FILE IS GENERATED, DO NOT EDIT!",
        skipTypename: false,
        enumsAsTypes: true,
        constEnums: false,
      },
    },
    "./types-hooks.ts": {
      preset: "import-types",
      plugins: ["add", "@graphql-codegen/typescript-react-apollo"],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        content: "// THIS FILE IS GENERATED, DO NOT EDIT!",
      },
      presetConfig: {
        typesPath: "./types",
        importTypesNamespace: "SchemaTypes",
      },
    },
  },
  //   hooks: { afterOneFileWrite: ["prettier --write", "eslint --fix"] },
};
export default config;
