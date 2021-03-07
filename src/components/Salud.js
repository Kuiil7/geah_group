import React, { Component } from "react";

import geah_salud_cover from "../images/geah_salud_cover.png"



class Salud extends Component {
    render() {
      return (
<div className="container" style={{marginTop:"60px"}}>

<div className="columns">
  <div className="column is-full">
    <section className="hero is-full">
  <div className="hero-body">
  <figure className="image   " >
  <img alt="four women in bikini "  className="" src={geah_salud_cover} />
  </figure>

    <p className="subtitle-3 mt-4">
    Servicio de calidad con personal altamente calificado.
Ponemos a tu disposición las mejores líneas del mercado de belleza.
Manos mágicas que resaltarán tu belleza natural, la mejor versión de ti.
    </p>
  </div>
</section>


</div>
  </div>
  </div>


      );
    }
  }

  export default Salud;