# Sofast Plugin – Minecraft Demo

English ｜ [中文](./README_ZH.md)

This is a Sofast plugin example that embeds a Minecraft-like Three.js game into Sofast. It is adapted from the open‑source project “minecraft-threejs” by Yulei Zhu (MIT).

What this example shows

- How to package a pure Vite + TypeScript app as a Sofast plugin
- How to expose commands via `package.json` so Sofast can discover it
- How to make assets and styles work in both dev and packaged modes
- Input handling in embedded environments (pointer lock fallback, key capture)

Scripts

- `pnpm dev` – start Vite dev server for quick iteration
- `pnpm build` – build UI to `dist/` and copy `package.json` for Sofast discovery
- `pnpm preview` – preview the production build

Use in Sofast

1) Build the plugin: `pnpm -C examples/plugins/sofast-minecraft build`
2) Open Sofast and run the command named “Minecraft” (declared in this plugin’s `package.json` under `commands`).

Notes

- Pointer lock is optional. When unavailable, the plugin falls back to mouse‑move camera.
- Assets are referenced relatively so they load correctly inside Sofast.
- Original upstream: https://github.com/Vyse12138/minecraft-threejs (MIT)
