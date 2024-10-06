import { reactive } from 'vue'

const column: number = 40;
const row: number = 100;
const cellNum: number = column * row;
const initPeriod: number = 1500;
const sharp: string = '#';
const initActiveColor: string = 'ec4899';
const initDeadColor: string = 'ffffff';
const activeMap: boolean[] = [ false, true ];
let updateInterval: number = 0;

export default function cellCalculation() {
  // state
  const cellState = reactive<{
    column: number;
    row: number;
    cellNum: number;
    period: number;
    activeColor: string;
    deadColor: string;
    isPlaying: boolean;
    isInit: boolean;
    isActiveCell: boolean[];
    cells: number[];
  }>({
    column: column,
    row: row,
    cellNum: cellNum,
    period: initPeriod,
    activeColor: sharp.concat(initActiveColor),
    deadColor: sharp.concat(initDeadColor),
    isPlaying: false,
    isInit: false,
    isActiveCell: Array.from({ length: cellNum }, () => false ),
    cells: Array.from({ length: cellNum }),
  })
  const settingsState = reactive<{
    period: number;
    activeColor: string;
    deadColor: string;
  }>({
    period: cellState.period,
    activeColor: initActiveColor,
    deadColor: initDeadColor,
  })
  
  // logic
  const start = () => {
    cellState.isPlaying = true;
    updateInterval = Number(setInterval(() => {
      update();
    }, cellState.period));
  }
  const stop = () => {
    cellState.isPlaying = false;
    clearInterval(updateInterval);
    updateInterval = 0;
  }
  const init = () => {
    cellState.cells = Array.from({ length: cellState.cellNum }, () => getRandomInt(0,2));
    cellState.isActiveCell = Array.from(cellState.cells, (cell) => activeMap[cell]);
    cellState.isInit = true;
  }
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
  const countNeighbor = (i: number) => {
    return cellState.cells[calIndex(i-cellState.row-1)] + cellState.cells[calIndex(i-cellState.row)] + cellState.cells[calIndex(i-cellState.row+1)] 
      + cellState.cells[calIndex(i-1)] + cellState.cells[calIndex(i+1)] 
      + cellState.cells[calIndex(i+cellState.row-1)] + cellState.cells[calIndex(i+cellState.row)] + cellState.cells[calIndex(i+cellState.row+1)];
  }
  const calIndex = (i: number) => {
    return (i + cellState.cellNum) % cellState.cellNum;
  }
  const update = () => {
    const countNeighbors: number[] = Array.from({ length: cellState.cellNum }, (_, index) => countNeighbor(index));
    const nextCells: number[] = Array.from({ length: cellState.cellNum }, (_, index) => {
      const nextCellMap = [0, 0, cellState.cells[index], 1, 0, 0, 0, 0, 0];
      return nextCellMap[countNeighbors[index]];
    });
    cellState.cells = nextCells;
    cellState.isActiveCell = Array.from(cellState.cells, (cell) => activeMap[cell]);
  }
  const settingsConfirm = () => {
    cellState.period = settingsState.period;
    cellState.activeColor = sharp.concat(settingsState.activeColor);
    cellState.deadColor = sharp.concat(settingsState.deadColor);
  }
  const settingsReset = () => {
    cellState.period = initPeriod;
    settingsState.period = initPeriod;
    cellState.activeColor = sharp.concat(initActiveColor);
    settingsState.activeColor = initActiveColor;
    cellState.deadColor = sharp.concat(initDeadColor);
    settingsState.deadColor = initDeadColor;
  }

  return {
    cellState,
    settingsState,
    start,
    stop,
    init,
    getRandomInt,
    countNeighbor,
    update,
    settingsConfirm,
    settingsReset,
  }
}

export type cellCalculationStore = ReturnType<typeof cellCalculation>
