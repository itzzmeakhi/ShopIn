import { connect } from 'react-redux';

import ProductItem from '../../../components/ProductItem/ProductItem';
import { addItemToCart, updateQty } from './../../Cart/actions';

const mapStateToProps = (state, ownProps) => {
    const cartItems = state.cart.cartItems;
    const item = ownProps.item;
    const cartItemIdx = cartItems.findIndex(cItem => cItem.id === item.id);
    return {
        ...ownProps,
        alreadyInCart: cartItemIdx === -1 ? false : true,
        qty: cartItemIdx === -1 ? 0 : cartItems[cartItemIdx].qty
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (item) => dispatch(addItemToCart(item)),
        updateQty: (item) => dispatch(updateQty(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);