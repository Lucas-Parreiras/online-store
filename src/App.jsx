import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          {/* <Route path="*" component={ NotFound } /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
