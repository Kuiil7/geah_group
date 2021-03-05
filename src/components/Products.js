import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Product from "../components/Product";

const Products = () => {
  const productData = [
    {
      id: 1,
      name: "PeaudD'ange Colágeno Hidrolizado + Biotina",
      imageUrl: (process.env.PUBLIC_URL + "../images/bottles/Biotina_pink.png"),
      usage: "MODO DE USO: Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.",
      ingredients: "Colageno Hidrolizado, vitamina C (acido ascorbico), biotina, camu camu, stevia y sabor limon",
      status: "Disponible"
    },
    {
      id: 2,
      name: "Regeneratur Vitamina C",
      imageUrl: (process.env.PUBLIC_URL + "../images/bottles/reg_vitamin2.png"),
      usage: "Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.",
      status: "Disponible"
    },
    {
      id: 3,
      name: "CamuPlus Vitamina C",
      imageUrl: (process.env.PUBLIC_URL + "../images/bottles/camu_orange.png"),
      usage: "Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.",
      status: "Disponible"
    },
    {
      id: 4,
      name: "Magne-life Closuro de Magnesio",
      imageUrl: (process.env.PUBLIC_URL + "../images/bottles/blue_bottle.png"),
      usage: "Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.",
      status: "Disponible"
    },
  {
    id: 5,
    name: "Peau de'Ange: Premium Fruta Rojas",
    imageUrl: (process.env.PUBLIC_URL + "../images/bottles/frutos_rojos.png"),
    usage: "Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.",
    status: "Disponible"
  },


    {
      id: 6,
      name: "Peau deAnge: Premium",
      imageUrl: (process.env.PUBLIC_URL + "../images/bottles/PAP_Premium_black.png"),
      usage: "Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las mañanas o en las noches.",
      status: "Available"
    }

  ];

  const { url } = useRouteMatch();

  /* Create an array of `<li>` items for each product
  const linkList = productData.map((product) => {
    return (
      <li key={product.id}>
        <Link to={`${url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });
*/
  return (
    <div>

      <div >
        <div  className="container mt-6"  >
        <section class="hero is-small is-link ">

<div class="hero-body ">
  <p class="title ">
  GEAH PHARM
  </p>
  <p class="subtitle">
   "Los mejores cuidando tu salud"
  </p>
</div>
</section>



        </div>

      </div>

      <Route path={`${url}/:productId`}>
        <Product data={productData} />
      </Route>
      <Route exact path={url}>
        <p style={{ textAlign: "center" }}>Please select a product.</p>
      </Route>
    </div>
  );
};

export default Products;
