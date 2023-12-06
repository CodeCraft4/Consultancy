import React from 'react'
import Navbar from './Hero/Navbar/Index'
import Header from './Hero/Header/Index'
import InfoJob from './Main/Information/Index'
import AboutUs from './Main/AboutUs/Index'
import Carousel from './Main/Carousel/Index'
import ClientsLogo from './Main/Clients/Index'
import Footer from './Footer/Index'
import Services from './Main/Services/Index'


const Home = () => {
  return (
    <div>
        <header>
        <Navbar/>
        <Header/>
        </header>
        <main>
          <InfoJob/>
          <section>
          <Services/>
          <AboutUs/>
          </section>
          <ClientsLogo/>
          <Carousel/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default Home
