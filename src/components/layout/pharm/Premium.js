import React from "react";
import Premium1 from "../../images/bottles/PAP_Premium_black.png"
import Card from "./Card";

const modo = <p><strong>MODO DE USO:</strong> Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.</p>

const ingredientes = <p><strong>INGREDIENTES:</strong>Colageno Hidrolizado, Arándano, Magnesio, Zinc, Maltodextrina, Vitamina C (Ácido ascórbic), stevia.</p>
function Premium() {
  return (
    <>

<Card
bottleImgs={Premium1}
modo={modo}
ingredientes={ingredientes}
/>

    </>
  );
}
export default Premium;