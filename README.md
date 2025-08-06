# harmony-ts

This will be a very short-lived project because it will be superseded by OpenAI's official JavaScript version but as of today, 2025-08-06, it is not available yet. I have merely taken their Rust code and compiled it to WASM and made it usable via JavaScript.

## Usage

```ts
import { load_harmony_encoding, HarmonyEncodingName } from "harmony-ts";

const enc = await load_harmony_encoding(HarmonyEncodingName);
```

The JsHarmonyEncoding class is described by the TypeScript declaration file [`dist/openai_harmony.d.ts`](./dist/openai_harmony.d.ts).

## Development

To install dependencies:

```bash
bun install
```

To build:

```bash
bun run build
```

This project was created using `bun init` in bun v1.2.18. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
