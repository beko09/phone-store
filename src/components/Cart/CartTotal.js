import React from 'react'
import { Link } from "react-router-dom";
export default function CartTotal({value}) {
    const {cartSubTotal,carttasx,cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <hr style={{borderColor:'rgba(226, 226, 226, .3)'}}/>
        <div>
            <Link to='/' style={{textDecoration:'none'}}>
                <button onClick={()=>clearCart()}> clear cart</button>
            </Link>
        </div>
        <div style={{float:'right',
    marginRight: '30px'}}>
            <h5>
                <span>subtotal: $</span>
                <strong>{cartSubTotal}</strong>
            </h5>
            <h5>
                <span>Tax: $</span>
                <strong>{carttasx}</strong>
            </h5>
            <h5>
                <span>Total: $</span>
                <strong>{cartTotal}</strong>
            </h5>
            
        </div>
        </React.Fragment>
    )
}
