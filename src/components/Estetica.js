import React, { Component } from "react";

import geah_estetica_cover from "../images/cover/geah_estetica_cover.png"




class Estetica extends Component {
    render() {
      return (

<div className="container" style={{marginTop:"60px"}}>

  <div class="hero  is-full is-justify-content-center mb-5 container">
  <img alt="four women in bikini "  className="is-fluid" src={geah_estetica_cover} />

  </div>

  <div class=" p-4  ">

  <h3 className="title ">
    <strong>
    Ponemos a tu disposición productos para el cuidado de tu salud e imagen. Brindamos cursos en salud, estéticos y servicios de cuidado personal. Garantizamos el mejor cuidado de tu imagen y salud.
  </strong>
</h3>
  <ul  >
  <li >  - Limpiezas faciales</li>
  <li >- Megadosis de vitamina C endovenosa</li>
  <li >- Mesoterapia- reducción de papada y cachetes</li>
  <li >- Reductores y reafirmantes</li>
  <li >- Carboxiterapia y drenaje linfático</li>
  <li >- Levantamiento de glúteos mas reafirmantes con peptonas y vitamina C
</li>
  <li >- Peptonas en piernas,pantorrillas, brazos y pectorales.
</li>
  <li >- Taller de inyectoterapia ( Sin conocimientos previos)
</li>
  <li >- Taller de inyectables básico aplicados a la estética
</li>
</ul>

    </div>
</div>



      );
    }
  }

  export default Estetica;