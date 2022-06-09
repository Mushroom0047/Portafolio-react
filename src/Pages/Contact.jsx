import React from 'react'
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import '../Pages/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faGithubAlt, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const rrssLinks = {
  ig: 'https://www.instagram.com/mushroom.47/',
  github: 'https://www.github.com/Mushroom0047',
  linkedin: 'https://www.linkedin.com/in/h%C3%A9ctor-vald%C3%A9s-m'
}

const Contact = () => {
  const {ig, github, linkedin} = rrssLinks;

  return (
    <>
      <Header />
      <Banner title={['Contacto']} subtitle='Si quieres saber más sobre mí o sobre mi trabajo, envíame un mensaje.'/>
      <Container >
        <Row>
          <Col>
          <div className='box__form__container'>
            <div className='box__form__form'>
              <form>
                <Row>
                  <Col sm={12} md={6} lg={6}>
                    <input type='text' name='nombre' id='nombre' placeholder='Nombre...' required/>                  
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <input type='text' name='apellido' id='apellido' placeholder='Apellido...' required/>                  
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <input type='email' name='email' id-='email' placeholder='Email...' required/>                  
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <input type='text' name='asunto' id='asunto' placeholder='Asunto...' required/>                  
                  </Col>
                  <Col sm={12} md={12} lg={12}>
                    <textarea name='mensaje' placeholder='Mensaje...' required></textarea>
                    <div className='box__form__form__buttons'>
                      <Button variant='warning' type='submit'>Enviar</Button>
                      <Button variant='outline-light' type='reset'>Limpiar</Button>
                    </div>                  
                  </Col>
                </Row>
              </form>
            </div>
          </div>
          </Col>        
        </Row>
      </Container>
      
      <Footer />
    </>
  )
}

export default Contact