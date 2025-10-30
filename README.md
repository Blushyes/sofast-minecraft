# 如快 插件示例 – Minecraft

中文 ｜ [English](./README_EN.md)

这是一个如快的插件示例，将基于 Three.js 的“我的世界”玩法嵌入如快。项目改编自开源仓库 “minecraft-threejs”（作者 Yulei Zhu，许可 MIT），并做了适配以便在如快的嵌入环境中稳定运行。

本示例演示

- 如何用 Vite + TypeScript 打包成如快插件
- 通过 `package.json` 暴露 `commands` 让如快自动发现
- 资源与样式在开发/打包模式下的正确引用方式（相对路径）
- 内嵌环境的输入处理（Pointer Lock 兜底、键盘事件捕获）

脚本

- `pnpm dev` – 启动 Vite 开发服务器
- `pnpm build` – 构建到 `dist/`，并复制 `package.json` 供如快发现命令
- `pnpm preview` – 预览生产构建

在如快中使用

1) 构建插件：`pnpm -C examples/plugins/sofast-minecraft build`
2) 打开如快，在命令面板搜索并运行“Minecraft”（在本插件 `package.json` 的 `commands` 中声明）。

注意

- Pointer Lock 不是必须；若不可用，会自动降级为普通鼠标移动视角。
- 画布可聚焦（tabIndex=0）。点击“Play”或画布即可开始；W/A/S/D 移动，空格跳跃，Shift 蹲伏/下降，E 菜单，F 全屏，Q 切换行走/飞行。
- 上游项目：https://github.com/Vyse12138/minecraft-threejs（MIT）
