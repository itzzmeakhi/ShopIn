import { combineReducers } from 'redux';

import cartReducer from './Cart/reducer';
import productsReducer from './Products/reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
})

export default rootReducer;