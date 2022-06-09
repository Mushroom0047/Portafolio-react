import React from 'react';
import '../Banner/banner.scss'
import ReactTypingEffect from 'react-typing-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faGithubAlt, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Col, Container, Row} from 'react-bootstrap';

const rrssLinks = {
  ig: 'https://www.instagram.com/mushroom.47/',
  github: 'https://www.github.com/Mushroom0047',
  linkedin: 'https://www.linkedin.com/in/h%C3%A9ctor-vald%C3%A9s-m'
}

 const Banner = ({staticTitle, title, subtitle}) => {
  const {ig, github, linkedin} = rrssLinks;

  return (
    <Container fluid className='box__banner__container'>
      <div className='box__icons'>
        <a href={ig}><FontAwesomeIcon icon={faInstagram} className='icon__banner'/></a>
        <a href={github}><FontAwesomeIcon icon={faGithubAlt} className='icon__banner'/></a>
        <a href={linkedin}><FontAwesomeIcon icon={faLinkedin} className='icon__banner'/></a>
      </div>
      <div className='box__titles'>
        <h2><ReactTypingEffect staticText={staticTitle} text={title} eraseDelay={700} typingDelay={1000}/></h2>
        <h1>{subtitle}</h1>
      </div>
    </Container>
  )
}

export default Banner