import React from "react";

import Video1 from "../components/Video1";
import Video2 from "../components/Video2";


import geah_coll_reg2_iv_1 from "../images/collage/geah_coll_reg2_iv_1.jpg"
import geah_coll_reg_5 from "../images/collage/geah_coll_reg_5.jpeg"
import geah_coll_reg_7 from "../images/collage/geah_coll_reg_7.jpeg"

function Regeneratur () {
  return (

<div className=" container  mt-6">

<section className="hero is-link ">
  <div className="hero-body  has-text-centered">
    <p className="title is-3">
  REGENERATUR VITAMINA C
    </p>
  </div>
</section>

<div className="columns-reverse ">
<div className="columns">
<div className="column mt-6 is-3">

<center>
<Video2/>
</center>

<figure className="image mt-4" >
<img  src={geah_coll_reg_7} alt={''} />
</figure>
</div>


<div className="column px-6 content  has-text-justified  pt-6">

    <p  >
  Para funcionar correctamente, nuestro <strong> sistema inmunitario requiere equilibrio y armonía </strong>, por lo que hay que tener en cuenta que los nutrientes que ingerimos a través de nuestra dieta ejercen una gran influencia en él.Nuestras necesidades de ciertos nutrientes varían en función de una serie de factores, entre los que se incluyen los elementos externos.
    </p>


 <figure className="image  " >
<img  src={geah_coll_reg2_iv_1
} alt={''}    />
</figure>

    <p  >
    Una ampolla contiene el equivalente a la vitamina C por aproximadamente 15 kilos de naranja.
    </p>

    <p  >
    La terapia endovenosa con vitamina C logra concentraciones elevadas que no lograríamos de forma oral, alcanzamos un nivel en sangre 125 veces más alto que tomándola, lo cual <strong> amplifica su poder antioxidante. Aparte de los usos en el metabolismo de nuestro cuerpo </strong>, la vitamina C es ampliamente utilizada en el área estética y de medicina antienvejecimiento; por su potente acción como antioxidante, promueve la formación de colágeno, ayudando a mejorar la luminosidad, el tono y la textura de la piel.
    </p>

</div>
</div>

<div className="columns">

  <div className="column is-7">
  <Video1 />
  </div>

  <div className="column">
<figure className="image   " >
<img  src={geah_coll_reg_5} alt={''}    />
</figure>
</div>
</div>
</div>
</div>

      );
    }


  export default Regeneratur;