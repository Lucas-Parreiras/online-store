import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DetailProduct from './pages/DetailProduct';
import MainPage from './pages/MainPage';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/shoppingcart" component={ ShoppingCart } />
        <Route exact path="/product/:id" component={ DetailProduct } />
        <Route exact path="/" component={ MainPage } />
        {/* <Route path="*" component={ NotFound } /> */}
      </Switch>
    );
  }
}

export default App;
