(this.webpackJsonpgeah_group=this.webpackJsonpgeah_group||[]).push([[0],{18:function(e,a,s){},55:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(1),i=s(25),l=s.n(i),n=s(6),r=s(7),o=s(9),d=s(8),j=s(2),m=s(3),h=(s.p,s.p,s.p,s.p+"static/media/geah_logo_pharm_4.d5f3d3cb.png"),b=(s(18),s.p+"static/media/geah_logo_pharm_3.476fe1c7.png"),p=s.p+"static/media/geah_logos_sb_2.ddff3c2a.png",u=s.p+"static/media/geah_logo_estetica_2.674d9d16.jpeg",g=function(e){Object(o.a)(s,e);var a=Object(d.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:"fade-in",children:[Object(t.jsx)("img",{src:h,className:"d-block w-100",alt:"First slide"}),Object(t.jsx)("div",{className:"container text-center text-white p-4 fade-in-3 ",children:Object(t.jsxs)("div",{className:"row ",children:[Object(t.jsx)("div",{className:"col-sm-4 p-3",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/pharm",children:Object(t.jsx)("img",{src:b,height:200,className:"p-1 rounded-circle shadow-lg rot1 ",alt:"GEAH Pharm logo"})})}),Object(t.jsx)("div",{className:"col-sm-4 p-3",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/salud",children:Object(t.jsx)("img",{src:p,height:200,className:"p-1 rounded-circle shadow-lg  rot1",alt:"GEAH Salud y Belleza logo"})})}),Object(t.jsx)("div",{className:"col-sm-4 p-3",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/estetica",children:Object(t.jsx)("img",{src:u,height:200,className:"p-1 shadow-lg rounded-circle  rot1  ",alt:"GEAH Medicina Esteticalogo"})})})]})})]})}}]),s}(c.Component),x=function(e){var a,s=e.data,c=Object(m.e)().productId,i=s.find((function(e){return e.id===Number(c)}));return a=i?Object(t.jsxs)("div",{children:[Object(t.jsx)("img",{src:i.imageUrl,className:"d-100 w-100",alt:"bottled products"}),Object(t.jsxs)("div",{className:"text-left row",children:[Object(t.jsx)("h3",{children:i.name}),Object(t.jsx)("p",{children:i.description}),Object(t.jsx)("p",{children:i.usage}),Object(t.jsx)("p",{children:i.ingredients}),Object(t.jsx)("h5",{children:i.status})]})]}):Object(t.jsx)("h2",{children:"Perdon. Ese producto no existe. "}),Object(t.jsx)("div",{className:"bg-white text-center",children:Object(t.jsx)("div",{style:{display:"flex"},children:Object(t.jsx)("div",{style:{width:"80%",height:"40%",margin:"auto",background:"#ffffff",padding:"10px"},children:a})})})},O=function(){var e=[{id:1,name:"Peau D'ange Col\xe1geno hidrolizado + Biotina",imageUrl:"../images/bottles/Biotina_pink.png",description:"Peau D'ange Col\xe1geno hidrolizado + Biotina",usage:"MODO DE USO: Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las ma\xf1anas o en las noches.",ingredients:"INGREDIENTES: Colageno Hidrolizado, vitamina C (acido ascorbico), biotina, camu camu, stevia y sabor limon",status:"Disponible"},{id:2,name:"Regeneratur Vitamin C",imageUrl:"../images/bottles/reg_vitamin2.png",usage:"MODO DE USO: Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las ma\xf1anas o en las noches.",ingredients:"Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",status:"Disponible"},{id:3,name:"CamuPlus C",imageUrl:"../images/bottles/camu_orange.png",usage:"MODO DE USO: Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las ma\xf1anas o en las noches.",ingredients:"Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",status:"Disponible"},{id:4,name:"Magnelife Cloruro de Magnesio",imageUrl:"../images/bottles/blue_bottle.png",usage:"MODO DE USO: Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las ma\xf1anas o en las noches.",ingredients:"Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",status:"Disponible"},{id:5,name:"Peau de'Ange: Premium",imageUrl:"../images/bottles/PAP_Premium_black.png",usage:"MODO DE USO: Mezclar una cuchara (10gr.) en agua, infuciones o jugos en las ma\xf1anas o en las noches.",ingredients:"Colageno Hidrolizado, Arandanos, Magnesio, Zinc, Maltodextrina, Vitamina C (acido ascorbico), Stevia.",status:"Disponible"}],a=Object(m.f)().url,s=e.map((function(e){return Object(t.jsx)("li",{children:Object(t.jsx)(j.b,{to:"".concat(a,"/").concat(e.id),children:e.name})},e.id)}));return Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("div",{style:{display:"block",justifyContent:"space-between"},children:Object(t.jsxs)("div",{style:{float:"left",padding:"20px",width:"40%",background:"#f0f0f0",marginLeft:"auto"},children:[Object(t.jsx)("h4",{children:Object(t.jsx)("img",{src:b,height:150,className:"p-1 rounded-circle shadow-lg img-fluid  ",ALIGN:"left",alt:"GEAH Pharm logo"})}),Object(t.jsx)("h6",{children:"Productos"}),Object(t.jsx)("ul",{style:{listStyleType:"none",padding:0,fontSize:"15px"},children:s})]})}),Object(t.jsx)(m.a,{path:"".concat(a,"/:productId"),children:Object(t.jsx)(x,{data:e})}),Object(t.jsx)(m.a,{exact:!0,path:a,children:Object(t.jsx)("div",{style:{height:"700px",backgroundColor:"white"},children:Object(t.jsx)("p",{style:{textAlign:"center"},children:"Por favor seleccione un producto a tu izquierda."})})})]})},f=s.p+"static/media/geri_card_8.65223f1d.jpeg",v=s.p+"static/media/geah_logo_gg.0fa2caee.png",N=function(e){Object(o.a)(s,e);var a=Object(d.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:" bg-white container p-4 ",children:[Object(t.jsxs)("div",{className:"row ",children:[Object(t.jsxs)("div",{className:"col-sm",children:[Object(t.jsx)("div",{className:" p-1",children:Object(t.jsx)("img",{src:f,ALIGN:"left",width:400,className:"rounded-circle img-thumbnail img-fluid shadow-lg p-1 m-3 fade-in",alt:"self-portrait"})}),Object(t.jsxs)("div",{className:"fade-in",children:[Object(t.jsxs)("h3",{children:["Geraldine  ",Object(t.jsx)("strong",{children:"Hui\xf1ac Figueroa "})]}),Object(t.jsx)("h5",{children:"Fundadora"}),Object(t.jsx)("div",{}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas fa-envelope-open-text fa-lg"}),Object(t.jsx)("a",{href:"mailto:geahgrupo@gmail.ocm",className:"pb-1",children:" GEAHGroup@gmail.com"})]}),Object(t.jsx)("div",{className:" fade-in",children:Object(t.jsxs)("p",{children:[Object(t.jsx)("img",{src:v,height:190,className:"rounded-circle text-center rot1 ",ALIGN:"right",alt:"geah group logo"}),Object(t.jsx)("strong",{children:"GEAH PHARM "}),",  un subdisario de GEAH GROUP, fue fundado en 2019 por ",Object(t.jsx)("strong",{children:" Geraldine Hui\xf1ac Figueroa"}),", creando as\xed una experiencia completamente nueva para los consumidores m\xe1s exigentes al introducirse en el rubro de ",Object(t.jsx)("strong",{children:"salud y belleza "}),". GEAH PHARM cuenta con suplementos nutricionales elaborados con los insumos m\xe1s ",Object(t.jsx)("strong",{children:"sublimes, nutritivos y naturales "})," del Peru. GEAH PHARM comercializa sus productos a nivel nacional.",Object(t.jsx)("div",{className:"text-center"}),"Llevamos calidad de vida al hogar de cada peruano, avalados por instituciones nacionales referentes a salud. Caracterizados por tener un compromiso constante en desarrollar nuevos productos que satisfagan las necesidades que hay en el mercado. Estamos comprometidos con ",Object(t.jsx)("strong",{children:" el cuidado de la salud y la belleza de todos los peruanos. "})]})}),Object(t.jsx)("div",{className:"container ",children:Object(t.jsxs)("div",{className:"row text-center fade-in-3",children:[Object(t.jsx)("div",{className:"col-sm-4 p-3",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/pharm",children:Object(t.jsx)("img",{src:b,height:150,className:"p-1 rounded-circle shadow-lg rot1",alt:"GEAH Pharm logo"})})}),Object(t.jsx)("div",{className:"col-sm-4 p-3",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/salud",children:Object(t.jsx)("img",{src:p,height:150,className:"p-1 rounded-circle shadow-lg rot1",alt:"GEAH Salon y Belleza logo"})})}),Object(t.jsx)("div",{className:"col-sm-4 p-3",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/estetica",children:Object(t.jsx)("img",{src:u,height:150,className:"p-1 shadow-lg rounded-circle rot1  ",alt:"GEAH Medicina Esteticalogo"})})})]})})]})]}),Object(t.jsx)("div",{})]}),Object(t.jsx)("div",{})]})}}]),s}(c.Component),w=[{logo:"../images/bottles/Biotina_pink.png",alt:"GEAH Salon y Belleza"},{logo:"../images/bottles/blue_bottle.png",alt:"GEAH PHARM"},{logo:"../images/bottles/camu_orange.png",alt:"Medicina Esthetica GEAH"},{logo:"../images/bottles/PAP_Premium_black.png",alt:"Medicina Esthetica GEAH"},{logo:"../images/bottles/red_bottle_1.png",alt:"Medicina Esthetica GEAH"},{logo:"../images/bottles/reg_vitamin2.png",alt:"Medicina Esthetica GEAH"}];var y=function(){return Object(t.jsx)("div",{className:"p-1 fade-in-3 container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col",children:w.map((function(e){return Object(t.jsx)("img",{src:e.logo,height:200,alt:e.alt,className:"p-1 d-100 "})}))})})})},E=(s.p,s.p+"static/media/child_car_1.af75de6e.jpeg"),_=s.p+"static/media/geah_slideshow_cover_family1.fda30ea1.jpeg",A=s.p+"static/media/geah_slideshow_cover_injection.2533a308.jpeg",G=s.p+"static/media/geah_slideshow_vitC_couple.51b55cda.jpg";var P=function(){return Object(t.jsxs)("div",{id:"carouselExampleIndicators",class:"carousel slide","data-ride":"carousel",children:[Object(t.jsxs)("ol",{className:"carousel-indicators",children:[Object(t.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),Object(t.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),Object(t.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})]}),Object(t.jsxs)("div",{className:"carousel-inner",children:[Object(t.jsx)("div",{className:"carousel-item active",children:Object(t.jsx)("img",{src:A,className:"d-block w-100",alt:"Vitamin C iv"})}),Object(t.jsx)("div",{className:"carousel-item",children:Object(t.jsx)("img",{src:G,className:"d-block w-100",alt:"..."})}),Object(t.jsx)("div",{className:"carousel-item",children:Object(t.jsx)("img",{src:E,className:"d-block w-100",alt:"..."})}),Object(t.jsx)("div",{className:"carousel-item",children:Object(t.jsx)("img",{src:_,className:"d-block w-100",alt:"..."})})]}),Object(t.jsxs)("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev",children:[Object(t.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(t.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(t.jsxs)("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next",children:[Object(t.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(t.jsx)("span",{className:"sr-only",children:"Next"})]})]})},M=s(27),H=s.n(M),C=function(e){Object(o.a)(s,e);var a=Object(d.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(t.jsx)("div",{children:Object(t.jsx)(H.a,{className:"react-player container",url:"videos/geah_video_vitC.mp4",width:"100%",height:"100%",playing:!0,controls:!0})})}}]),s}(c.Component),k=function(e){Object(o.a)(s,e);var a=Object(d.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:" bg-white  p-1  text-left ",children:[Object(t.jsx)("div",{}),Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)(P,{}),Object(t.jsx)(j.c,{to:"/products",children:Object(t.jsx)("img",{src:b,height:250,className:"p-2 rounded-circle shadow-lg m-2 rot1 ",ALIGN:"left",alt:"GEAH Pharm logo"})}),Object(t.jsx)("h3",{className:"pt-2",children:"GEAH PHARM"}),Object(t.jsxs)("p",{children:["Llevamos 2 a\xf1os comprometidos con la salud de los Peruanos. Brindamos tratamientos de calidad, seguros y eficaces al mejor precio. Enfocados en una innovaci\xf3n constante para desarrollar nuevos productos.",Object(t.jsxs)("p",{children:[Object(t.jsx)("strong",{children:" HORARIOS"})," Lunes a S\xe1bado de 8AM - 9PM"]}),Object(t.jsx)(j.c,{style:{color:"white"},to:"/products",children:Object(t.jsx)("div",{className:"text-center",children:Object(t.jsx)("button",{type:"button",className:"btn btn-primary pl-3 pr-3 rounded-pill ",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/products",children:"Nuestro Productos"})})})}),Object(t.jsx)("div",{className:"text-center p-4",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/products",children:Object(t.jsx)(y,{})})})]}),Object(t.jsx)(C,{}),Object(t.jsx)(j.c,{style:{color:"white"},to:"/products",children:Object(t.jsx)("div",{className:"text-center",children:Object(t.jsx)("button",{type:"button",className:"btn btn-primary pl-3 pr-3 rounded-pill ",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/products",children:"Nuestro Productos"})})})}),Object(t.jsxs)("p",{className:"text-center pt-4",children:[Object(t.jsxs)("a",{href:"https://www.instagram.com/geahpharm/",children:["  ",Object(t.jsx)("i",{className:"fab fa-instagram fa-lg fa-3x"}),"  "]}),Object(t.jsxs)("a",{href:"https://www.facebook.com/pg/GeahPharm/",className:"p-2 ",children:[" ",Object(t.jsx)("i",{class:"fab fa-facebook-f fa-lg fa-3x"})," "]})]}),Object(t.jsx)("div",{})]})]})}}]),s}(c.Component),z=s.p+"static/media/geah_salud_cover.b5bc575f.png",S=function(e){Object(o.a)(s,e);var a=Object(d.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:"text-center container",children:[Object(t.jsx)("img",{src:z,className:"d-100 w-100 ",alt:"GEAH Pharm logo"}),Object(t.jsxs)("div",{className:" bg-white  p-5 text-center container",children:[Object(t.jsx)("h1",{children:"Vienes Pronto"}),Object(t.jsx)("div",{children:Object(t.jsx)("img",{src:p,height:200,className:"p-1 rounded-circle shadow-lg   rot1",alt:"GEAH Pharm logo"})}),Object(t.jsx)("div",{children:Object(t.jsx)("p",{className:"text-left",children:"\xa1Un espacio de artistas! Servicio de calidad con personal altamente calificado. Ponemos a tu disposici\xf3n las mejores l\xedneas del mercado de belleza. Manos m\xe1gicas que resaltar\xe1n tu belleza natural, la mejor versi\xf3n de ti."})}),Object(t.jsx)("p",{className:"text-center pt-4",children:Object(t.jsxs)("a",{href:"https://www.facebook.com/GeahGroup/",className:"p-2 ",children:[" ",Object(t.jsx)("i",{class:"fab fa-facebook-f fa-lg fa-3x"})," "]})})]})]})}}]),s}(c.Component),D=s.p+"static/media/geah_estetica_cover.823211d0.png",I=function(e){Object(o.a)(s,e);var a=Object(d.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:"text-center container",children:[Object(t.jsx)("img",{src:D,className:"d-100 w-100 ",alt:"GEAH Pharm logo"}),Object(t.jsxs)("div",{className:" bg-white p-5 text-center container",children:[Object(t.jsx)("img",{src:u,height:200,className:"p-1 rounded-circle shadow-lg rot1",alt:"GEAH Pharm logo"}),Object(t.jsx)("h3",{children:" Medicina  Est\xe9tica"}),Object(t.jsx)("p",{className:"text-left",children:"Ponemos a tu disposici\xf3n productos para el cuidado de tu salud e imagen. Brindamos cursos en salud, est\xe9ticos y servicios de cuidado personal. Garantizamos el mejor cuidado de tu imagen y salud."}),Object(t.jsxs)("ul",{className:"list-group  list-group-flush text-left ",children:[Object(t.jsx)("li",{className:"list-group-item list-group-item-secondary",children:"  - Limpiezas faciales"}),Object(t.jsx)("li",{className:"list-group-item ",children:"- Megadosis de vitamina C endovenosa"}),Object(t.jsx)("li",{className:"list-group-item list-group-item-secondary",children:"- Mesoterapia- reducci\xf3n de papada y cachetes"}),Object(t.jsx)("li",{className:"list-group-item",children:"- Reductores y reafirmantes"}),Object(t.jsx)("li",{className:"list-group-item list-group-item-secondary",children:"- Carboxiterapia y drenaje linf\xe1tico"}),Object(t.jsx)("li",{className:"list-group-item",children:"- Levantamiento de gl\xfateos mas reafirmantes con peptonas y vitamina C"}),Object(t.jsx)("li",{className:"list-group-item list-group-item-secondary",children:"- Peptonas en piernas,pantorrillas, brazos y pectorales."}),Object(t.jsx)("li",{className:"list-group-item",children:"- Taller de inyectoterapia ( Sin conocimientos previos)"}),Object(t.jsx)("li",{className:"list-group-item list-group-item-secondary",children:"- Taller de inyectables b\xe1sico aplicados a la est\xe9ti"})]}),Object(t.jsxs)("p",{className:"text-center pt-5",children:[Object(t.jsxs)("a",{href:"https://www.instagram.com/medicinaestetica_geah/",children:["  ",Object(t.jsx)("i",{className:"fab fa-instagram fa-lg fa-3x"}),"  "]}),Object(t.jsxs)("a",{href:"https://www.facebook.com/MedicinaEsteticaGEAH/",className:"p-2 ",children:[" ",Object(t.jsx)("i",{class:"fab fa-facebook-f fa-lg fa-3x"})," "]})]}),Object(t.jsx)("div",{})]})]})}}]),s}(c.Component),U=s.p+"static/media/geah_logo_gg_white.8fbd6807.png",B=function(e){Object(o.a)(s,e);var a=Object(d.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("div",{style:{backgroundColor:"#464658"},children:[Object(t.jsxs)(j.a,{basename:"",children:[Object(t.jsxs)("nav",{className:"navbar container navbar-expand-sm navbar-dark ",children:[Object(t.jsxs)("a",{className:"navbar-brand ",href:"/",children:[Object(t.jsx)(j.c,{style:{color:"white"},to:"/"}),Object(t.jsx)("img",{src:U,ALIGN:"left",height:60,style:{color:"white"},alt:"GEAH logo"})]}),Object(t.jsx)("button",{className:"navbar-toggler btn-outline-0",style:{border:"0",outline:"none"},type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(t.jsx)("span",{className:"navbar-toggler-icon "})}),Object(t.jsx)("div",{className:"collapse navbar-collapse ",id:"navbarSupportedContent",children:Object(t.jsxs)("ul",{className:"navbar-nav ml-auto ",children:[Object(t.jsx)("li",{className:"nav-item  ",children:Object(t.jsx)("span",{className:"p-2",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/pharm",children:"PHARM"})})}),Object(t.jsx)("li",{className:"nav-item  ",children:Object(t.jsx)("span",{className:"p-2",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/salud",children:"Salud y Belleza"})})}),Object(t.jsx)("li",{className:"nav-item  ",children:Object(t.jsx)("span",{className:"p-2",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/estetica",children:"Medicina Est\xe9tica"})})}),Object(t.jsxs)("li",{className:"nav-item",children:[Object(t.jsx)("span",{className:"p-2",children:Object(t.jsx)(j.c,{style:{color:"white"},to:"/nosotros",children:"\xbfQui\xe9nes Somos?"})}),Object(t.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"})]})]})})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)(m.a,{exact:!0,path:"/",component:g}),Object(t.jsx)(m.a,{path:"/pharm",component:k}),Object(t.jsx)(m.a,{path:"/salud",component:S}),Object(t.jsx)(m.a,{path:"/estetica",component:I}),Object(t.jsx)(m.a,{path:"/products",component:O}),Object(t.jsx)(m.a,{path:"/nosotros",component:N})]}),"\xa0",Object(t.jsx)("div",{children:Object(t.jsx)("a",{href:"https://api.whatsapp.com/send?phone=+51997672947",className:"float ",children:Object(t.jsx)("i",{className:"fab fa-whatsapp my-float fa-lg",children:" "})})})]}),Object(t.jsx)("footer",{children:Object(t.jsx)("div",{class:"container text-white text-center",children:Object(t.jsx)("div",{class:"row",children:Object(t.jsxs)("div",{class:"col-sm",children:[Object(t.jsx)("h6",{children:"CONTACTO"}),Object(t.jsx)("a",{href:"https://api.whatsapp.com/send?phone=+51997672947",className:" text-white",children:Object(t.jsx)("i",{className:"fab fa-whatsapp fa-lg",children:" 997 672 947  |"})}),Object(t.jsx)("a",{href:"https://api.whatsapp.com/send?phone=+51997672947",className:"p-2 text-white",children:Object(t.jsx)("i",{className:"fab  fa-lg",children:"   973 364 627  "})}),Object(t.jsx)("p",{children:Object(t.jsx)("a",{href:"https://api.whatsapp.com/send?phone=+51997672947",className:"float ",children:Object(t.jsx)("i",{className:"fab fa-whatsapp my-float fa-lg",children:" "})})}),Object(t.jsxs)("p",{children:[Object(t.jsx)("i",{className:"fas fa-envelope-open-text fa-lg"}),Object(t.jsx)("a",{href:"mailto:geahgrupo@gmail.ocm",className:" text-white",children:" GEAHGroup@gmail.com"})]}),Object(t.jsx)("h5",{children:"DIRECCI\xd3N"}),Object(t.jsx)("p",{children:Object(t.jsx)("iframe",{title:"Google Maps",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3900.2937853801!2d-76.9700528!3d-12.1603909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b859d0ec00d7%3A0x55ef6c5039ef07a3!2sAv.%20Guillermo%20Billinghurst%20787%2C%20San%20Juan%20de%20Miraflores%2015801%2C%20Peru!5e0!3m2!1sen!2sus!4v1609308430550!5m2!1sen!2sus",width:"90%",height:"120px",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"})}),Object(t.jsx)("p",{children:"Av Guillermo Billinghurst 787, Lima, Peru"})]})})})})]})}}]),s}(c.Component);l.a.render(Object(t.jsx)(B,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.ee5a44a3.chunk.js.map