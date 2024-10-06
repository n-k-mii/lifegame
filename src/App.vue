<template>
  <Menu />
  <Rule />
  <Settings />
  <Board />
</template>

<script lang="ts">
import { provide } from 'vue';
import { Component, Vue } from 'vue-facing-decorator';
import Menu from './components/Menu.vue';
import Rule from './components/Rule.vue';
import Settings from './components/Settings.vue';
import Board from './components/Board.vue';
import cellCalculationKey from "./composables/cellCalculationKey"
import cellCalculation from "./composables/cellCalculation"
import menuKey from "./composables/menuKey"
import menu from "./composables/menu"

@Component({
  components: {
    Menu,
    Rule,
    Settings,
    Board
  },
  setup() {
    provide(cellCalculationKey, cellCalculation());
    provide(menuKey, menu());
    return {};
  }
})
export default class MyComponent extends Vue {
}

</script>

<style>
#app {
  height: 100%;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
Dialog {
  width: 50rem;
}
</style>
