import { connect } from 'react-redux';

import Cart from '../../../components/Cart/Cart';

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);