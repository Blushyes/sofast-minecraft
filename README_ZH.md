# Sofast 插件示例 – Minecraft

中文 ｜ [English](./README.md)

这是一个 Sofast 的插件示例，将基于 Three.js 的“我的世界”玩法嵌入 Sofast。项目改编自开源仓库 “minecraft-threejs”（作者 Yulei Zhu，许可 MIT），并做了适配以便在 Sofast 的嵌入环境中稳定运行。

本示例演示

- 如何用 Vite + TypeScript 打包成 Sofast 插件
- 通过 `package.json` 暴露 `commands` 让 Sofast 自动发现
- 资源与样式在开发/打包模式的加载方式（相对路径）
- 在内嵌环境中的输入处理（Pointer Lock 兜底、键盘捕获）

脚本

- `pnpm dev` – 启动 Vite 开发服务器
- `pnpm build` – 构建到 `dist/`，并复制 `package.json` 供 Sofast 发现命令
- `pnpm preview` – 预览生产构建

在 Sofast 中使用

1) 构建：`pnpm -C examples/plugins/sofast-minecraft build`
2) 打开 Sofast，在命令面板搜索并运行“Minecraft”（在本插件 `package.json` 的 `commands` 中声明）。

提示

- Pointer Lock 不是必须；若浏览器/宿主不支持，会自动降级为普通鼠标移动视角。
- 画布支持聚焦（tabIndex=0）。点击“Play”或点击画布即可开始；按 E 打开菜单，F 全屏。
- 上游项目：https://github.com/Vyse12138/minecraft-threejs（MIT）
