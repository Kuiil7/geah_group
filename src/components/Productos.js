import React, { Component } from "react";

import Biotina_pink from "../images/bottles/Biotina_pink.png"

import PAP_Premium_black from "../images/bottles/PAP_Premium_black.png"

import red_bottle_1 from "../images/bottles/red_bottle_1.png"


import blue_bottle from "../images/bottles/blue_bottle.png"

import camu_orange from "../images/bottles/camu_orange.png"

import reg_vitamin2 from "../images/bottles/reg_vitamin2.png"

import pap_inst from "../images/bottles/pap_inst.png"

import pap_prem_inst from "../images/bottles/pap_prem_inst.png"

import pap_2_inst from "../images/bottles/pap_2_inst.png"

import "../style/Productos.css"

class Product extends Component {
  render() {
    return (
 

    
      <div id="productos" className="container" >
    
<div >
  <center>
  <h1 className="text-danger "> 
        PRODUCTOS
    </h1>
  </center>
   
  
   
  <div className="row  " >
    <div className="col-sm-4 padding_20">

      <img src={Biotina_pink} className="center-block" height={150}  alt="Second slide" />
    
    
    <div className="padding_10">
    <button type="button" class="btn btn-danger btn-sm btn-block " data-toggle="modal" data-target="#Biotina-Modal">
    Peau D'ange Colágeno hidrolizado + Biotina
    </button>  
    <div className="modal fade" id="Biotina-Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-black" id="exampleModalLabel" >Peau D'ange Colágeno hidrolizado + Biotina</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
       
         <p>
         <img src={pap_2_inst} className="d-block w-100" alt="bottle inst" /> 
         </p>
          </div>
          <div className="modal-footer">
          <img src={Biotina_pink} className="d-block w-100" alt="First slide" /> 

            <button type="button" className="btn btn-secondary " data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-danger btn-sm">Compra</button>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>
    <div className="col-sm-4 padding_20">
    <img  src={red_bottle_1} height={150} className="center-block"  alt="Second slide" />
    <div className="padding_10">
    <button type="button" class="btn btn-danger btn-sm btn-block" data-toggle="modal" data-target="#PA-Modal">
      Peau d'Ange
    </button>
    
    <div class="modal fade" id="PA-Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel2">PAP-Modal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <img  src={pap_inst} className="d-block w-100" alt="pap inst" /> 
          </div>
          <div class="modal-footer">
          <img  src={red_bottle_1} className="d-block w-100" alt="First slide" /> 

            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger">Compra</button>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>
    <div className="col-sm-4 padding_20">
    <img  src={PAP_Premium_black}  height={150} className="center-block" alt="Second slide" />
    <div className="padding_10">
    <button type="button" class="btn btn-danger btn-sm btn-block " data-toggle="modal" data-target="#Citrato_z_cropped">
      Peau d'Ange Premium
    </button>
    
    <div class="modal fade" id="Citrato_z_cropped" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">    Peau d'Ange Premium</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <img  src={pap_prem_inst} className="d-block w-100"   alt="pap premium inst" /> 
          </div>
          <div class="modal-footer">
         
          <img  src={PAP_Premium_black} className="d-block w-100"   alt="First slide" /> 

            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger">Compra</button>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>
  </div>
  <div class="w-100"></div>
  <div className="row">
    <div className="col-sm-4 padding_20">
    <img  src={blue_bottle} height={150}  className="center-block"  alt="Second slide" />
    <div className="padding_10">
    <button type="button" class="btn btn-danger btn-sm btn-block" data-toggle="modal" data-target="#Citrato_Z2_cropped">
     Magnelife Cloruro de magnesio
    </button>
    
    <div class="modal fade" id="Citrato_Z2_cropped" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"> ZINC</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <img  src={blue_bottle}   alt="magnesio botella" />

          <p>
            Magnelife Cloruro de magnesio
          </p>
          </div>
          <div class="modal-footer">

            <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger">Compra</button>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>
    <div className="col-sm-4 padding_20">
    <img  src={camu_orange} height={150} className="center-block"  alt="Second slide" />
    <div className="padding_10">
    <button type="button" class="btn btn-danger btn-sm btn-block" data-toggle="modal" data-target="#exampleModal">
   CamuPlus C
    </button>
    
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Zinc</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <img  src={camu_orange} height={500} alt="Second slide" />

          </div>
          <div class="modal-footer">

            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger">Compra</button>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>
    <div className="col-sm-4 padding_20">
    <img src={reg_vitamin2} height={150} className="center-block" alt="Second slide" />
    <div className="padding_10">
    <button type="button" class="btn btn-danger btn-sm btn-block" data-toggle="modal" data-target="#PAP_RED_cropped">
 Regeneratur Vitamin C
    </button>
    
    <div class="modal fade" id="PAP_RED_cropped" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"> Magnesio</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <img src={reg_vitamin2} height={500}  alt="Second slide" />
          </div>
          <div class="modal-footer">

            <button type="button" class="btn btn-secondary  " data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger">Compra</button>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>
  </div>
</div>


</div>

    );
  }
}
 
export default Product