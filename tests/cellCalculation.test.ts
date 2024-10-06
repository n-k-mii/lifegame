import cellCalculation  from "../src/composables/cellCalculation";

describe('cellCalculation logic', () => {

    // init
    let store: ReturnType<typeof cellCalculation>;
    beforeEach(() => {
        store = cellCalculation();
    });

    test('start sets isPlaying to true', () => {
        // set
        store.cellState.isPlaying = false;

        // call start()
        store.start();

        // assert
        expect(store.cellState.isPlaying).toBe(true);
    });

    test('stop sets isPlaying to false', () => {
        // set
        store.cellState.isPlaying = true;

        // call stop()
        store.stop();

        // assert
        expect(store.cellState.isPlaying).toBe(false);
    });

    test('init set isInit to true and isActiveCell', () => {
        // set
        store.cellState.isInit = false;

        // call init()
        store.init();

        // assert
        expect(store.cellState.isInit).toBe(true);
        expect(store.cellState.isActiveCell.length).toBe(4000);
        expect(store.cellState.isActiveCell).toContain(true);
        expect(store.cellState.isActiveCell).toContain(false);
    });

    test('getRandomInt', () => {
        // set
        const inputs = [
            {min: 0, max: 2},
            {min: 3, max: 10},
            {min: -10, max: 0}
        ];

        inputs.forEach(input => {
            for (let i = 0; i < 10; i++) {
                // call getRandomInt()
                var result = store.getRandomInt(input.min, input.max);

                // assert
                expect(result).toBeGreaterThanOrEqual(input.min);
                expect(result).toBeLessThan(input.max);
            };
        });
    });

    test('countNeighbor_3*3', () => {
        // set
        store.cellState.row = 3;
        store.cellState.column = 3;
        store.cellState.cellNum = 9;
        store.cellState.cells = [
            1, 0, 0,
            0, 1, 0,
            0, 1, 0
        ];

        const expectedResult = [
            2, 3, 3,
            3, 2, 3,
            3, 2, 3
        ];

        for (let i = 0; i < store.cellState.cellNum; i++) {
            // call countNeighbor()
            var result = store.countNeighbor(i);

            // assert
            expect(result).toBe(expectedResult[i]);
        }
    });

    test('countNeighbor_4*4', () => {
        // set
        store.cellState.row = 4;
        store.cellState.column = 4;
        store.cellState.cellNum = 16;
        store.cellState.cells = [
            0, 0, 0, 0,
            0, 1, 1, 0,
            0, 1, 1, 0,
            0, 0, 0, 0,
        ];

        const expectedResult = [
            1, 2, 2, 1,
            2, 3, 3, 2,
            2, 3, 3, 2,
            1, 2, 2, 1,
        ];

        for (let i = 0; i < store.cellState.cellNum; i++) {
            // call countNeighbor()
            var result = store.countNeighbor(i);

            // assert
            expect(result).toBe(expectedResult[i]);
        }
    });

    test('update_3*3', () => {
        // set
        store.cellState.row = 3;
        store.cellState.column = 3;
        store.cellState.cellNum = 9;
        store.cellState.cells = [
            1, 0, 0,
            0, 1, 0,
            0, 1, 0
        ];

        const expectedCells = [
            1, 1, 1,
            1, 1, 1,
            1, 1, 1
        ];
        const expectedIsActiveCell = [
            true, true, true,
            true, true, true,
            true, true, true
        ];

        // call update()
        store.update();

        // assert
        expect(store.cellState.cells).toEqual(expectedCells);
        expect(store.cellState.isActiveCell).toEqual(expectedIsActiveCell);
    });

    test('update_4*4', () => {
        // set
        store.cellState.row = 4;
        store.cellState.column = 4;
        store.cellState.cellNum = 16;
        store.cellState.cells = [
            0, 0, 0, 0,
            0, 1, 1, 0,
            0, 1, 1, 0,
            0, 0, 0, 0,
        ];

        const expectedCells = [
            0, 0, 0, 0,
            0, 1, 1, 0,
            0, 1, 1, 0,
            0, 0, 0, 0,
        ];
        const expectedIsActiveCell = [
            false, false, false, false,
            false, true, true, false,
            false, true, true, false,
            false, false, false, false,
        ];

        // call update()
        store.update();

        // assert
        expect(store.cellState.cells).toEqual(expectedCells);
        expect(store.cellState.isActiveCell).toEqual(expectedIsActiveCell);
    });

    test('settingsConfirm', () => {
        // set
        store.settingsState.period = 1000;
        store.settingsState.activeColor = 'ffffff';
        store.settingsState.deadColor = '000000';

        // call settingsConfirm()
        store.settingsConfirm();

        // assert
        expect(store.cellState.period).toBe(1000);
        expect(store.cellState.activeColor).toBe('#ffffff');
        expect(store.cellState.deadColor).toBe('#000000');
    });

    test('settingsReset', () => {        
        // call settingsReset()
        store.settingsReset();

        // assert
        expect(store.cellState.period).toBe(1500);
        expect(store.cellState.activeColor).toBe('#ec4899');
        expect(store.cellState.deadColor).toBe('#ffffff');
        expect(store.settingsState.period).toBe(1500);
        expect(store.settingsState.activeColor).toBe('ec4899');
        expect(store.settingsState.deadColor).toBe('ffffff');
    });
});