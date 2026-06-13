import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero /> 
      <div className="container">
        <Title subtitle="Our programs" title="What We offer"/>
        <Programs />
        <About setPlayState={setPlayState}/>
         <Title subtitle="Gallery" title="Campus Photos"/>
         <Campus />
          <Title subtitle="Testimonials" title="What Our Students Say"/>
          <Testimonial />
           <Title subtitle="Contact Us" title="Get In Touch"/>
           <Contact />
           <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App