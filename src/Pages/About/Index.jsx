import React from 'react'
import Navbar from './components/Navbar/Index'
import MainSection from './components/mainSection/About'
import Team from './components/mainSection/Team'
import Footer from './components/Footer/Index'

const About = () => {
  return (
    <React.Fragment>
         <nav>
            <Navbar/>
         </nav>
         <main>
            <MainSection/>
            <Team/>
         </main>
         <footer>
          <Footer/>
         </footer>
    </React.Fragment>
  )
}

export default About
