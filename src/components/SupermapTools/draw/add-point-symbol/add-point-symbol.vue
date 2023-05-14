<template>
  <div id="draw-panel" class="sm-panel" v-drag>
    <div class="sm-function-module-sub-section" style="margin:0" v-stopdrag>
      <div class="sm-half-L">
        <label style="width:35%">{{ Resource.symbolType }}</label>
        <select class="sm-select" style="width:63%" v-model="selectedTypeId">
          <option v-for="model in s3mModels" :key="model.id" :value="model.id">{{model.name}}</option>
        </select>
      </div>
      <div class="sm-half-L symbolic">
        <div
          v-for="(model,index) in s3mModels[selectedTypeId].data"
          :key="model.id"
          class="symbolic-box"
          style="width: 40px;"
          :title="model.name"
          :class="{ 'theme-border-color': model.id ===selectedSymbolId }"
          @click="changeSelect(index)"
        >
          <img :src="model.thumbnail" alt="ERROR" v-show="model.name" />
        </div>
      </div>
      <div class="sm-half-L">
        <label style="width: 35%;">{{Resource.symbolColor}}</label>
        <el-color-picker v-model="symbolColor" size="mini" style="width:63%"></el-color-picker>
      </div>
      <div class="sm-half-L">
        <label style="width:35%">{{Resource.addType}}</label>
        <select class="sm-select" style="width:63%" v-model="addType">
          <option value="single">{{Resource.singleAdd}}</option>
          <option value="line">{{Resource.lineAdd}}</option>
          <option value="face">{{Resource.faceAdd}}</option>
        </select>
      </div>
      <div class="sm-half-L" v-show="addType === 'line'">
        <label style="width: 35%;">{{Resource.spacing}}</label>
        <input type="number" class="sm-input" style="width:63%" min="1" v-model="space" />
      </div>
      <div class="sm-half-L" v-show="addType === 'face'">
        <label style="width: 35%;">{{Resource.number}}</label>
        <input type="number" class="sm-input" style="width:63%" min="1" v-model="density" />
      </div>
      <div class="boxchild">
        <button class="tbtn" type="button" v-on:click="startAdd">{{Resource.add}}</button>
        <button class="tbtn tbtn-margin-left" type="button" v-on:click="clear">{{Resource.clear}}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import addPointSymbol from "./add-point-symbol"
import { onMounted, onBeforeMount, toRefs } from "vue"
import type { PointSymbolProps } from "./typing"
import Resource from "@/resource/ResourceCN"
import { useViewer } from "@/js/store"
const props = defineProps<{
  selectedTypeId: number
  symbolColor: string
  space: number
  density: number
}>()
console.log(props)
console.log('create')
const $v = useViewer()

onMounted(() => {
  console.log("On mounted")
  console.log($v.viewer)
})
let {
  s3mModels,
  selectedTypeId,
  selectedSymbolId,
  symbolColor,
  changeSelect,
  space,
  density,
  clear,
  startAdd,
  addType
} = toRefs(addPointSymbol(props))
</script>
<style scoped>

</style>