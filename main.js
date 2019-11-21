const incrOne= {
    type: 'ADD1',
 };
 
const decrOne = {
    type: 'REMOVE1',
};

const incrTen = {
    type: 'ADD10',
};

const decrTen = {
    type: 'REMOVE10',
};

const res = {
    type: 'RESET',
};
 
 const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD1':
            return state + 1;
        case 'REMOVE1':
            return state - 1;
        case 'ADD10':
            return state + 10;
        case 'REMOVE10':
            return state - 10;
        case 'RESET':
            state = 0;
            return state;
        default:
            return state;
    }
 }

const { createStore } = Redux;
const store = createStore(counterReducer);

// MAIN
const renderStore = document.getElementById('render-store');
const render = () => {
   renderStore.innerHTML = store.getState();
}

store.subscribe(render);
render();

const addOne = document.getElementById('add-1');
addOne.addEventListener('click', () => {
    store.dispatch(incrOne)
});

const removeOne = document.getElementById('remove-1');
removeOne.addEventListener('click', () => {
    store.dispatch(decrOne)
});

const addTen = document.getElementById('add-10');
addTen.addEventListener('click', () => {
    store.dispatch(incrTen)
});

const removeTen = document.getElementById('remove-10');
removeTen.addEventListener('click', () => {
    store.dispatch(decrTen)
});

const reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
    store.dispatch(res)
});