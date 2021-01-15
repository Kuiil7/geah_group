import React, { Component } from "react";
 

import geah_slideshow_combo_1 from "../images/slideshow/geah_slideshow_combo_1.jpg"
import geah_slideshow_combo_2 from "../images/slideshow/geah_slideshow_combo_2.jpg"
import geah_slideshow_combo_3 from "../images/slideshow/geah_slideshow_combo_3.jpg"

import geah_pharm_logo1 from "../images/slideshow/geah_pharm_logo1.jpg"
import "../style/Carousel.css"

import InstagramEmbed from 'react-instagram-embed';


class Home extends Component {
  render() {
    return (

        <div>

      
      <div id=" carousel">
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={geah_pharm_logo1}  className="d-block w-100" alt="First slide" />
    </div>
 
    <div className="carousel-item">
      <img src={geah_slideshow_combo_1}  className="d-block w-100" alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img src={geah_slideshow_combo_2}  className="d-block w-100" alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img src={geah_slideshow_combo_3}  className="d-block w-100" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

      </div>
      <InstagramEmbed
  url='https://instagr.am/p/Zw9o4/'
  clientAccessToken='123|456'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
      </div>
    );
  }
}
 
export default Home;