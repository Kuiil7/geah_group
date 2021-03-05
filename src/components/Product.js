import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find((p) => p.id === Number(productId));
  let productData;

  if (product) {
    productData = (
      <div>
        <h3 className="is-size-1">{product.name}</h3>
        <img src={product.imageUrl}  alt="bottled products" classname="is-fluid"/>

        <p>{product.description}</p>

        <hr />
        <h4 className="is-size-3 pb-3"> <strong>Modo de Uso </strong> {product.usage}</h4>

        <p className="is-size-3 pb-3"><strong> Ingredientes </strong>{product.ingredients}</p>

        <h5 className="is-size-3 has-text-info"> <strong>Status</strong> {product.status}</h5>
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
