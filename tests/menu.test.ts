import menu  from "../src/composables/menu";

describe('menu logic', () => {

    // init
    let store: ReturnType<typeof menu>;
    beforeEach(() => {
        store = menu();
    });

    test('handleTabChange sets activeTab to 0 and visible to [true, false, false]', () => {
        // set input
        const event = { originalEvent: new Event('click'), index: 0 };

        // call handleTabChange
        store.handleTabChange(event);

        // assert
        expect(store.menuState.activeTab).toBe(0);
        expect(store.menuState.visible).toEqual([true, false, false]);
    });

    test('handleTabChange sets activeTab to 1 and visible to [false, true, false]', () => {
        // set input
        const event = { originalEvent: new Event('click'), index: 1 };

        // call handleTabChange
        store.handleTabChange(event);

        // assert
        expect(store.menuState.activeTab).toBe(1);
        expect(store.menuState.visible).toEqual([false, true, false]);
    });

    test('handleTabChange sets activeTab to 2 and visible to [false, false, true]', () => {
        // set input
        const event = { originalEvent: new Event('click'), index: 2 };

        // call handleTabChange
        store.handleTabChange(event);

        // assert
        expect(store.menuState.activeTab).toBe(2);
        expect(store.menuState.visible).toEqual([false, false, true]);
    });

    test('handleClose sets activeTab 0 to 0', () => {
        // set
        store.menuState.activeTab = 0;

        // call handleClose()
        store.handleClose();

        // assert
        expect(store.menuState.activeTab).toBe(0);
    });

    test('handleClose sets activeTab 1 to 0', () => {
        // set
        store.menuState.activeTab = 1;

        // call handleClose()
        store.handleClose();

        // assert
        expect(store.menuState.activeTab).toBe(0);
    });

    test('handleClose sets activeTab 2 to 0', () => {
        // set
        store.menuState.activeTab = 1;

        // call handleClose()
        store.handleClose();

        // assert
        expect(store.menuState.activeTab).toBe(0);
    });

    test('modalClose sets activeTab 0 to 0 and visible to [false, false, false]', () => {
        // set
        store.menuState.activeTab = 0;
        store.menuState.visible = [true, false, false];

        // call modalClose()
        store.modalClose();

        // assert 
        expect(store.menuState.activeTab).toBe(0);
        expect(store.menuState.visible).toEqual([false, false, false]);
    });

    test('modalClose sets activeTab 1 to 0 and visible to [false, false, false]', () => {
        // set
        store.menuState.activeTab = 1;
        store.menuState.visible = [false, true, false];

        // call modalClose()
        store.modalClose();

        // assert 
        expect(store.menuState.activeTab).toBe(0);
        expect(store.menuState.visible).toEqual([false, false, false]);
    });

    test('modalClose sets activeTab 2 to 0 and visible to [false, false, false]', () => {
        // set
        store.menuState.activeTab = 2;
        store.menuState.visible = [false, false, true];

        // call modalClose()
        store.modalClose();

        // assert 
        expect(store.menuState.activeTab).toBe(0);
        expect(store.menuState.visible).toEqual([false, false, false]);
    });
})