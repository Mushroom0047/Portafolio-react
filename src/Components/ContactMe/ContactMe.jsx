import React from 'react';
import { Button } from 'react-bootstrap';
import '../ContactMe/contactMe.scss';

const ContactMe = () => {
  return (
    <div className='box__contactme__container'>
        <div className='box__contactme__title'>
            <h2>Contáctame</h2>
            <p>Si quieres saber más sobre mí o sobre mi trabajo, 
                envíame un mensaje.</p>
        </div>
        <div className='box__contactme__button'>
            <Button variant='outline-light' href='/Contact'>CONTACTO</Button>
        </div>
    </div>
  )
}

export default ContactMe

