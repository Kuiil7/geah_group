import React from "react";
import ImageGallery from 'react-image-gallery';
import CamuBottle from "../../images/geah_slideshow_combo_1.jpg"
import CitratoBottle from "../../images/geah_slideshow_combo_2.jpg"
import BiotinaBottle from "../../images/geah_slideshow_combo_3.jpg"
import ProductosTab from "./TabsProductos"

function GEAHPharm () {
  const images = [
    {
      original: CamuBottle,
      thumbnail: CamuBottle,
    },
    {
      original: BiotinaBottle,
      thumbnail: BiotinaBottle,
    },
    {
      original: CitratoBottle,
      thumbnail: CitratoBottle,
    },
  ];

 return (
<>
<section className="hero has-background-white-bis is-fullheight">
<ProductosTab />
  <div className="hero-body">
    <div className="">
    <p className="title">GEAH Pharm</p>
    <ImageGallery items={images} />
    </div>
  </div>
</section>
</>
);
}

export default GEAHPharm;