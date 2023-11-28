// https://the-guild.dev/graphql/tools/docs/schema-loading
import { loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";

import fs from "fs";
import { printSchema } from "graphql";

async function main() {
  const schema = await loadSchema("http://localhost:4000", {
    loaders: [new UrlLoader()],
  });

  fs.writeFileSync(
    `${process.cwd()}/schema.graphql`,
    `${printSchema(schema).replace(/`/g, "\\`")}`
  );
}

main();
