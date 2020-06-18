import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Producto extends Component {
  render() {
    return (
      <div>
        <h3>Lista de Productos</h3>
        <ul>
          <li><Link to='/producto/detalle/1'>Fanta</Link></li>
          <li><Link to='/producto/detalle/2'>Cheetos</Link></li>
          <li><Link to='/producto/detalle/3'>Oreo</Link></li>
        </ul>
      </div>
    );
  }
}
export default Producto;
