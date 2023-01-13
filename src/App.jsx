import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DetailProduct from './pages/DetailProduct';
import MainPage from './pages/MainPage';
import ShoppingCart from './pages/ShoppingCart';
import CheckOut from './pages/CheckOut';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/product/:id" component={ DetailProduct } />
          <Route exact path="/checkout" component={ CheckOut } />
          <Route exact path="/" component={ MainPage } />
          {/* <Route path="*" component={ NotFound } /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
