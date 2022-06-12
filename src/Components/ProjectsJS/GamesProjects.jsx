import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const GamesProjects = ({imageLink, title, date, desc, link}) => {
  return (
        <Container>
            <Row>
                <Col>
                    <Card className='bg-dark'>
                        <Card.Img variant='top' src={imageLink}/>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle>{date}</Card.Subtitle>
                            <Card.Text>{desc}</Card.Text>
                            <Button variant='warning' href={link}>Descargar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>      
  )
}

export default GamesProjects