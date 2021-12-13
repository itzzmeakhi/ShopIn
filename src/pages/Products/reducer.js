import items from './../../data.json';

const INITIAL_STATE = {
    products: [...items]
};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default productsReducer;