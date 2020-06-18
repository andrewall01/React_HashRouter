import React, { Component } from "react";

class Detalle extends Component {
  constructor(props) {
    super();
    this.state = {
      nombreProducto: "",
    };
  }

  componentWillMount() {
    let idprod = this.props.match.params.id
    let ruta = "http://localhost:3600/productos/" + idprod;
    console.log(ruta);
    fetch(ruta)
      .then((response) => response.json())
      .then((dato) => {
        this.setState({
          nombreProducto: dato.nombre,
        });
      });
  }

  render() {
    return (
      <div>
        <h3>Detalle del producto</h3>
        <p>ID:{this.props.match.params.id}</p>
        <p>{this.state.nombreProducto}</p>
      </div>
    );
  }
}
export default Detalle;
