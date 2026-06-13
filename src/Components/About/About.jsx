import React from 'react'
import './About.css'
import about_image from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className="about" id="about">
     <div className='about-left'>
        <img src={about_image} alt="about us" className='about-image'/>
        <img src={play_icon} alt="play" className='play-icon' onClick={() => setPlayState(true)}/>
     </div>
     <div className='about-right'>
        <h3>About University</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
         <p>
        Our university stands as a center of excellence where knowledge, innovation, 
        and ambition come together to shape the leaders of tomorrow. We are committed 
        to providing students with a supportive and inspiring environment that encourages 
        creativity, critical thinking, and lifelong learning.
    </p>

    <p>
        With experienced faculty members, advanced learning facilities, and a vibrant 
        campus community, students are empowered to explore their passions and achieve 
        their academic and professional goals. We believe every student has the potential 
        to create meaningful change in the world.
    </p>

   
     </div>
    </div>
  )
}

export default About