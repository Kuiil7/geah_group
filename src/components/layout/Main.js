import React from "react";
import {NavLink } from "react-router-dom";

function Main() {



  return (
    <>



<section className="hero  is-fullheight is-hero-image ">
  <div className="hero-body">
    <div className="has-background-dark p-4 box " style={{width:"550px", opacity:".7"}}>
      <p className="title has-text-light mt-4" style={{ opacity:"1"}} >
      <NavLink className="has-text-white" to="/pharm">GEAH Pharm</NavLink>
      </p>
      <p className="subtitle has-text-light " style={{ opacity:"1"}} >
      Ponemos a tu disposición productos para el cuidado de tu salud y imagen.      </p>
    </div>
  </div>
</section>
    </>
  );
}

export default Main;
