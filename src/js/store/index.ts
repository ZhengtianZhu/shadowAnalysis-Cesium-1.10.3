import { Viewer } from 'cesium'
import { defineStore } from 'pinia'

export const useViewer = defineStore("useViewer", () => {
  let viewer: Viewer

  return {
    viewer,
  }
})