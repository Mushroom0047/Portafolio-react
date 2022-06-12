import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner/Banner';
import Header from '../Components/Header/Header';
import ProjectsJS from '../Components/ProjectsJS/ProjectsJS';
import WebTemplate from '../Components/WebTemplate/WebTemplate';
import ContactMe from '../Components/ContactMe/ContactMe';
import Footer from '../Components/Footer/Footer';
import '../Pages/projects.scss';
import dataWebs from './WebPagesList';
import { Button, Col, Container, Row } from 'react-bootstrap';
import GamesProjects from '../Components/ProjectsJS/GamesProjects';

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
  // const [items, setItems] = useState(webItems);
  const [visible, setVisible] = useState(3); 
  const [loadMorePagesName, setLoadMorePagesName] = useState('CARGAR MÁS');
  
  const setMoreItems = () => {
    //Cambiar valor de texto
    if(visible>webItems.length-3)setLoadMorePagesName('OCULTAR')
    if(loadMorePagesName ==='OCULTAR')setLoadMorePagesName('CARGAR MÁS')

    //Cambiar valor de paginas
    if(visible <= webItems.length){
      setVisible((prevValue) => prevValue+3);
    }else{
      setVisible(3);
    }
  }
  
  return (
    <>
        <Header />
        <Banner 
        title={['Proyectos']} 
        subtitle='Algunas cosas en las que he trabajado'
        gear={true}/>
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
                {webItems.slice(0, visible).map((item) => {
                  return item;                 
                })}         
            <Col className='text-center' md={12}>
                <Button variant='outline-warning' onClick={setMoreItems} className='mt-3'>{loadMorePagesName}</Button>            
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
              <Col sm={12} md={6} lg={4}>              
                <GamesProjects 
                imageLink='https://img.itch.zone/aW1nLzI1NTE0ODkucG5n/315x250%23c/fFpjJp.png'
                title='CACHIPUN'
                date='Oct 05, 2019'
                desc='hola a todo el mundo! este es un pequeño juego sobre piedra,  papel y tijeras llamado "CACHIPÚN"  espero les guste.
                ¿puedes ganar más de 5 veces seguidas?'
                link='https://hvgamestudio.itch.io/cachipun'
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <GamesProjects 
                  imageLink='https://img.itch.zone/aW1hZ2UvMjkwOTkwLzE0MzI3NjQucG5n/315x250%23c/%2FiefYr.png'
                  title='Humanity Part I (DEMO)'
                  date='Aug 17, 2018'
                  desc='Un juego de aventuras donde acompañaremos a Frank, un humano creado genéticamente, a través de la misteriosa ciudad de Uxo, gobernada por un rey que tiene muchos secretos que contar'
                  link='https://hvgamestudio.itch.io/humanity-part-i'
                  />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <GamesProjects 
                  imageLink='https://img.itch.zone/aW1nLzI3NTk4MzUucG5n/315x250%23c/FJ8fDX.png'
                  title='Zombeast under attack'
                  date='Jan 29, 2019'
                  desc='es un simple juego de disparos hecho para aprender y desestresarse, los personajes son personas reales (compañeros de trabajo), tal vez no sea el juego del año, pero me ayudó a mejorar mis habilidades de programación.'
                  link='https://hvgamestudio.itch.io/zombeast-underattack'
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