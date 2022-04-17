import React from 'react';
import '../AboutMe/aboutMe.scss'
import Experience from '../Experience/Experience';
import imgProfile from '../../img/myPhoto.jpeg';
import sparkImg from '../../img/SparkAR.png'

const knowledgeIcons = {
    html: 'https://img.icons8.com/color/96/000000/html-5--v1.png',
    css: 'https://img.icons8.com/color/96/000000/css3.png',
    js: 'https://img.icons8.com/color/96/000000/javascript--v1.png',
    wordpress: 'https://img.icons8.com/color/96/000000/wordpress.png',
    bootstrap: 'https://img.icons8.com/color/96/000000/bootstrap.png',
    sass: 'https://img.icons8.com/color/96/000000/sass.png',
    csharp: 'https://img.icons8.com/color/96/000000/c-sharp-logo.png',
    java: 'https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png',
    mysql: 'https://img.icons8.com/color/96/000000/mysql-logo.png',
    android: 'https://img.icons8.com/color/96/000000/android-os.png',
    git: 'https://img.icons8.com/color/96/000000/git.png',
    gameMaker: 'https://img.icons8.com/color/96/000000/game-maker.png',
    unity: 'https://img.icons8.com/color/96/000000/unity.png',
    sparkAr: sparkImg,
    figma: 'https://img.icons8.com/color/48/000000/figma--v1.png'
}

const arrExp = ['Planificación de desarrollo web.', 
'Desarrollo páginas en Wordpress con Elementor, Divi, wpBakery, entre otros.',
 'Desarrollo tiendas Online con Woocommerce.'];

 const AboutMe = () => {
     
  return (
      <div className='box__container container'>
        <div className='box__aboutMe'>
            <h2>Sobre Mí</h2>
            <p>
                ¡Hola! Me llamo Héctor y soy Analista programador egresado 
                de Inacap. Soy una persona organizada, dedicada y responsable, 
                con muchas metas cumplidas y muchas más por cumplir.
                Me considero una persona amigable, comprensiva, creativa, y 
                creo que para todo hay tiempo. Mi Hobby son los videojuegos 
                independientes, también me encanta dibujar y tocar guitarra eléctrica.
            </p>
        </div>
        <div className='box__profileImage'>
            <img alt='profile' src={imgProfile} />
        </div>
        <div className='box__knowledge'>
            <h2>Conocimientos</h2>
                <p>
                    Constantemente estoy estudiando de manera autodidacta en la plataforma Udemy, 
                    actualmente me encuentro realizando un curso de React y he 
                    realizado diversos cursos de diseño de videojuegos y desarrollo 
                    Frontend con HTML, CSS y JavaScript. Conozco sobre metodologías 
                    ágiles de desarrollo, patrones de arquitectura de software, 
                    desarrollo de aplicaciones de escritorio y móviles. Hasta ahora 
                    las tecnologías que manejo son las siguientes:
                </p>

            <div className='box__knowledge__icons'>
                <img alt='html logo'src={knowledgeIcons.html} />
                <img alt='css logo'src={knowledgeIcons.css} />
                <img alt='js logo'src={knowledgeIcons.js} />
                <img alt='html logo'src={knowledgeIcons.wordpress} />
                <img alt='html logo'src={knowledgeIcons.bootstrap} />
                <img alt='html logo'src={knowledgeIcons.sass} />
                <img alt='html logo'src={knowledgeIcons.csharp} />
                <img alt='html logo'src={knowledgeIcons.java} />
                <img alt='html logo'src={knowledgeIcons.mysql} />
                <img alt='html logo'src={knowledgeIcons.android} />
                <img alt='html logo'src={knowledgeIcons.git} />
                <img alt='html logo'src={knowledgeIcons.gameMaker} />
                <img alt='html logo'src={knowledgeIcons.unity} />
                <img alt='html logo'src={knowledgeIcons.sparkAr} />
                <img alt='html logo'src={knowledgeIcons.figma} />
            </div>
        </div>
        <div className='box__experience'>
            <Experience date='2022 - Actual' business='Grupo QS.' arrFunctions={arrExp}/>
            <hr/>
            <Experience date='2021 - 2022' business='DesignSeo.' arrFunctions={arrExp}/>
        </div>
      </div>
  )
}

export default AboutMe;