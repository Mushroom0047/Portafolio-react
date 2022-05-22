import React from 'react'
import logoNavMenu from '../../img/logo/mushroom-isotipo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSkull} from '@fortawesome/free-solid-svg-icons';
import '../Header/header.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';

const navMenuLinks = {
    home: '/',
    sobremi: '/',
    proyectos: '/Projects',
    contacto: '/Contact',
    blog: '/Blog',
    login: '/Login',
}

const Header = () => {
  const {home, sobremi, proyectos, contacto, blog, login} = navMenuLinks;
  return (
      <Navbar className='div__navmenu__container' expand='lg' sticky='top'>
        <Container fluid className='div__container__menu'>
          <Navbar.Brand href={home}><img className='div__navmenu__logo' alt='logo image' src={logoNavMenu}/></Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-nav'/>
          <Navbar.Collapse className='justify-content-end' id='navar-nav'>
            <Nav>
              <Nav.Link className='nav__item text-light rounded mx-2 p-2' href={sobremi}>SOBRE MÍ</Nav.Link>
              <Nav.Link className='nav__item text-light rounded mx-2 p-2' href={proyectos}>PROYECTOS</Nav.Link>
              <Nav.Link className='nav__item text-light rounded mx-2 p-2' href={contacto}>CONTACTO</Nav.Link>
              <Nav.Link className='nav__item text-light rounded mx-2 p-2' href={blog}>BLOG</Nav.Link>
              <Nav.Link className='nav__item text-light rounded mx-2 p-2' href={login}><FontAwesomeIcon icon={faSkull}/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )
    }
    
    export default Header