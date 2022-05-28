import React from 'react'
import { Button } from 'react-bootstrap'
import '../WebTemplate/webTemplate.scss'

const WebTemplate = ({title, description, img, link}) => {
  return (

    <div className='box__web__container'>
        <div className='box__web__image'>
            <img alt={title + 'site'} src={img}/>
        </div>
        <div className='box__web__description'>
            <h3 className='mt-2'>{title}</h3>
            <p>{description}</p>
            <Button variant='warning' href={link}>Ver Página</Button>
        </div>      
    </div>

  )
}

export default WebTemplate