import React from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";

import Pharm from "./Pharm";
import Main from "./Main";
import Salud from "./Salud";
import Estetica from "./Estetica";
import Footer from "./Footer";
import Products from "./Products";
import Regeneratur from "./Regeneratur";
import Nosotros from "./Nosotros";

import geah_logo_gg  from "../images/geah_logo_gg.png";

function NavBar () {
  const [isActive, setisActive] = React.useState(false)

return (
  <HashRouter basename={process.env.PUBLIC_URL}>

<header>
<nav className="navbar is-fixed-top  " role="navigation" aria-label="main navigation">
  <div className="container">


<div className="navbar-brand ">
<NavLink className="navbar-item"  to="/">
<img  src={geah_logo_gg } alt="GEAH logo" />
GEAH GROUP
</NavLink>
<div
     onClick={() => {
        setisActive(!isActive)
      }}
      role='button'
      className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
      aria-label='menu'
      aria-expanded='false'
    >
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </div>
</div>

<div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
<div className='navbar-end '>

<div class="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="/pharm">
        <NavLink className="navbar-Link"
to="/pharm">PHARM</NavLink>
        </a>

        <div class="navbar-dropdown">

        <NavLink className="navbar-item"
to="/regeneratur">Regeneratur Vitamina C
</NavLink>
        <NavLink className="navbar-item"
to="/products/1">PeaudD'ange Colágeno Hidrolizado + Biotina</NavLink>
       <NavLink className="navbar-item"
to="/products/3">CamuPlus C</NavLink>
       <NavLink className="navbar-item"
to="/products/4">Magne-life Closuro de Magnesio</NavLink>
       <NavLink className="navbar-item"
to="/products/6">Peau de'Ange: Premium
</NavLink>
       <NavLink className="navbar-item"
to="/products/5">Peau de'Ange: Premium Frutos Rojos</NavLink>

        </div>
      </div>

  <div className='navbar-item '>


<NavLink className="navbar-item"
to="/estetica">Medicina Estética</NavLink>

<NavLink className="navbar-item"
to="/salud"> Salud y Belleza</NavLink>

<NavLink className="navbar-item"
to="/nosotros"> Nosotros </NavLink>




      </div>
    </div>
  </div>
  </div>
</nav>

</header>


<div >
      <Route exact path="/" component={Main}/>
      <Route path="/pharm" component={Pharm}/>
      <Route path="/salud" component={Salud}/>
      <Route path="/estetica" component={Estetica}/>
      <Route path="/products" component={Products}/>
      <Route path="/regeneratur" component={Regeneratur}/>
      <Route path="/nosotros" component={Nosotros}/>


    </div>
    <Footer/>
</HashRouter>

  );

}

export default NavBar;