import React, { Component } from "react";

import geri_card_8 from "../images/geri_card_8.jpeg";

import Logos from "./Logos";

class Nosotros extends Component {
    render() {
      return (
<div className="container  "   style={{marginTop:"50px"}}>

<section className="hero is-link  ">
  <div className="hero-body container">
    <p className="title">
   Nosotros
    </p>
  </div>
</section>


<div className="columns">
  <div className="column is-6">
    <section className="hero is-link">
  <figure className="image ">
  <img src={geri_card_8} className="fade-in " alt="self-portrait" />
  </figure>
  <div className="hero-body " >
    <p className="title 2">
    Geraldine  <strong>Huiñac Figueroa </strong>
    </p>
    <p className="subtitle">
 Fundadora
     </p>
  </div>
  </section>


</div>
  <div className="column"><div className="column has-text-justified ">

<p className="pb-2 "><strong>GEAH GROUP</strong> fue fundado en 2019 por <strong> Geraldine Huiñac Figueroa</strong>, creando así una experiencia completamente nueva para los consumidores más exigentes al introducirse en el rubro de <strong>salud y belleza </strong>.</p>

<p className="pb-2 ">
<strong>GEAH PHARM </strong>cuenta con suplementos nutricionales elaborados con los insumos más sublimes, nutritivos y naturales del Peru. GEAH PHARM comercializa sus productos a nivel nacional.
</p>

<p className="pb-2 ">
<strong> Medicina Estética</strong>Ponemos a tu disposición productos para el cuidado de tu salud y imagen. Brindamos cursos en salud, estéticos y servicios de cuidado personal. Garantizamos el mejor cuidado de tu imagen y salud.
</p>

<p className="pb-2 ">
Llevamos calidad de vida al hogar de cada peruano, avalados por instituciones nacionales referentes a salud. Caracterizados por tener un compromiso constante en desarrollar nuevos productos que satisfagan las necesidades que hay en el mercado. Estamos comprometidos con el cuidado de la salud y la belleza de todos los peruanos.

</p>

</div>
<Logos />

</div>
</div>

       </div>


      );
    }
  }

  export default Nosotros;