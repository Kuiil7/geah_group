import React from "react";
import geah_salud_cover from "../../images/geah_salud_cover.png"

function SaludyBelleza () {

  const content = <div>
    <p className="title">Salud y Belleza (coming soon)</p>
    <figure className="image">
  <img alt="four women in bikini"  src={geah_salud_cover} />
  </figure>
    <p className="subtitle is-size-6">  Servicio de calidad con personal altamente calificado. Ponemos a tu disposición las mejores líneas del mercado de belleza. Manos mágicas que resaltarán tu belleza natural, la mejor versión de ti.</p>

    </div>
 return (
<>


<section className="hero has-background-white-bis is-fullheight">
  <div className="hero-body">
    <div className="">
   {content}

    </div>
  </div>
</section>



</>
);
}

export default SaludyBelleza;