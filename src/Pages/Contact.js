import React from 'react'
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import ContactForm from '../Components/ContactForm/ContactForm';
import Footer from '../Components/Footer/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <Banner title='Contacto' subtitle='Si quieres saber más sobre mí o sobre mi trabajo, envíame un mensaje.'/>
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact