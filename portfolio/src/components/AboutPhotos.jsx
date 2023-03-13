import React, { Component } from "react";
import Slider from "react-slick";
import headshot from "/src/assets/headshot.jpg";
import ryanAndI from "/src/assets/ryanandi.jpg";
import circuit from "/src/assets/sircat.png";
import wylieBylie from "/src/assets/WylieBylie.jpg";
import grogu from "/src/assets/Grogy.jpg";

export default class AboutPhotos extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="carousel">
        <h5 id="photo-header">Photos</h5>
        <Slider className="photo-slider" {...settings}>
          <div className="aside headshot">
            <img
              className="headshot"
              src={headshot}
              alt="A headshot of myself."
            />
            <p className="mecap caption">Me</p>
          </div>
          <div className="aside couple">
            <img
              className="couple"
              src={ryanAndI}
              alt="A photo of Ryan and I at Garden of the Gods."
            />
            <p className="coupcap caption">Ryan and I at Garden of the Gods</p>
          </div>
          <div className="aside circuit">
            <img
              className="circuit"
              src={circuit}
              alt="A photo of Circuit the cat sitting at the table."
            />
            <p className="catcap caption">Circuit "Sir Cat"</p>
          </div>
          <div className="aside wylie">
            <img
              className="wylie"
              src={wylieBylie}
              alt="A photo of Wylie the dog standing in the grass."
            />
            <p className="pupcap caption">Wylie the Pup</p>
          </div>
          <div className="aside grogu">
            <img
              className="grogu"
              src={grogu}
              alt="A photo of Grogu the bearded dragon basking on a rock."
            />
            <p className="repcap caption">Grogu the Beardie</p>
          </div>
        </Slider>
      </div>
    );
  }
}
