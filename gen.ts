import { createClient } from "@hey-api/openapi-ts";
import { $ } from "bun";

const res = await fetch("https://gitea.com/swagger.v1.json");
const json = await res.json();

await Bun.write("./schema/gitea-openapi.json", JSON.stringify(json, null, 2));
await createClient({
  input: "./schema/gitea-openapi.json",
  output: "./src/hey-api-client",
  plugins: ["@hey-api/client-fetch"],
});

await $`bunx tsup`;
