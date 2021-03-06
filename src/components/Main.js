import {React} from "react-router-dom";

import geah_landing_9_16x9 from "../images/landing/geah_landing_9_16x9.png"
import {NavLink} from "react-router-dom";


function Main () {
  return (
<div className="columns ">
<div className="column is-12 mt-6 image p-0">
<NavLink
to="/pharm">
<img alt="Geraldine holding product bottles" src={geah_landing_9_16x9} />
</NavLink>
</div>
</div>
  );
}

export default Main;