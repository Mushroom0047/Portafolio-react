import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../WebTemplate/webTemplate.scss'

const WebTemplate = ({title, description, img, link}) => {
  return (
      <Container className='box__web__container p-2'>
        <Row>
          <Col className='box__web__image' md={12}>
            <img alt={title + 'site'} src={img}/>          
          </Col>
        </Row>
        <Row>
          <Col className='box__web__description'>
            <h3 className='mt-2'>{title}</h3>
            <p>{description}</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Button variant='warning' href={link}>Ver Página</Button>                    
          </Col>
        </Row>
      </Container>      
  )
}

export default WebTemplate