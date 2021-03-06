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



<section class="hero is-small is-link " style={{marginTop:"60px"}}>

  <div class="hero-body ">
    <p class="title ">
    GEAH PHARM
    </p>
    <p class="subtitle">
     "Los mejores cuidando tu salud"
    </p>
  </div>
</section>

<div className="columns is-flex-wrap-wrap is-centered pt-4 ">

<div className="column " >

<div class="card p-4  ">
  <div class="card-image  ">

  <NavLink
to="/products/1">
  <figure className="image p-4  " >
  <img  src={biotina_pink} alt={''}    />
</figure>
</NavLink>

  </div>
</div>
</div>

<div className="column " >

<div class="card p-4 ">
  <div class="card-image p-4   ">

<NavLink
to="/products/4">
  <figure className="image   " >
  <img  src={blue_bottle } alt={''}    />
</figure>
</NavLink>
  </div>
</div>
</div>

<div className="column " >
<div class="card p-4  ">
  <div class="card-image p-4  ">
  <NavLink  to="/products/3">
  <figure className="image   " >
<img  src={camu_orange} alt={''}    />
</figure>
</NavLink>
  </div>
</div>
</div>

<div className="column p-4  " >
<div class="card  ">
  <div class="card-image p-4 is-3  ">
<NavLink  to="/products/5">
  <figure className="image   " >
<img  src={frutos_rojos} alt={''}    />
</figure>
</NavLink>

  </div>
</div>
</div>

<div className="column p-4 is-3 " >
<div class="card  ">
  <div class="card-image p-4  ">

<NavLink  to="/products/2">
  <figure className="image   " >
<img  src={reg_vitamin2} alt={''}    />
</figure>
</NavLink>
  </div>
</div>
</div>


  </div>
  <Regeneratur />

       </div>




      );
    }
  }

  export default Pharm;