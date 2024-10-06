<template>
    <Dialog v-model:visible="menuState.visible[2]" modal header="Settings" @update:visible="handleClose()" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
      <p class="subtitle"> period of one generation </p>
      <div class="card flex justify-content-center">
        <InputText type="text" v-model="settingsState.period" />
        <span>ms</span>
      </div>
      <p class="subtitle"> color </p>
      <div class="card flex justify-content-center">
        <span>alive cells:</span>
        <ColorPicker v-model="settingsState.activeColor" class="color-picker" />
        <span>dead cells:</span>
        <ColorPicker v-model="settingsState.deadColor" class="color-picker" />
      </div>
      <div>
        <Button label="confirm" size="small" @click="settingsConfirm();modalClose()" class="btn" />
        <Button label="reset" size="small" @click="settingsReset()" class="btn" />
      </div>
    </Dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import { inject } from 'vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import ColorPicker from 'primevue/colorpicker';
import Button from 'primevue/button';
import cellCalculationKey from "../composables/cellCalculationKey"
import { cellCalculationStore } from "../composables/cellCalculation"
import menuKey from "../composables/menuKey"
import { menuStore } from "../composables/menu"

@Component({
  components: {
    Dialog,
    InputText,
    ColorPicker,
    Button,
  },
  setup() {
    const { cellState, settingsState, settingsConfirm, settingsReset } = inject(cellCalculationKey) as cellCalculationStore
    const { menuState, handleTabChange, handleClose, modalClose } = inject(menuKey) as menuStore
    
    // init
    settingsState.period = cellState.period;
    settingsState.activeColor = cellState.activeColor.substring(1);
    settingsState.deadColor = cellState.deadColor.substring(1);

    return {
      cellState,
      settingsState,
      settingsConfirm,
      settingsReset,
      menuState,
      handleTabChange,
      handleClose,
      modalClose,
    }
  }
})export default class SettingsComponent extends Vue { 
  submit() {
  }
}

</script>

<style scoped>
.card {
  margin: 2%;
}
.btn {
  margin-left: 2%;
}
.subtitle {
  font-weight: bold;
}
.color-picker {
  margin: 2% 4% 2% 1%;
}
</style>
