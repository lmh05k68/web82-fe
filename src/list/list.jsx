import React,{useState} from 'react';
import Slider from "react-slick";
import Data from '../data.js'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './list.css'
const List = ({setModalData}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Show 4 movies per page
    slidesToScroll: 4, // Scroll 4 movies at a time
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
  };
  return (
    <div className="movie-slider">
      <Slider {...settings}>
        {Data.map((movie) => (
          <div key={movie.ID} className="movie-card" onClick={() => setModalData(movie)}>
            <img src={movie.image} alt={movie.name} className="movie-poster" width="150px" height="250px" style={{borderRadius:"5px"}}/>
            <h3>{movie.name}</h3>
            <p>{movie.time} min {movie.year}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: "block", right: "1%",zIndex:"999"}}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: "block", left: "1%" ,zIndex:"999"}}
      onClick={onClick}
    />
  );
};

export default List
