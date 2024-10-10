<template>
  <div class="container">
    <div class="grid-container">
      <div 
        v-for="(cell, index) in cellState.cellNum"
        :key="index"
        v-bind:class="['grid-item']"
        v-bind:style="{ 'background': cellState.isActiveCell[index] ? cellState.activeColor: cellState.deadColor}">
      </div>
    </div>
    <Button v-show="!cellState.isPlaying" v-bind:disabled="!cellState.isInit" icon="pi pi-play" label="start" size="small" @click="start" class="btn" />
    <Button v-show="cellState.isPlaying" icon="pi pi-stop" label="stop" size="small" outlined  @click="stop"  class="btn" />
    <Button v-show="!cellState.isInit" icon="pi pi-check" label="set" size="small" @click="init"  class="btn" />
    <Button v-show="cellState.isInit" v-bind:disabled="cellState.isPlaying" icon="pi pi-refresh" label="reset" size="small" @click="init"  class="btn" />
  </div>
</template>

<script lang="ts">
import { inject } from 'vue';
import { Component, Vue } from 'vue-facing-decorator';
import Button from 'primevue/button';
import cellCalculationKey from "../composables/cellCalculationKey"
import { cellCalculationStore } from "../composables/cellCalculation"

@Component({
  components: {
    Button,
  },
  setup() {
    const { cellState , start, stop, init } = inject(cellCalculationKey) as cellCalculationStore
    return {
      cellState,
      start,
      stop,
      init,
    }
  }
})
export default class BoardComponent extends Vue {

}

</script>

<style scoped>
.container {
  margin: 2%;
  padding: 2rem;
  box-shadow: 0px 3px 6px 0px #9E9E9E;
  border-radius: 10px;
  text-align:  center;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  gap: 0px; 
  margin-bottom: 2%;
}
.grid-item {
  aspect-ratio: 1;
  border: 0.1px solid #d3d3d3;
}
.btn {
  margin-left: 2%;
}
</style>
