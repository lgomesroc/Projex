import React from 'react';
import projexImage from '../assets/images/projex.jpg'; // Caminho relativo à pasta assets

const Banner = () => {
  return (
    <div className="banner">
      <img src={projexImage} alt="Projex Banner" />
    </div>
  );
};

export default Banner;
