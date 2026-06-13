import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (  
    <div className='hero container' id="hero">
      <div className="hero-text">
        <h1>We ensure Better Education For Better World</h1>
        <p>Our Cutting Edge Curriculam is Designed To Empower Studentsn with knowledge and skills for a brighter future.</p>
        <button className='btn'>Explore more  <img src={darkarrow} alt="Dark Arrow" /></button>
      </div>

    </div>
  )
}

export default Hero 