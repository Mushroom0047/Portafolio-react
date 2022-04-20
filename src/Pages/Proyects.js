import React, { useState } from 'react'
import Banner from '../Components/Banner/Banner'
import GearAnim from '../Components/GearAnim/GearAnim'
import Header from '../Components/Header/Header'
import WebTemplate from '../Components/WebTemplate/WebTemplate';
import '../Pages/proyects.scss';

/*Import list of pages */
import data from '../Pages/WebPagesList';

const Proyects = () => {
  //Fill items
  let webItems = data.map(({name, desc, link, img}) => {
    return <WebTemplate 
    title={name}
    description={desc}
    link={link}
    img={img}/>
  })
  
  const [items, setItems] = useState(webItems);
  const [visible, setVisible] = useState(6);



  return (
    <>
        <Header />
        <Banner title='Proyectos'/>
        <GearAnim />
        <div className='box__proyect__text'>
        <h2>Páginas web</h2>
        <p>
            En esta sección se encuentran las páginas web 
            que he desarrollado por mi cuenta y las que he 
            participado en el desarrollo con la empresa DesignSeo. 
            La mayoría fueron creadas con WordPress utilizando 
            herramientas como Elementor, Woocommerce, entro otros.
        </p>
        </div>
        <div className='box__proyect__webs'>
          {items.slice(0, visible).map((item) => {
              return item;
            })}
        </div>
    </>
  )
}

export default Proyects;