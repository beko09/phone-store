import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context'
import product from '../scss/comment/product.scss'
class Product extends Component {
    render() {
    const { id, title, img, inCart , price } = this.props.product;
        return (
            <ProductConsumer>
            {value =>(
                <div className='container'>
                <div className='card'>
                
                <div onClick={()=>{value.handelDetail(id)}}>
                <Link to='/detail'>
                    <img src={img} alt="product" />
                </Link>
                <button disabled={inCart?true:false} onClick={()=>{value.addToCart(id);value.openModel(id);}}>
                    {inCart?<span>incart</span>:<span>add cart</span>}
                </button>
                </div>
                

               
               <div className='text-card'>
                <p>{title}</p>
                <h5><span>$</span>{price}</h5>
               </div>
            </div>
            </div>
            )}
            </ProductConsumer>
        )
    }
}

export default Product
