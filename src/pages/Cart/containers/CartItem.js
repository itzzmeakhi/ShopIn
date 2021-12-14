import { connect } from 'react-redux';

import CartItem from './../../../components/CartItem/CartItem';
import { updateQty, removeItem } from './../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateQty: (item) => dispatch(updateQty(item)),
        removeItem: (id) => dispatch(removeItem(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);