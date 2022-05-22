import React from 'react'
import '../WebTemplate/webTemplate.scss'

const WebTemplate = ({title, description, img, link}) => {
  return (

    <div className='box__web__container'>
        <div className='box__web__image'>
            <img alt={title + 'site'} src={img}/>
        </div>
        <div className='box__web__description'>
            <h2>{title}</h2>
            <p>{description}</p>
            <button className='btn btn__yellow' type='button'><a href={link}>Ver Página</a></button>
        </div>      
    </div>

  )
}

export default WebTemplate