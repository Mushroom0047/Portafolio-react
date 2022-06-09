import React, { useEffect, useState } from 'react';
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
import GamesProjects from '../Components/ProjectsJS/GamesProjects';
import axios from 'axios';

//AXIOS SHIT
const token = 'E0oFtREM3aZS6n8L9zdmsgvHqeoijHhcR3VcXWWf';
const URL_itchio = `https://itch.io/api/1/E0oFtREM3aZS6n8L9zdmsgvHqeoijHhcR3VcXWWf/me`;

const Projects = () => {
  useEffect(() => {
    fetch(URL_itchio)
    .then(res=>res.json())
    .then(data =>console.log(data))
    .catch(err=>console.log(err))
  }, [])
  

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
            <Col sm={12} md={12} lg={6}>
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
                {items.slice(0, visible).map((item) => {
                  return item;                 
                })}         
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
              <Col xs={12} sm={12} md={8} lg={6} className='mt-5'>
              <h2>Juegos desarrollados</h2>
              <hr/>
              <p className='text__desc'>
                Estos juegos son sencillos pero me permitieron aprender e 
                iniciarme en el mundo de la programación. Estos fueron creados 
                con la herramienta Game Maker Studio 2 y son totalmente gratis.<br/>
                Puedes revisarlos en mi página de <a className='link-warning' href='https://itch.io/profile/hvgamestudio' target='_blank'>Itch.io</a>
              </p>
              </Col>
            </Row>
            <Row>
              <Col>              
                <GamesProjects 
                imageLink='asd'
                title='Hola'
                date='hola'
                desc='asd'
                link='asdsd'
                />
              </Col>
            </Row>
          </Container>
          <ContactMe />
          <Footer />
       
    </>
  )
}

export default Projects;