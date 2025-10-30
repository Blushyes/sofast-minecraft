# Sofast Plugin Example – Minecraft

English | [中文](./README.md)

This is a Sofast plugin example that embeds a Minecraft‑like Three.js game into the Sofast app. It is adapted from the open‑source project "minecraft-threejs" by Yulei Zhu (MIT), with adjustments for reliable behavior in embedded environments.

What this example shows

- Packaging a Vite + TypeScript app as a Sofast plugin
- Exposing commands via `package.json` so Sofast can discover them
- Referencing assets/styles with relative paths to work in both dev and build
- Input handling in embedded contexts (pointer‑lock fallback, key capture)

Scripts

- `pnpm dev` – start the Vite dev server
- `pnpm build` – build to `dist/` and copy `package.json` for Sofast discovery
- `pnpm preview` – preview the production build

Use in Sofast

1) Build the plugin: `pnpm -C examples/plugins/sofast-minecraft build`
2) Open Sofast and run the command named "Minecraft" (declared under `commands` in this plugin's `package.json`).

Notes

- Pointer lock is optional. When unavailable, the plugin falls back to mouse‑move camera.
- The canvas is focusable (tabIndex=0). Click Play or the canvas to start; W/A/S/D to move, Space to jump, Shift to crouch/descend, E for menu, F for fullscreen, Q for walk/fly.
- Upstream: https://github.com/Vyse12138/minecraft-threejs (MIT)

