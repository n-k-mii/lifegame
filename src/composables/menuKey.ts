import { InjectionKey } from 'vue';
import { menuStore } from './menu';

const menuKey: InjectionKey<menuStore> = Symbol('menuStore');
export default menuKey;
