import { connect } from 'react-redux';

import CartItem from './../../../components/CartItem/CartItem';
import { updateQty } from './../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateQty: (item) => dispatch(updateQty(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);