import React from 'react'
import './Campus.css';
import gallery1 from '../../assets/gallery-1.png';
import gallery2 from '../../assets/gallery-2.png';
import gallery3 from '../../assets/gallery-3.png';
import gallery4 from '../../assets/gallery-4.png';
import whiteArrow from '../../assets/white-arrow.png';

const Campus = () => {
  return (
    <div className='campus' id="campus">
      <div className="gallery">
        <img src={gallery1} alt="gallery 1" />
        <img src={gallery2} alt="gallery 2" />
        <img src={gallery3} alt="gallery 3" />
        <img src={gallery4} alt="gallery 4" />
      </div>
      <button className='btn dark-btn'>See Here More <img src={whiteArrow} alt="white arrow" /></button>
    </div>
  )
}

export default Campus