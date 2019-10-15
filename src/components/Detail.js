import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';
import detail from '../scss/comment/detail.scss';
class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, price, info, title, inCart, company, img } = value.detailProduct;
                    return (
                        <React.Fragment>
                            <div className='container2'>
                                <div className='img'>
                                    <img src={img} alt="product" />
                                </div>
                                <div className='text2'>
                                    <h4>{title}</h4>
                                    <span>price :$ {price}</span><br />
                                    <span>company : {company}</span>
                                    <p>{info}</p>
                                    <div className='button'>
                                        <Link to='/'>
                                            <button className='btn2 btn'>
                                                back to product
                                            </button>
                                        </Link>
                                        <button className='btn' disabled={inCart ? true : false} onClick={() => { value.addToCart(id); value.openModel(id); }}>
                                            {inCart ? <span>incart</span> : <span>add cart</span>}
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </React.Fragment>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Detail;
