import { connect } from 'react-redux';

import ProductList from '../../../components/ProductList/ProductList';

const mapStateToProps = state => {
    return {
        productItems: state.products
    }
};

export default connect(mapStateToProps)(ProductList);