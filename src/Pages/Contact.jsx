import React from 'react'
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import '../Pages/contact.scss'

const Contact = () => {
  return (
    <>
      <Header />
      <Banner title={['Contacto']} subtitle='Si quieres saber más sobre mí o sobre mi trabajo, envíame un mensaje.'/>
      <div className='box__form__container'>
        <div className='box__form__form'>
            <form>
                <input type='text' name='nombre' id='nombre' placeholder='Nombre...'/>
                <input type='email' name='email' id-='email' placeholder='Email...'/>
                <input type='text' name='asunto' id='asunto' placeholder='Asunto...'/>
                <textarea name='mensaje' placeholder='Mensaje...'></textarea>
                <div className='box__form__form__buttons'>
                    <button type='submit' className='btn btn__yellow'>Enviar</button>
                    <button type='reset' className='btn btn__transparent'>Limpiar</button>
                </div>
            </form>
        </div>
    </div>
      <Footer />
    </>
  )
}

export default Contact