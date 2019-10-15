import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import model from '../scss/comment/model.scss';

export default class Model extends Component {
    render() {
        return (
            <ProductConsumer>
            {value=>{
                const {modelopen,closeModel}= value;
                const {img,title,price} = value.modelProduct;
                const cart = value.cart;
                if(!modelopen){
                    return null
                }
                else {
                    return (
                        <div className='model'>
                            <div className='inner-model'>
                            <div className='md'><img src={img} alt={title} /></div>
                            <div className='inner2'>
                                <h3>{title}</h3>
                                <h4>price: ${price}</h4>
                            </div>
                            <div className='inner3'>
                                <Link to='/'>
                                    <button onClick={()=>closeModel()}> continue shop</button>
                                </Link>
                                <Link to='/cart'>
                                    <button  onClick={()=>closeModel()}> go to cart</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    )
                }
            }}
            </ProductConsumer>
        )
    }
}
