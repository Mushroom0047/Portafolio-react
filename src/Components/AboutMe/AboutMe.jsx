import React from 'react';
import '../AboutMe/aboutMe.scss'
import Experience from '../Experience/Experience';
import imgProfile from '../../img/myPhoto.jpeg';
import { Col, Container, Row, Tooltip } from 'react-bootstrap';
import ImagesKnow from './ImagesKnow';


const arrExp = ['Planificación de desarrollo web.', 
'Desarrollo páginas en Wordpress con Elementor, Divi, wpBakery, entre otros.',
 'Desarrollo tiendas Online con Woocommerce.'];

 const AboutMe = () => {
     
  return (
      <Container  className='box__aboutme mt-5' id='About'>
          <Row>
              <Col md={6} sm={12}>
                <div>
                    <h2>Sobre Mí</h2>
                    <hr/>
                    <p className='text__desc'>
                        ¡Hola! Me llamo Héctor y soy Analista programador egresado 
                        de Inacap. Soy una persona organizada, dedicada y responsable, 
                        con muchas metas cumplidas y muchas más por cumplir.
                        Me considero una persona amigable, comprensiva, creativa, y 
                        creo que para todo hay tiempo. Mi Hobby son los videojuegos 
                        independientes, también me encanta dibujar y tocar guitarra eléctrica.
                    </p>
                </div>
                <div className='box__knowledge mt-5'>
                    <h2>Conocimientos</h2>
                    <hr/>
                    <p className='text__desc'>
                        Constantemente estoy estudiando de manera autodidacta en la plataforma Udemy, 
                        actualmente me encuentro realizando un curso de React y he 
                        realizado diversos cursos de diseño de videojuegos y desarrollo 
                        Frontend con HTML, CSS y JavaScript. Conozco sobre metodologías 
                        ágiles de desarrollo, patrones de arquitectura de software, 
                        desarrollo de aplicaciones de escritorio y móviles. Hasta ahora 
                        las tecnologías que manejo son las siguientes:
                    </p>

                    <div className='box__knowledge__icons mt-5'>
                        <h2>Tecnologías que manejo</h2>
                        <hr/>
                        {/* Listado de imagenes */}
                        <ImagesKnow />
                        <Tooltip />
                    </div>        
                </div>        
              </Col>
              <Col md={6} sm={12} >
                <div className='box__profileImage'>
                    <img className='img-fluid rounded' alt='profile' src={imgProfile} />
                </div>

                <div className='box__experience mt-2'>
                    <h2>Experiencia</h2>
                    <hr/>
                    <Experience date='2022 - Actual' business='Grupo QS.' arrFunctions={arrExp}/>
                    <hr/>
                    <Experience date='2021 - 2022' business='DesignSeo.' arrFunctions={arrExp}/>
                </div>
              </Col>
          </Row>
      </Container>    
  )
}

export default AboutMe;