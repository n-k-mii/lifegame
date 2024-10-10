import { reactive } from 'vue'

export default function menu() {
  // state
  const menuState = reactive<{
    activeTab: number;
    visible: boolean[];
  }>({
    activeTab: 0,
    visible: [false, false, false],
  })
  
  // logic
  const handleTabChange = (event: { originalEvent: Event, index: any }) => {
    menuState.activeTab = event.index;
    menuState.visible[menuState.activeTab] = true;
  }
  const handleClose = () => {
    menuState.activeTab = 0;
  }
  const modalClose = () => {
    menuState.visible[menuState.activeTab] = false;
    menuState.activeTab = 0;
  }

  return {
    menuState,
    handleTabChange,
    handleClose,
    modalClose,
  }
}

export type menuStore = ReturnType<typeof menu>
