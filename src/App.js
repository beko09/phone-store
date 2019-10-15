import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Defult from './components/Defult';
import Model from './components/Model';
function App() {
  return (
    <React.Fragment>
     <Navbar />
     <Switch>
       <Route exact path="/" component={ProductList} />
       <Route path="/detail" component={Detail} />
       <Route path="/cart" component={Cart} />
       <Route component={Defult} />
     </Switch>
     <Model/>
    </React.Fragment>
  );
}

export default App;
