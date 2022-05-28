import React, { useState } from 'react';
import Banner from '../Components/Banner/Banner';
import GearAnim from '../Components/GearAnim/GearAnim';
import Header from '../Components/Header/Header';
import ProjectsJS from '../Components/ProjectsJS/ProjectsJS';
import WebTemplate from '../Components/WebTemplate/WebTemplate';
import ContactMe from '../Components/ContactMe/ContactMe';
import Footer from '../Components/Footer/Footer';
import '../Pages/projects.scss';
import dataWebs from './WebPagesList';
import { Button, Col, Container, Row } from 'react-bootstrap';

const linkGames = 'https://itch.io/profile/hvgamestudio';
const linkItch = [
  "https://hvgamestudio.itch.io/humanity-part-i",
  "https://hvgamestudio.itch.io/cachipun",
  "https://hvgamestudio.itch.io/zombeast-underattack"
]

const Projects = () => {
  //Fill items in webpages
  let webItems = dataWebs.map(({name, desc, link, img}, index) => {
    return <WebTemplate
      key={index.toString()}
      title={name}
      description={desc}
      link={link}
      img={img}/>
  })
  
  
  //Set items in webpages
  const [items, setItems] = useState(webItems);
  const [visible, setVisible] = useState(3);

  const setMoreItems = () => {
    setVisible((prevValue) => prevValue+3);
  }



  return (
    <>
        <Header />
        <Banner title={['Proyectos']} subtitle='Algunas cosas en las que he trabajado'/>
        {/* <GearAnim /> */}
        <Container className='mt-5'>
          <Row>
            <Col md={6} >
              <h2>Páginas web</h2>
              <hr/>
              <p className='text__desc'>
                  En esta sección se encuentran las páginas web 
                  que he desarrollado por mi cuenta y las que he 
                  participado en el desarrollo con la empresa DesignSeo. 
                  La mayoría fueron creadas con WordPress utilizando 
                  herramientas como Elementor, Woocommerce, entro otros.
              </p>
            </Col>          
          </Row>
          <Row>
            <Col className='box__project__webs' md={12}>        
                {items.slice(0, visible).map((item) => {
                  return item;
                })} 
            </Col>
            <Col className='text-center' md={12}>
                <Button variant='outline-warning' onClick={setMoreItems} className='mt-3'>CARGAR MÁS</Button>            
            </Col>
          </Row>
          </Container>
          <Container fluid className='mt-5 box__projectjs__container'>
            <Row>
              <Col>
                <ProjectsJS />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>          
              <Col md={6} className='mt-5'>
              <h2>Juegos desarrollados</h2>
              <hr/>
              <p className='text__desc'>
                Estos juegos son sencillos pero me permitieron aprender e 
                iniciarme en el mundo de la programación. Estos fueron creados 
                con la herramienta Game Maker Studio 2 y son totalmente gratis.<br/>
                Puedes revisarlos en mi página de <a className='link-warning' href={linkGames} target='_blank'>Itch.io</a>
              </p>
              </Col>
            </Row>
            <Row>
              <Col className='box__project__games__itchio'>              
                {/* <iframe className="iframe-games" src="https://itch.io/embed/290990?dark=true" ><a href={linkItch[0]}>Humanity Part I (DEMO) by hv game studio</a></iframe>                
                <iframe className="iframe-games" src="https://itch.io/embed/493334?dark=true" ><a href={linkItch[1]}>CACHIPUN by hv game studio</a></iframe>
                <iframe className="iframe-games" src="https://itch.io/embed/363084?dark=true" ><a href={linkItch[2]}>ZomBeast UnderAttack by hv game studio</a></iframe> */}
              </Col>
            </Row>
          </Container>
          <ContactMe />
          <Footer />
       
    </>
  )
}

export default Projects;