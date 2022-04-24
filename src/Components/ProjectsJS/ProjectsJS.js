import React from 'react'
import '../../Components/ProjectsJS/projectsJS.scss'

const ProjectsJS = () => {
  return (
    <div className='box__projectjs__container'>
        <div className='box__projectjs__text__intro'>
            <h2>Proyectos en JavaScript</h2>
            <p>
                En esta sección están los proyectos pequeños 
                que hice para practicar JavaScript.
            </p>
        </div> 
        <div className='box__project__button__show'>
          <button className='btn btn__transparent' >Mostrar</button>
        </div>
    </div>
  )
}

export default ProjectsJS