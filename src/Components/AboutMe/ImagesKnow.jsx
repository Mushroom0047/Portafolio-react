import React from 'react'
import { Tooltip } from 'react-bootstrap';
import data from './dataImageKnowledge';


const ImagesKnow = () => {
    let imgArr = [];
  return (
    <>
    {imgArr = data.map(({toolTip, url, alt}) => {
      return <img 
        alt={alt}
        src={url}
        data-bs-toggle="tooltip" 
        title={toolTip}
      />
    })}
    </>
  )
}

export default ImagesKnow