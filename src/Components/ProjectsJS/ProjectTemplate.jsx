import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Codepen from 'ts-react-codepen-embed';

const ProjectTemplate = ({title, date, desc, slugHash}) => {
  return (
    <>
    <Container className='mt-5'>
        <Row>
            <Col className='text-left' md='6' sm='12'>
                <h2>{title}</h2>
                <p>{date}</p>
                <p>{desc}</p>
            </Col>
            <Col md='6' sm='12'>
              <Codepen hash={slugHash} user='mushroom0047' defaultTab='result' preview={false}/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default ProjectTemplate