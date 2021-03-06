import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find((p) => p.id === Number(productId));
  let productData;

  if (product) {
    productData = (
      <div className="columns container pr-2 pl-2 is-5">
        <div className="column">
        <h3 className="is-size-4 pb-4"><strong>
        {product.name}
          </strong></h3>
</div>

<div className="column ">
<figure className="image  ">
        <img src={product.imageUrl}  alt="bottled products" />
        </figure>
        <p>{product.description}</p>
      </div>


      <div className="column">
      <div>
        <h4 className=" pb-3">
        <strong>MODO DE USO:
          </strong>
             {product.usage}
        </h4>
<p className=" pb-3">
  <strong> INGREDIENTES: </strong>
  {product.ingredients}
  </p>

   <p className=" has-text-info ">

   <strong>STATUS: </strong>
   <button class="button is-success">

   {product.status}
   </button>
   </p>

 </div>

      </div>
      </div>
    );
  } else {
    productData = <h2>Sorry. Product doesn't exist</h2>;
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "80%",
          margin: "auto",
          background: "#ffffff",
          paddingTop:"20px"
        }}
        className="container"
      >
        {productData}
      </div>
    </div>
  );
};

export default Product;
