import React from 'react';
import '../assets/styles/components/Carrousel.css';

const Carousel = ({ children }) => (
   
     <div className="carousel">
         <div className="carousel__container">{children}</div>
     </div>
  
);

export default Carousel;