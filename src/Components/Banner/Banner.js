import React from 'react';
import '../Banner/banner.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faGithubAlt, faLinkedin} from '@fortawesome/free-brands-svg-icons';

 const Banner = ({title, subtitle}) => {

  const rrssLinks = {
    ig: 'https://www.instagram.com/mushroom.47/',
    gitgub: 'https://www.github.com/Mushroom0047',
    linkedin: 'https://www.linkedin.com/in/h%C3%A9ctor-vald%C3%A9s-m'
  }

  return (
    <div className='box__banner__container'>
      <div className='box__icons'>
        <a href={rrssLinks.ig}><FontAwesomeIcon icon={faInstagram} className='icon__banner'/></a>
          <a href={rrssLinks.gitgub}><FontAwesomeIcon icon={faGithubAlt} className='icon__banner'/></a>
          <a href={rrssLinks.linkedin}><FontAwesomeIcon icon={faLinkedin} className='icon__banner'/></a>
      </div>
      <div className='box__titles'>
          <h2>{title}</h2>
          <h1>{subtitle}</h1>
      </div>
    </div>
  )
}
export default Banner