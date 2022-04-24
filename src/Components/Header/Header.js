import React from 'react'
import logoNavMenu from '../../img/logo/mushroom-isotipo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSkull} from '@fortawesome/free-solid-svg-icons';
import '../Header/header.scss';
import { Link } from 'react-router-dom';

const navMenuLinks = {
    home: '/',
    sobremi: '/',
    proyectos: '/Projects',
    contacto: '/Contact',
    blog: '/Blog',
    login: '/Login',
}

const Header = () => {
  return (
    <div className='box__navmenu__container'>
        <div className='box__navmenu__logo'>
            <Link to={navMenuLinks.home}><img alt='' src={logoNavMenu}/></Link>
        </div>
        <div className='box__navmenu__buttons'>
            <ul>
                <li><Link to={navMenuLinks.sobremi}>Sobre Mí</Link></li>
                <li><Link to={navMenuLinks.proyectos}>Proyectos</Link></li>
                <li><Link to={navMenuLinks.contacto}>Contacto</Link></li>
                <li><Link to={navMenuLinks.blog}>Blog</Link></li>
                <li><Link to={navMenuLinks.login}><FontAwesomeIcon icon={faSkull} className='navmenu__icon__user'/></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header