import React from 'react'
import Slider1 from '../images/Slider1.png'
import Slider2 from '../images/Slider2.png'
import Slider3 from '../images/Slider3.png'

const Slider = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active text-center">
      <img src={Slider1} alt=".../" width="1600" height="400"/>
    </div>
    <div class="carousel-item text-center" >  
      <img src={Slider2} alt=".../" width="1600" height="400"/>
    </div>
    <div class="carousel-item text-center">
      <img src={Slider3} alt=".../" width="1600" height="400"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Slider
