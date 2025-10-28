import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto font-lora px-4 lg:px-0 my-6'>
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Work></Work>
    </div>
  )
}

export default Home
