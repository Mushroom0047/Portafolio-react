import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faGithubAlt, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import '../Footer/footer.scss';
import whiteLogo from '../../img/logo/5.png';
import { Image } from 'react-bootstrap';

const Footer = () => {
    const rrssLinks = {
        ig: 'https://www.instagram.com/mushroom.47/',
        gitgub: 'https://www.github.com/Mushroom0047',
        linkedin: 'https://www.linkedin.com/in/h%C3%A9ctor-vald%C3%A9s-m'
      }
  return (
    <div className='box__footer__container'>
        <div className='box__footer__logo'>
            <Image fluid alt='logotipo' src={whiteLogo}/>
        </div>
        <div className='box__footer__icons'>
            <a href={rrssLinks.ig}><FontAwesomeIcon icon={faInstagram} className='icon__banner'/></a>
            <a href={rrssLinks.gitgub}><FontAwesomeIcon icon={faGithubAlt} className='icon__banner'/></a>
            <a href={rrssLinks.linkedin}><FontAwesomeIcon icon={faLinkedin} className='icon__banner'/></a>
        </div>
        <div className='box__footer__copyright'>
            <p>©Copyright 2022 HectorValdesM. All rights reserved. 🍄</p>
        </div>
    </div>
  )
}

export default Footer
