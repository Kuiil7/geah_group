import React, { Component } from "react";

import geah_salud_cover from "../images/geah_salud_cover.png"



class Salud extends Component {
    render() {
      return (
<div className="container">

<div className="hero is-large">
<img alt="four women in bikini "  className="" src={geah_salud_cover} />
  </div>

 <div className="   text-center container p-4"   >
<div>
  <p className="text-left">
  <h1 className="title pb-4">
  <strong>
  ¡Un espacio de artistas!
    </strong>
    </h1>
Servicio de calidad con personal altamente calificado.
Ponemos a tu disposición las mejores líneas del mercado de belleza.
Manos mágicas que resaltarán tu belleza natural, la mejor versión de ti.
  </p>

</div>



  </div>


  </div>


      );
    }
  }

  export default Salud;