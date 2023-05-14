<template>
  <div id="cesiumContainer" ref="viewer">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import initViewer from "./viewer"

const props = defineProps<{
  sceneUrl?: string
  // s3mScps: []
  afterInitviewer?: () => void
  openingAnimation?: boolean
}>()

onMounted(() => {
  initViewer(props)
})
</script>



