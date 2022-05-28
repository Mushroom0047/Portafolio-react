import React from 'react'
import data from './dataImageKnowledge';


const ImagesKnow = () => {
    let imgArr = [];
  return (
    <>
    {imgArr = data.map(({toolTip, url, alt}, index) => {
      return <img 
        key={index.toString()}
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