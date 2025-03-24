# gitea-client

![JSR](https://jsr.io/badges/@hk/gitea-client)
![NPM Version](https://img.shields.io/npm/v/gitea-client)

```bash
bun install gitea-client
```

```ts
import { repoGet } from "gitea-client";
import { client } from "gitea-client/client";

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
```
