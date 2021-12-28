import {NavLink } from "react-router-dom";


  function Logos () {
  return (
<>

<div className="columns is-mobile is-justify-content-center">
  <div className="column  is-2">
  <figure className="avatar" >
  <NavLink to="pharm">
<img  src="../images/geah_logo_pharm_3.png"  alt="geah pharm" className=" avatar"/>
</NavLink>
</figure>
  </div>
  <div className="column is-2">
  <figure className="avatar" >
  <NavLink to="salud">
<img  src="../images/geah_logos_sbv2.png"    alt="geah pharm" className=" avatar"/>
</NavLink>
</figure>
  </div>
  <div className="column is-2"><figure className="avatar" >
  <NavLink to="estetica">
<img  src="../images/geah_logo2.jpeg"    alt="geah pharm" className=" avatar"/>
</NavLink>
</figure>
</div>
</div>

</>
);
};

export default Logos;