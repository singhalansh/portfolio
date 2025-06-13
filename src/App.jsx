import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import 'swiper/css';
import 'swiper/css/free-mode';
import Projects from './components/Projects';
import AchievementsSection from './components/AchievementsSection';

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhatIDo />
      <Projects />
      <AchievementsSection />
    </div>
  )
}

export default App