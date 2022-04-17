import React from 'react'
import '../ContactForm/contactForm.scss'

const ContactForm = () => {
  return (
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
  )
}

export default ContactForm