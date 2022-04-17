import React from 'react'
import '../Experience/experience.scss';

const Experience = ({date, business, arrFunctions}) => {
  const listFunctions = arrFunctions.map((n) => 
    <li key={n}>{n}</li>
  );
  
  return (
    <div className='box__experience__data'>
        <p>{date}</p>
        <p>Empresa: {business}</p>
        <ul>{listFunctions}</ul>
    </div>
  )
}

export default Experience;