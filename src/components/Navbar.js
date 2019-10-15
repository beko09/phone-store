import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import { ProductConsumer } from '../Context';
import '../App.scss';
class Navbar extends Component {
    render() {
       
        return (
              <ProductConsumer>
              {value=>{const cart = value.cart;
              return(
                  <header>
                <Link to="/" className='nav-item'>
                    {/* <img src={logo} alt="store" className='img' /> */}
                    <h2>Phone-Store</h2>
                    
                </Link>
               
                    <h4 className='menu'>
                    <Link to="/cart" className='nav-item'>
                    <span className='item-count'>{cart.length}</span>
                    <h2>cart</h2>
                    
                    </Link>
                    </h4>
                
                <nav>
               
                <Link to="/" className='nav-item'>
                    <h2>product</h2>
                </Link>
                <Link to="/cart" className='nav-item'>
                <span className='item-count'>{cart.length}</span>
                    <h2>cart</h2>
                    
                </Link>
            </nav>
           </header>
              )
              }}
           
           </ProductConsumer>
        );
    }
}

export default Navbar
