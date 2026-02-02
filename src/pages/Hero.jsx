import React from 'react'
import SplitText from '../components/SplitText'
import "../styles/Hero.css"
import profPic from '../assets/professional_picture.png'
const Hero = () => {

  return (

     <div className="wrapper">
     <section >
      <img src={profPic} alt="image" className="hero-image"/>
     </section>
    <section className="hero-container">


      <SplitText
  text="Hello, Devid here!"
  className="hero-title"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"

  showCallback
  />
   <SplitText
  text="2+ Years Of Crafting Innovative Web Projects"
  className="hero-subtitle"
  delay={90}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"

  showCallback
  />
</section>
  </div>


  )
}

export default Hero
