import React, { useRef } from 'react'
import './Testimonial.css';
import nextIcon from '../../assets/next-icon.png';
import backIcon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

const Testimonial = () => {

  let tx=0;


  const slider=useRef();

  const forwardSlide = () => {

    if(tx> -50){
      tx=tx-25;
      slider.current.style.transform=`translateX(${tx}%)`;
    }


  }

  const backSlide = () => {
    if(tx<0){
      tx=tx+25;
      slider.current.style.transform=`translateX(${tx}%)`;
    }

  }
  return (
    <div className='testimonial' id="testimonials">
        <img src={nextIcon} alt="" className="next-btn" onClick={forwardSlide}/>
        <img src={backIcon} alt="" className="back-btn" onClick={backSlide}/>
<div className="slider">
  <ul ref={slider}>
    <li>
      <div className="slide">
        <div className="user-info">
  <img src={user1} alt="" />
  <div>
    <h3> Shaheed afreed</h3>
    <span>BIT,Manglore</span>
  </div>
        </div>
        <p>Choosing to pursue a Bachelor's degree in Computer Science here was one of the best decisions I made.
The supportive faculty, practical learning approach, and strong technical foundation helped me grow both academically and professionally.
The opportunities to work on real-world projects enhanced my problem-solving and development skills.
This experience has prepared me with the confidence and knowledge needed to succeed in the technology industry.</p>

      </div>
    </li>

    <li>
      <div className="slide">
        <div className="user-info">
  <img src={user2} alt="" />
  <div>
    <h3>Williamson</h3>
    <span>BIT,Manglore</span>
  </div>
        </div>
        <p>Pursuing a degree in Computer Science provided me with an excellent learning environment and countless opportunities for growth.
The curriculum combined theoretical knowledge with hands-on experience, helping me build strong technical skills.
The guidance from faculty and participation in various projects boosted my confidence and industry readiness.
The knowledge, experiences, and friendships gained during this journey will continue to benefit me throughout my career.</p>

      </div>
    </li>
    <li>
      <div className="slide">
        <div className="user-info">
  <img src={user3} alt="" />
  <div>
    <h3>Rajat Patidar</h3>
    <span>BIT,Manglore</span>
  </div>
        </div>
        <p>My journey in Computer Science has been both inspiring and rewarding.
The blend of academic learning, practical exposure, and project-based activities helped me develop a strong technical foundation.
The supportive environment encouraged me to explore new technologies and continuously improve my skills.
This experience has played a significant role in shaping my professional growth and future aspirations.</p>

      </div>
    </li>
    <li>
      <div className="slide">
        <div className="user-info">
  <img src={user4} alt="" />
  <div>
    <h3> Klassen</h3>
    <span>BIT,Manglore</span>
  </div>
        </div>
        <p>Studying Computer Science provided me with valuable knowledge, hands-on experience, and opportunities to challenge myself.
The learning environment fostered creativity, innovation, and critical thinking.
Through various projects and collaborative activities, I gained confidence in applying technology to solve real-world problems.
I am grateful for the experiences and lessons that have prepared me for a successful career in the tech industry.</p>

      </div>
    </li>
    
  </ul>
          
        </div>
    </div>
  )
}

export default Testimonial