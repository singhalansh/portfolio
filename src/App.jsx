import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import 'swiper/css';
import 'swiper/css/free-mode';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhatIDo />
      <Projects />
    </div>
  )
}

export default App