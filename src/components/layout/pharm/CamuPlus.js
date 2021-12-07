import React from "react";
import Camu from "../../images/bottles/camu_orange.png"
import Card from "./Card";


function CamuPlus() {
  const modo = <p><strong>MODO DE USO:</strong> Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.</p>
  const ingredientes = <p><strong>INGREDIENTES:</strong> Colageno Hidrolizado, vitamina C (acido ascorbico), biotina, camu camu, stevia y sabor limon. </p>

  return (
<>
<Card
bottleImgs={Camu}
modo={modo}
ingredientes={ingredientes}
/>

</>
  );
}
export default CamuPlus;