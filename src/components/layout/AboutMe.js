import React from "react";
import aboutme_geri from "../../components/images/geah_tree.jpg"
import Footer from "../../components/layout/Footer"

function AboutMe() {


  const ContactInfo = <div className="mt-4 ">
  <div className="columns pr-3 pl-3 pb-3 has-text-centered is-mobile mt-4">
  <div className="column">
  <p>GEAH PHARM</p>
  <a  href="https://www.instagram.com/geahpharm/" >
  <i className="fab fa-instagram fa-lg  text-dark"></i> </a>
  <a  href="https://www.facebook.com/pg/GeahPharm/" className="p-3 text-dark">
  <i className="fab fa-facebook-f fa-lg  "></i> </a>
  </div>

  <div className="column">
  <p> MEDICINA ESTÉTICA </p>
  <a  href="https://www.instagram.com/medicinaestetica_geah/" >
   <i className="fab fa-instagram fa-lg  text-dark"></i></a>

  <a  href="https://www.facebook.com/MedicinaEsteticaGEAH/" className="p-2  text-dark">
  <i className="fab fa-facebook-f fa-lg "></i></a>
  </div>

  <div className="column">
  <p> SALUD y BELLEZA </p>
  <a  href="https://www.facebook.com/GeahGroup/" className="p-2 text-dark"> <i className="fab fa-facebook-f fa-lg "></i>
  </a>
  </div>
  </div>
  <div   className="p-2  is-justify-content-center is-flex ">

  <div  className="columns ">
   < div className="column ">
    <h5>CONTACTO</h5>
    <a href="https://api.whatsapp.com/send?phone=+51997672947"  >
    <i className="fab fa-whatsapp"> 997-672-947 </i></a>
   <a href="https://api.whatsapp.com/send?phone=+51997672947" className="p-2"  >
   <i className="fab "> 973-364-627 </i></a>
   <a href="https://api.whatsapp.com/send?phone=+51997672947" className="float " >
  <i className="fab fa-whatsapp Whatsapp_float fa-lg"> </i></a>
  <br />
  <a href="mailto:geahgrupo@gmail.com">
  <i className="fas fa-envelope-open-text mr-2"></i>geahgroup@gmail.com</a>
  </div>

  < div className="column">
  <h5>DIRECCÍON</h5>
  <p><iframe title="Google Maps"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3900.2937853801!2d-76.9700528!3d-12.1603909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b859d0ec00d7%3A0x55ef6c5039ef07a3!2sAv.%20Guillermo%20Billinghurst%20787%2C%20San%20Juan%20de%20Miraflores%2015801%2C%20Peru!5e0!3m2!1sen!2sus!4v1609308430550!5m2!1sen!2sus" width="100%" height="70px" frameBorder="0"  aria-hidden="false" tabIndex="0"></iframe>
    Av Guillermo Billinghurst 787, Lima, Peru</p>
  </div>
  </div>
  </div>


    </div>

  return (
    <>
<section className="hero has-background-light is-fullheight">
  <div className="hero-body">
    <div className="">
    <img src={aboutme_geri} alt="founder's portrait"  className="is-pulled-left p-3 " style={{width:"500px"}} />
      <p className="title mt-1">Geraldine Huiñac Figueroa</p>
      <p className="subtitle">Fundadora</p>
      <p className="subtitle is-size-5">
<strong>GEAH GROUP</strong> fue fundado en 2019 por Geraldine Huiñac Figueroa, creando así una experiencia completamente nueva para los consumidores más exigentes al introducirse en el rubro de salud y belleza. </p>

<p className="subtitle is-size-5">
 <strong>    GEAH PHARM </strong>cuenta con suplementos nutricionales elaborados con los insumos más sublimes, nutritivos y naturales del Peru. <strong>GEAH PHARM </strong> comercializa sus productos a nivel nacional. </p>

<p className="subtitle is-size-5">

 Medicina Estética, ponemos a tu disposición productos para el cuidado de tu salud y imagen. Brindamos cursos en salud, estéticos y servicios de cuidado personal. Garantizamos el mejor cuidado de tu imagen y salud.
 </p>

 <p className="subtitle is-size-5">
 Llevamos calidad de vida al hogar de cada peruano, avalados por instituciones nacionales referentes a salud. Caracterizados por tener un compromiso constante en desarrollar nuevos productos que satisfagan las necesidades que hay en el mercado. Estamos comprometidos con el cuidado de la salud y la belleza de todos los peruanos.
  </p>

{ContactInfo}
    </div>
  </div>

</section>
<Footer />
    </>
  );
}

export default AboutMe;
