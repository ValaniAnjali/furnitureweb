import React from 'react'
import img1 from '../assets/kitchen1.jpg';
import img2 from '../assets/room.jpg';
import './Homedata.css'
const Homedata = () => {
  return (
        <>
        <div className="first-des">
            <div className="des-text">
                <h2>Some of best Furnitures</h2>
                <p>Nestled in Luzon, Mt. Taal is an icon of breathtaking beauty. This active volcano in Batangas, Philippines, showcases a stunning crater lake, creating a mesmerizing lake within a volcano within a lake phenomenon. Our travels tours offer a unique chance to witness this natural wonder, inviting you to trek to the summit for an unforgettable view. Explore the enchanting landscapes and experience the magic of Mt. Taal with us. </p>
            </div>
            <div className="image">
                <img alt="img1" src={img1}/>
                <img alt="img2" src={img2}/>
            </div>
    </div>
   
    </>
  )
}

export default Homedata;
