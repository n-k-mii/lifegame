import { InjectionKey } from 'vue';
import { cellCalculationStore } from './cellCalculation';

const cellCalculationKey: InjectionKey<cellCalculationStore> = Symbol('cellCalculationStore');
export default cellCalculationKey;
