import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoPlayer from './components/VideoPlayer'

const App = () => {

  const [play, setPlay] = useState(false)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Title props={{title: "our program", subtitle: "what we offer"}}/>
      <Programs/>
      <About setPlay={setPlay}/>
      <Title props={{title: "gallery", subtitle: "campus photos"}}/>
      <Campus/>
      <Title props={{title: "testimonials", subtitle: "what student says?"}}/>
      <Testimonials/>
      <Title props={{title: "contact us", subtitle: "get in touch"}}/>
      <Contact/>
      <Footer/>
      <VideoPlayer play={play} setPlay={setPlay}/>
    </>
  )
}

export default App