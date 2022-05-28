import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../ContactMe/contactMe.scss';

const ContactMe = () => {
  return (<>
  <Container className='box__contactme__container'>
    <Row>
      <Col sm='text-center'>
        <h2>Contáctame</h2>
        <p>Si quieres saber más sobre mí o sobre mi trabajo, envíame un mensaje.</p>
      </Col>
    </Row>
    <Row>
      <Col className='text-center'>
        <Button variant='outline-light'>CONTACTO</Button>
      </Col>
    </Row>
  </Container>
  </>
    
  )
}

export default ContactMe

{/* <div className='box__contactme__container'>
        <div className='box__contactme__title'>
            <h2>Contáctame</h2>
            <p>Si quieres saber más sobre mí o sobre mi trabajo, 
                envíame un mensaje.</p>
        </div>
        <div className='box__contactme__button'>
            <Button variant='outline-light' href='/Contact'>CONTACTO</Button>
        </div>
    </div> */}
