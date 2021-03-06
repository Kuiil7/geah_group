import React from "react";
import {NavLink} from "react-router-dom";

import Video1 from "../components/Video1";
import Video2 from "../components/Video2";


import geah_coll_reg2_iv_1 from "../images/collage/geah_coll_reg2_iv_1.jpg"
import geah_coll_reg_5 from "../images/collage/geah_coll_reg_5.jpeg"
import geah_coll_reg_7 from "../images/collage/geah_coll_reg_7.jpeg"

function Regeneratur () {
  return (

<div className="container
"  >


<div class="columns">

  <div class="column  ">
  <section class="hero is-link ">
  <div class="hero-body  has-text-centered">
    <p class="title">
  REGENERATUR VITAMINA C
    </p>
  </div>
</section>

<div className="has-text-justified p-2">
    <p className=" pb-3" >
  Para funcionar correctamente, nuestro <strong> sistema inmunitario requiere equilibrio y armonía </strong>, por lo que hay que tener en cuenta que los nutrientes que ingerimos a través de nuestra dieta ejercen una gran influencia en él.Nuestras necesidades de ciertos nutrientes varían en función de una serie de factores, entre los que se incluyen los elementos externos.
    </p>

    <p className="pb-3" >
    Una ampolla contiene el equivalente a la vitamina C por aproximadamente 15 kilos de naranja.
    </p>

    <p >
    La terapia endovenosa con vitamina C logra concentraciones elevadas que no lograríamos de forma oral, alcanzamos un nivel en sangre 125 veces más alto que tomándola, lo cual <strong> amplifica su poder antioxidante. Aparte de los usos en el metabolismo de nuestro cuerpo </strong>, la vitamina C es ampliamente utilizada en el área estética y de medicina antienvejecimiento; por su potente acción como antioxidante, promueve la formación de colágeno, ayudando a mejorar la luminosidad, el tono y la textura de la piel.
    </p>
  </div>
  </div>
  <div class="column is-3 has-text-centered">
<Video2/>
  <NavLink
to="/regeneratur">
  <p>Regeneratur Vitamin C</p>
  </NavLink >
    </div>
</div>


<div class="columns ">

  <div class="column is-7">

  <figure className="image   " >
<img  src={geah_coll_reg2_iv_1} alt={''}    />
</figure>
  </div>
  <div class="column ">

  <figure className="image   " >
<img  src={geah_coll_reg_7} alt={''}    />
</figure>
  </div>
</div>


<div class="columns">
  <div class="column is-7">
  <Video1 />
  </div>
  <div class="column">
    <figure className="image   " >
<img  src={geah_coll_reg_5} alt={''}    />
</figure>
</div>
</div>





</div>

      );
    }


  export default Regeneratur;