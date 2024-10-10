<template>
  <TabMenu :model="items" :active-index="menuState.visible?menuState.activeTab:0" @tab-change="handleTabChange" />
</template>

<script lang="ts">
import { inject } from 'vue';
import { Component, Vue } from 'vue-facing-decorator';
import TabMenu from 'primevue/tabmenu';
import menuKey from "../composables/menuKey";
import { menuStore } from "../composables/menu";

@Component ({
  components: {
    TabMenu,
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
export default class  MenuComponent extends Vue {
    items: any[] = [
        {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
        {label: 'Rule', icon: 'pi pi-fw pi-book'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'},
    ];
}

</script>

<style scoped>

</style>
