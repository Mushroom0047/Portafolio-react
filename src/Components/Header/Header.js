import React from 'react'
import logoNavMenu from '../../img/logo/mushroom-isotipo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSkull} from '@fortawesome/free-solid-svg-icons';
import '../Header/header.scss';

const navMenuLinks = {
    sobremi: '',
    proyectos: '',
    contacto: '',
    blog: '',
    login: '',
}

const Header = () => {
  return (
    <div className='box__navmenu__container'>
        <div className='box__navmenu__logo'>
            <a href='/'><img alt='' src={logoNavMenu}/></a>
        </div>
        <div className='box__navmenu__buttons'>
            <ul>
                <li><a href={navMenuLinks.sobremi}>Sobre Mí</a></li>
                <li><a href={navMenuLinks.proyectos}>Proyectos</a></li>
                <li><a href={navMenuLinks.contacto}>Contacto</a></li>
                <li><a href={navMenuLinks.blog}>Blog</a></li>
                <li><a href={navMenuLinks.login}><FontAwesomeIcon icon={faSkull} className='navmenu__icon__user'/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header