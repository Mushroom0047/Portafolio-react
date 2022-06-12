import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../WebTemplate/webTemplate.scss'

const WebTemplate = ({title, description, img, link}) => {
  return (
          <Col sm={12} md={6} lg={4}>
            <Row  className='box__web__container p-2'>
            <Col className='box__web__image' sm={12} md={12} lg={12}>
              <img alt={title + 'site'} src={img}/>          
            </Col>
            <Col sm={12} md={12} lg={12} className='box__web__description'>
              <h3 className='mt-2'>{title}</h3>
              <p>{description}</p>
            </Col>
            <Col sm={12} md={12} lg={12} >
              <Button variant='warning' href={link}>Ver Página</Button>                    
            </Col>
          </Row>
          </Col> 
  )
}

export default WebTemplate