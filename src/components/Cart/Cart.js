import React, { Component } from 'react';
import CartColum from './cartColum';
import EmtyCart from './EmtyCart';
import { ProductConsumer } from '../../Context';
import CartList from './CartList';
import CartTotal from './CartTotal';
class Cart extends Component {
    render() {
        return (
          <section>
            <ProductConsumer>
            {value =>{
                const {cart} = value;
                if(cart.length>0){
                    return (
                      <React.Fragment>
                        <CartColum />
                        <CartList value={value} />
                        <CartTotal value={value} />
                        
                      </React.Fragment>
                    )
                }
                else {
                    return <EmtyCart />
                }
            }}
            </ProductConsumer>
            
            
            
          </section>
        )
    }
}

export default Cart
