import React from "react";
import geah_estetica_cover from "../../images/geah_estetica_cover.png"

function MedicinaEstetica () {

  const contentList = <p className="subtitle"> Limpiezas faciales - Megadosis de vitamina C endovenosa -Mesoterapia reducción de papada y cachetes
  Reductores y reafirmantesCarboxiterapia y drenaje linfático
   - Levantamiento de glúteos mas reafirmantes con peptonas y vitamina C -
  Peptonas en piernas,pantorrillas, brazos y pectorales -
 Taller de inyectoterapia ( Sin conocimientos previos) -
 Taller de inyectables básico aplicados a la estética.</p>

const Title =   <p className="title">Medicina Estética (coming soon)</p>


 return (
<>
<section className="hero has-background-white-bis is-fullheight">
  <div className="hero-body">
    <div className="">
      {Title}
      <figure className="image" >
     <img alt="four women in bikini"  src={geah_estetica_cover} />
   </figure>
    {contentList}
    </div>
  </div>
</section>

</>
);
}

export default MedicinaEstetica;