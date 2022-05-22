import React, { useState } from 'react';
import Banner from '../Components/Banner/Banner';
import GearAnim from '../Components/GearAnim/GearAnim';
import Header from '../Components/Header/Header';
import ProjectsJS from '../Components/ProjectsJS/ProjectsJS';
import WebTemplate from '../Components/WebTemplate/WebTemplate';
import ContactMe from '../Components/ContactMe/ContactMe';
import Footer from '../Components/Footer/Footer';

import '../Pages/projects.scss';

/*Import list of pages */
import data from './WebPagesList';
const linkGames = 'https://itch.io/profile/hvgamestudio';
const linkItch = [
  "https://hvgamestudio.itch.io/humanity-part-i",
  "https://hvgamestudio.itch.io/cachipun",
  "https://hvgamestudio.itch.io/zombeast-underattack"
]

const Projects = () => {
  //Fill items
  let webItems = data.map(({name, desc, link, img}) => {
    return <WebTemplate 
    title={name}
    description={desc}
    link={link}
    img={img}/>
  })
  
  const [items, setItems] = useState(webItems);
  const [visible, setVisible] = useState(3);

  const setMoreItems = () => {
    setVisible((prevValue) => prevValue+3);
  }



  return (
    <>
        <Header />
        <Banner title='Proyectos' subtitle='Algunas cosas en las que he trabajado'/>
        <GearAnim />
        <div className='box__project__text'>
        <h2>Páginas web</h2>
        <p>
            En esta sección se encuentran las páginas web 
            que he desarrollado por mi cuenta y las que he 
            participado en el desarrollo con la empresa DesignSeo. 
            La mayoría fueron creadas con WordPress utilizando 
            herramientas como Elementor, Woocommerce, entro otros.
        </p>
        </div>
        <div className='box__project__webs'>
          {items.slice(0, visible).map((item) => {
              return item;
            })}
        </div>
        <div className='box__project__button__load'>
          <button className='btn btn__transparent' onClick={setMoreItems}>Cargar Más</button>
        </div>
        <ProjectsJS />

        <div className='box__project__games'>
          <div className='box__project__games__text'>
            <h2>Juegos desarrollados</h2>
            <p>
              Estos juegos son sencillos pero me permitieron aprender e 
              iniciarme en el mundo de la programación. Estos fueron creados 
              con la herramienta Game Maker Studio 2 y son totalmente gratis.<br/>
              Puedes revisarlos en mi página de <a className='link__yellow' href={linkGames} target='_blank'>Itch.io</a>
            </p>
          </div>
          <div className='box__project__games__itchio'>
            <iframe className="iframe-games"frameborder="0" src="https://itch.io/embed/290990?dark=true" ><a href={linkItch[0]}>Humanity Part I (DEMO) by hv game studio</a></iframe>                
            <iframe className="iframe-games"frameborder="0" src="https://itch.io/embed/493334?dark=true" ><a href={linkItch[1]}>CACHIPUN by hv game studio</a></iframe>
            <iframe className="iframe-games"frameborder="0" src="https://itch.io/embed/363084?dark=true" ><a href={linkItch[2]}>ZomBeast UnderAttack by hv game studio</a></iframe>
          </div>
        </div>
        <ContactMe />
        <Footer />
    </>
  )
}

export default Projects;