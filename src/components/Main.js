/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Productos from "./Productos";
import Nosotros from "./Nosotros";
import "../index.css"

 
class Main extends Component {
    render() {
      return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
          <div id="navbar1">
           
            <ul className="navbar">
            <li><NavLink to="/">GEAH GROUP</NavLink></li>

              <li><NavLink to="/producto">Productos</NavLink></li>
              <li><NavLink to="/nosotros">Nosotros</NavLink></li>
            </ul>
          <div className="content">
  <Route exact path="/" component={Home}/>
  <Route path="/producto" component={Productos}/>
  <Route path="/nosotros" component={Nosotros}/>
</div>
          </div>
        </HashRouter>

<footer id="footer">
<div className=" text-light ">
  <div className="row">
    <div className="col-sm text-left">
    <h5>
    HORARIOS
      </h5>
     
      <p>
   Lunes - Viernes:
   8AM - 4PM
      </p>
     
    
    </div>
    <div className="col-sm text-left ">
    <h5>
    CONTACTO
      </h5> 
      <a href="https://api.whatsapp.com/send?phone=+51997672947"  >
      <i className="fab fa-whatsapp fa-lg"> +51 973 364 627

 </i>
 </a>

      <p>
      <a href="https://api.whatsapp.com/send?phone=+51997672947" className="float " >
<i className="fab fa-whatsapp my-float fa-lg"> </i>
</a>

      </p>
      <p>
      <i className="fas fa-envelope-open-text fa-lg"></i> 
      

      <a href="mailto:geahgrupo@gmail.ocm" > GeahGroup@gmail.com</a>

      </p>
      <p>
     
      <a  href="https://www.instagram.com/geraldinesskinblog/">  <i className="fab fa-instagram fa-lg"></i>  </a>
      
      <a  href="https://www.facebook.com/pg/GeahPharm/"> <i class="fab fa-facebook-f fa-lg"></i> </a>

      </p>
     

    </div>
    <div class="col-sm text-left">
  
      <h5>
        DIRECCION
      </h5>
      <p>
     <iframe title="Google Maps"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3900.2937853801!2d-76.9700528!3d-12.1603909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b859d0ec00d7%3A0x55ef6c5039ef07a3!2sAv.%20Guillermo%20Billinghurst%20787%2C%20San%20Juan%20de%20Miraflores%2015801%2C%20Peru!5e0!3m2!1sen!2sus!4v1609308430550!5m2!1sen!2sus" width="90%" height="80px" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
     </p>
<p>
 Av Guillermo Billinghurst 787, San Juan De Miraflores
  </p>    </div>
  </div>
</div>

</footer>
</div>
  
      );
    }
  }
 
export default Main;