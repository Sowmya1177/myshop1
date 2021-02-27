import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import Info from "./components/OrderItem/Info";
import Order from "./components/Order/Order";
import OrderDetail from "./components/OrderDetail/OrderDetail";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/OrderItem/:id" component={Info} />
          <Route path="/RecentOrder" component={Order} />
          <Route path="/OrderDetail/:id" component={OrderDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
