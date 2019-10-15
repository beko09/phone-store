import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from '../logo.svg'
import '../App.scss';
class Navbar extends Component {
    render() {
        return (
           <header>
                <Link to="/" className='nav-item'>
                    {/* <img src={logo} alt="store" className='img' /> */}
                    <h2>Phone-Store</h2>
                </Link>
               
                    <h4 className='menu'>
                    <Link to="/cart" className='nav-item'>
                    <h2>cart</h2>
                    </Link>
                    </h4>
                
                <nav>
               
                <Link to="/" className='nav-item'>
                    <h2>product</h2>
                </Link>
                <Link to="/cart" className='nav-item'>
                    <h2>cart</h2>
                </Link>
            </nav>
           </header>
        )
    }
}

export default Navbar
