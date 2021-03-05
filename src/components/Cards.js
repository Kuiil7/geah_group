
const cardData = [

{
  id: 1,
  name: "Peaud D'ange Colágeno Hidrolizado + Biotina",
  imageUrl: ("../images/bottles/biotina_pink.png"),
  description: "Colageno Hidrolizado",
  usage: "MODO DE USO: Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.",
  ingredients: "INGREDIENTES: Colageno Hidrolizado, vitamina C (acido ascorbico), biotina, camu camu, stevia y sabor limon",
  status: "Disponible"
},

{
  id: 3,
  name: "CamuPlus Vitamina C",
  imageUrl: ("../images/bottles/camu_orange.png"),
  usage: "MODO DE USO: Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.",

  description: "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
  status: "Disponible"
},
{
  id: 4,
  name: "Magne-life Closuro de Magnesio",
  imageUrl: ("../images/bottles/blue_bottle.png"),
  usage: "MODO DE USO: Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.",
  description: "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
  status: "Disponible"
},
{
id: 5,
name: "Peau de'Ange: Premium Fruta Rojas",
imageUrl: ("../images/bottles/frutos_rojos.png"),
usage: "MODO DE USO: Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.",
ingredientes: "Colageno Hidrolizado, Arandanos, Magnesio, Zinc, Maltodextrina, Vitamina C (acido ascorbico), Stevia.",
description: "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
status: "Disponible"
},

]



  function Cards () {
  return (

<div className="container">
<div className=" columns is-flex-wrap-wrap is-centered ">
          {cardData.map((cardData, k) => (
<div className="column is-one-fifth

" key={k}>

<div class="card p-2 ">
  <div class="card-image  ">
  <figure className="image   " >
<img  src={cardData.imageUrl} alt={cardData.alt}    />
</figure>
  </div>

</div>

</div>
          ))}
        </div>
        </div>
    );

  };

export default Cards;