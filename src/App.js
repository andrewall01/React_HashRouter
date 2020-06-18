import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Principal from "./components/principal";
import Producto from "./components/producto";
import Detalle from "./components/detalle"
import Menu from './components/menu';
import "./App.css";

class App extends React.Component {
  // ...
  render() {
    return (
      <div>
        <header>
          <Menu></Menu>
        </header>
        <main>
          <Switch>
          //URL: localhost:3000/producto/detalle/3
            <Route exact path="/" component={Principal} />
            <Route exact path="/producto" component={Producto} />
            <Route path="/producto/detalle/:id" component={ Detalle } />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
