import React, { Component } from "react";


import geri_card_8 from "../images/geri_card_8.jpeg"
import geah_logos_1 from "../images/geah_logos_1.jpg"
import geah_logos_2 from "../images/geah_logos_2.jpg"
import geah_logo_estetica2 from "../images/geah_logo_estetica2.jpeg"


import '../style/Nosotros.css'



class Nosotros extends Component {
  render() {
    return (
      <div id="about" className="container" >
      <h1 className="text-center">
      GEAH GROUP 
    </h1>
   <div className="row">
   
     <div  className="col ">
       <div>
         
       <img className="floated img-fluid" src={geri_card_8} height={350}   alt="CEO pic" />
   
       </div>
    
   
     <p > <strong>GEAH PHARM </strong>,  un subdisario de GEAH GROUP, fue fundado en 2019 por <strong> Geraldine Huiñac Figueroa</strong>, creando así una experiencia completamente nueva para los consumidores más exigentes al introducirse en el rubro de <strong>salud y belleza </strong>.
     GEAH PHARM cuenta con suplementos nutricionales elaborados con los insumos más <strong>sublimes, nutritivos y naturales </strong> del Peru.
     GEAH PHARM comercializa sus productos a nivel nacional. 
     
Llevamos calidad de vida al hogar de cada peruano, avalados por instituciones nacionales referentes a salud. Caracterizados por tener un compromiso constante en desarrollar nuevos productos que satisfagan las necesidades que hay en el mercado. 
Estamos comprometidos con <strong> el cuidado de la salud y la belleza de todos los peruanos. </strong>
 </p>



</div>





     </div>
     <div>
       <center>
       <img src={geah_logos_1} height={110}className="padding  " alt="GEAH logo" />
       <img src={geah_logos_2} height={110} className="padding rounded-circle  " alt="GEAH logo" />
       <img src={geah_logo_estetica2} height={150} className="padding rounded-circle   " alt="GEAH logo" />

       </center>
     </div>
   
     
   </div>
   

    );
  }
}
 
export default Nosotros;