
import React from 'react';
import './MoreImg.css'; 
import i1 from '../assets/sofa.jpg';
import i2 from '../assets/chair3.jpg';
import i3 from '../assets/tvstand1.jpg';
import i4 from '../assets/kitchen1.jpg';

const MoreImg = () => {
  return (
    <div className="image-row">
      <img alt="img1" src={i1} />
      <img alt="img2" src={i2} />
      <img alt="img3" src={i3} />
      <img alt="img4" src={i4} />
    </div>
  );
};

export default MoreImg;
