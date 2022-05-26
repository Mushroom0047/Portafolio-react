import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../../Components/ProjectsJS/projectsJS.scss'

const ProjectsJS = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
    <Container fluid className='box__projectjs__container'>
      <Row>
        <Col md={4} className='mt-5'>
        <h2>Proyectos en JavaScript</h2>
        <hr/>
        <p>
            En esta sección están los proyectos pequeños 
            que hice para practicar JavaScript.
        </p>
        </Col>
      </Row>
      <Row >
        <Col className='text-center'>
          <Button variant='outline-light' onClick={()=>{setShowProjects(!showProjects)}}>MOSTRAR</Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default ProjectsJS