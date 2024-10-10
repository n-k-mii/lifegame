<template>
  <Dialog v-model:visible="menuState.visible[1]" modal header="Rule" @update:visible="handleClose" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <p>The Game of Life, devised by mathematician John Conway in the 1970s, is a simulation that models the evolution of cells on a grid. Here's a breakdown:<br>
    <ol>
      <li><span class="subtitle">Grid Setup: <br></span>
        It's played on a grid, usually a square, with cells arranged in rows and columns. Each cell can either be alive or dead.</li>
      <br>
      <li><span class="subtitle">Rules of Evolution: </span><br>
          - Underpopulation: Any live cell with fewer than two live neighbors dies in the next generation due to loneliness.<br>
          - Sustainability: A live cell with two or three live neighbors survives to the next generation.<br>
          - Overpopulation: Any live cell with more than three live neighbors dies from overcrowding.<br>
          - Reproduction: A dead cell with exactly three live neighbors becomes a live cell, simulating reproduction.<br>
      </li>
    </ol>
    </p>
  </Dialog>
</template>

<script lang="ts">
import { inject } from 'vue';
import { Component, Vue } from 'vue-facing-decorator';
import Dialog from 'primevue/dialog';
import menuKey from "../composables/menuKey";
import { menuStore } from "../composables/menu";

@Component ({
  components: {
    Dialog,
  },
  setup() {
    const { menuState, handleTabChange, handleClose } = inject(menuKey) as menuStore

    return {
      menuState,
      handleTabChange,
      handleClose,
    }
  }
})
export default class  RuleComponent extends Vue {
}

</script>

<style scoped>
.subtitle {
  font-weight: bold;
}
ul > li {
  list-style: none;
}
</style>
