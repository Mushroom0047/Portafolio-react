import React from 'react'
import Banner from '../Components/Banner/Banner';
import AboutMe from '../Components/AboutMe/AboutMe';
import ContactMe from '../Components/ContactMe/ContactMe';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';



const Home = () => {
  return (
    <>
      <Header />
      <Banner staticTitle='Mi Nombre Es' title={['Héctor', 'MushrooM']} subtitle='Frontend Developer'/>
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  )
}


export default Home