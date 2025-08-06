import rust from "@wasm-tool/rollup-plugin-rust";

export default {
	input: {
		openai_harmony: "./harmony/Cargo.toml",
	},
	output: {
		dir: "dist",
		format: "es",
		sourcemap: true,
	},
	plugins: [
		rust({
			extraArgs: {
				cargo: ["--features", "wasm-binding"],
				wasmOpt: ["--enable-bulk-memory-opt"],
			},
			experimental: {
				typescriptDeclarationDir: "dist",
			},
		}),
	],
};
