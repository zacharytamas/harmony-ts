/* tslint:disable */
/* eslint-disable */
export function load_harmony_encoding(name: string, base_url?: string | null): Promise<JsHarmonyEncoding>;
export function get_tool_namespace_config(tool: string): any;
export enum StreamState {
  ExpectStart = 0,
  Header = 1,
  Content = 2,
}
/**
 * The `ReadableStreamType` enum.
 *
 * *This API requires the following crate features to be activated: `ReadableStreamType`*
 */
type ReadableStreamType = "bytes";

export interface Author {
  role: 'user' | 'assistant' | 'system' | 'developer' | 'tool';
  name?: string;
}

export type Content =
  | { type: 'text'; text: string }
  | { type: 'system_content'; model_identity?: string; reasoning_effort?: string; tools?: Record<string, ToolNamespaceConfig>; conversation_start_date?: string; knowledge_cutoff?: string }
  | { type: 'developer_content'; instructions?: string; tools?: Record<string, ToolNamespaceConfig> };

export interface Message {
  author: Author;
  content: Content[];
  channel?: string;
  recipient?: string;
  content_type?: string;
}

export interface Conversation {
  messages: Message[];
}

export interface RenderConversationConfig {
  auto_drop_analysis?: boolean;
}

export interface ToolNamespaceConfig {
  name: string;
  description?: string;
  tools: any[];
}

export class IntoUnderlyingByteSource {
  private constructor();
  free(): void;
  start(controller: ReadableByteStreamController): void;
  pull(controller: ReadableByteStreamController): Promise<any>;
  cancel(): void;
  readonly type: ReadableStreamType;
  readonly autoAllocateChunkSize: number;
}
export class IntoUnderlyingSink {
  private constructor();
  free(): void;
  write(chunk: any): Promise<any>;
  close(): Promise<any>;
  abort(reason: any): Promise<any>;
}
export class IntoUnderlyingSource {
  private constructor();
  free(): void;
  pull(controller: ReadableStreamDefaultController): Promise<any>;
  cancel(): void;
}
export class JsHarmonyEncoding {
  private constructor();
  free(): void;
  renderConversationForCompletion(conversation: Conversation, next_turn_role: string, config: RenderConversationConfig): Uint32Array;
  renderConversation(conversation: Conversation, config: RenderConversationConfig): Uint32Array;
  render(message: Message, render_options: RenderOptions): Uint32Array;
  parseMessagesFromCompletionTokens(tokens: Uint32Array, role?: string | null): string;
  decodeUtf8(tokens: Uint32Array): string;
  decodeBytes(tokens: Uint32Array): Uint8Array;
  encode(text: string, allowed_special: any): Uint32Array;
  specialTokens(): string[];
  isSpecialToken(token: number): boolean;
  stopTokens(): Uint32Array;
  stopTokensForAssistantActions(): Uint32Array;
  readonly name: string;
}
export class JsStreamableParser {
  free(): void;
  constructor(encoding: JsHarmonyEncoding, role: string);
  process(token: number): void;
  readonly currentContent: string;
  readonly currentRole: string;
  readonly currentContentType: string;
  readonly lastContentDelta: string;
  readonly messages: string;
  readonly tokens: Uint32Array;
  readonly state: string;
  readonly currentRecipient: string;
  readonly currentChannel: string;
}