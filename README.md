# openai-harmony

This will be a very short-lived project because it will be superseded by OpenAI's official JavaScript version but as of today, 2025-08-06, it is not available yet. I have merely taken their Rust code and compiled it to WASM and made it usable via JavaScript.

## Usage

```ts
import { load_harmony_encoding } from "openai-harmony";

const encoding = await load_harmony_encoding("HarmonyGptOss");

const result = encoding.renderConversation(
  {
    messages: [
      {
        role: "developer",
        content: [
          {
            type: "developer_content",
            instructions: "You are a helpful assistant.",
            tools: {},
          },
        ],
      },
      {
        role: "user",
        content: [{ type: "text", text: "Hello world" }],
      },
    ],
  },
  { auto_drop_analysis: false }
);

console.log(encoding.decodeUtf8(result));
// <|start|>developer<|message|># Instructions
//
// You are a helpful assistant.<|end|><|start|>user<|message|>Hello world<|end|>

console.log(encoding.parseMessagesFromCompletionTokens(result));
// [{"role":"developer","content":"# Instructions\n\nYou are a helpful assistant."},{"role":"user","content":"Hello world"}]
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
