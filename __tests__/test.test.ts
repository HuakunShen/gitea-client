import { expect, test } from "bun:test";
import { repoGet } from "../src/hey-api-client/index.ts";
import { client } from "../src/hey-api-client/client.gen.ts";

test("Get package versions", async () => {
  client.setConfig({
    baseUrl: "https://gitea.com/api/v1",
  });
  const res = await repoGet({
    path: {
      owner: "huakun",
      repo: "gitea-client",
    },
  });
  expect(res.data?.id).toBeDefined();
});
