
const logoData = [

{
  id: 1,
  name: "Medicina Estética",
  imageUrl: ("../images/geah_logo2.jpeg"),
  alt: "GEAH logo with GEAH Medicina Estetica texto"
},

{
  id: 2,
  name: "Salud y Belleza",
  imageUrl: ("../images/geah_logos_sbv2.png"),
  alt: "GEAH logo with GEAH Salud y belleza texto"
},
{
  id: 3,
  name: "PHARM",
  imageUrl: ("../images/geah_logo_pharm_3.png"),
  alt: "GEAH logo with PHARM texto"
},
]

  function Logos () {
  return (


<div className=" columns is-flex-wrap-wrap is-centered ">
          {logoData.map((logoData, j) => (
<div className="column is-one-fifth" key={j}>
  <figure className="image  p-5 " >
<img  src={logoData.imageUrl} alt={logoData.alt} className=" is-rounded fade-in"/>
</figure>
</div>
          ))}
        </div>

    );

  };

export default Logos;