<script setup lang="ts">
import viewer from './components/viewer/viewer.vue'
import addPointSymbol from './components/SupermapTools/draw/add-point-symbol/add-point-symbol.vue'
</script>

<template>
<div id="cesiumContainer"></div>
<viewer>
  <addPointSymbol :selectedTypeId="1" symbolColor="#ffffff" :space="1" :density="1"></addPointSymbol>
</viewer>

</template>

<style scoped>

</style>
