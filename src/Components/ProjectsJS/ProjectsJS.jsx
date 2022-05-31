import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ProjectTemplate from './ProjectTemplate';
import dataProjects from './DataProjects';

const ProjectsJS = () => {
  //Fill items in projects js
  let projects = dataProjects.map(({title, date, slugHash, desc}, index) => {
    return <ProjectTemplate 
    key={index.toString()}
    title={title}
    date={date}
    desc={desc}
    slugHash={slugHash}
    /> 
});

    const [itemsP, setItemsP] = useState(projects);
    const [visibleP, setVisibleP] = useState(0);
    
    const setMoreItems = () => {
      setVisibleP((prevValue) => prevValue+1);
    }

  return (
    <>
    <Container fluid className='box__projectjs__container'>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} className='mt-5'>
        <h2>Proyectos en JavaScript</h2>
        <p>
            En esta sección están los proyectos pequeños 
            que hice para practicar JavaScript.
        </p>
        </Col>
      </Row>
      <Row>
        <Col>
          {itemsP.slice(0, visibleP).map((item) => {
                  return item;
                })} 
        </Col>
      </Row>
      <Row >
        <Col className='text-center'>
          <Button variant='outline-light' onClick={setMoreItems} className='my-5'>MOSTRAR MÁS</Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default ProjectsJS