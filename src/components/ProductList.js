import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from '../Context';

class ProductList extends Component {
    
    render() {
        return (
            <React.Fragment>
                <h3 className='title'> our product</h3>
                <div>
                    <ProductConsumer>
                        {(value) => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product}/>
                            })
                        }}
                    </ProductConsumer>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;
