import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
// import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Title props={{title: "our program", subtitle: "what we offer"}}/>
      <Programs/>
      <About/>
      <Title props={{title: "gallery", subtitle: "campus photos"}}/>
      <Campus/>
      <Title props={{title: "testimonials", subtitle: "what student says?"}}/>
      {/* <Testimonials/> */}
    </>
  )
}

export default App