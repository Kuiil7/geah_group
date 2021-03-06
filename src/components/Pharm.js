import React, { Component } from "react";

import { NavLink,} from "react-router-dom";

import biotina_pink from "../images/bottles/Biotina_pink.png";

import blue_bottle from "../images/bottles/blue_bottle.png";

import camu_orange from "../images/bottles/camu_orange.png";

import reg_vitamin2 from "../images/bottles/reg_vitamin2.png";

import frutos_rojos from "../images/bottles/frutos_rojos.png";

import Regeneratur from "../components/Regeneratur";



class Pharm extends Component {
    render() {
      return (
<div className="container mt-6" >



<section className="hero is-small is-link " style={{marginTop:"60px"}}>

  <div className="hero-body ">
    <p className="title ">
    GEAH PHARM
    </p>
    <p className="subtitle">
     "Los mejores cuidando tu salud"
    </p>
  </div>
</section>





<div className="columns is-mobile mt-2 pr-4 pl-4">

<div className="column ">
 <NavLink
to="/products/1">
  <figure className="image" >
  <img  src={biotina_pink} alt={''}    />
</figure>
</NavLink>
</div>

  <div className="column">
  <NavLink
to="/products/4">
  <figure className="image" >
  <img  src={blue_bottle } alt={''}    />
</figure>
</NavLink>
  </div>

  <div class="column ">
  <NavLink  to="/products/3">
  <figure className="image" >
<img  src={camu_orange} alt={''}    />
</figure>
</NavLink>
    </div>

    <div class="column ">
  <NavLink  to="/products/3">
  <figure className="image" >
<img  src={frutos_rojos} alt={''}    />
</figure>
</NavLink>
    </div>

    <div class="column is-3">
  <NavLink  to="/products/3">
  <figure className="image " >
<img  src={reg_vitamin2} alt={''}    />
</figure>
</NavLink>
    </div>
</div>

  <Regeneratur />

       </div>




      );
    }
  }

  export default Pharm;