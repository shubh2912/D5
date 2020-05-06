import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SearchBar from './Components/SearchBar/SearchBar';
import Details from './Components/ItemDetails/ItemDetails';
import Header from './Components/Header/Header';
import Home from './Container/Home/Home';


class Router extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/home" />
            )} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/search' component={SearchBar} />
            <Route exact path='/restaurantdetailspage' component={Details} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
