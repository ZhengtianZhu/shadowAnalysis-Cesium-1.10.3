# Another project
Due to privacy, I cannot upload the source code of the project. I mainly write some service codes there. 
Some snapshots are like these.

Besides, I also have a demo and did some attempts here. 

* load 3D model:
  ![4f5330829d6e3776ab481eadd8e67ea](https://github.com/ZhengtianZhu/shadowAnalysis-Cesium-1.10.3/assets/24854133/e6b92b33-ef35-4125-b264-cb622f3b3d62)
![f02f89a31edeb7f2b41ba2a23a61762](https://github.com/ZhengtianZhu/shadowAnalysis-Cesium-1.10.3/assets/24854133/2647057b-9f99-48a6-ac0a-ea67ea41f937)
![68a38395a56434586944e0122416e99](https://github.com/ZhengtianZhu/shadowAnalysis-Cesium-1.10.3/assets/24854133/c0416a7d-6e2d-4346-9e5d-047def647144)

* load terrain data:
  ![36543bf28da4fd1f7716485c90ea59c](https://github.com/ZhengtianZhu/shadowAnalysis-Cesium-1.10.3/assets/24854133/910f6dec-4c10-4921-9bef-f5ab08cca08e)

* vue组件如何调用别人写好的js文件, js:Heatmap
![c0f6351dbdeaacc458dc6c148308386](https://github.com/ZhengtianZhu/shadowAnalysis-Cesium-1.10.3/assets/24854133/2f14e814-cf1d-4517-8be2-f3aef1d68a98)

* What's more, I assist in looking for some third party plugins like Heat3Dmap
![91a79fc773f4b9eb64688ad0cfafebe](https://github.com/ZhengtianZhu/shadowAnalysis-Cesium-1.10.3/assets/24854133/fe0d87b7-aa3d-4e64-afc7-ba97be2e99ef)

# Motivation
Project goal: Transplanting the existing code in this link https://github.com/SuperMap/vue-iClient3D_for_Cesium from Cesium 1.6 to Cesium 1.10.3. 
However, the new project based on Cesium 1.10.3 cannot use any function in SuperMap, which is based on Cesium 1.6.
That's why I need to rewrite some components of the original project. As for me, I'm responsible for the component in src/component/shadowAnalysis with my friends under my advisor's guidelines.

# Zhengtian's part:
Rewrite the component in src/component/shadowAnalysis to make it work. This is time-consuming.
referring to the initial software: https://www.supermapol.com/earth/vue-iEarth/examples/index.html


# 2023/6/1 
I am replacing this  "shadowQuery = new Cesium.ShadowQueryPoints(scene); ". At present, I need to write a similar function of this.
I am referring to others' realization at present since it is a huge project.
Finally, I choose to seek help from this link: https://www.liaomz.top/2023/04/18/cesium-zhong-shi-xian-yin-ying-lu-fen-xi/, which has the module I need.
# Start date
2023/4/15

# My advisor Lu Hou added these to illustrate the initial configuration.
## Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
