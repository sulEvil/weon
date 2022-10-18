import React, {useEffect, useState} from 'react'
import {Nav, Navbar, Container} from "react-bootstrap"
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

function NavBar() {
    const [activeLink, setActiveLink] = useState('hone')
    const [scrolled, setScrolled] = useState(false)
    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }
    useEffect(()=> {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled (true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)

        return() => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <div className={'logo-text'}> We On <br/> <p>Site</p></div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className={'navbar-toggler-icon'}>
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Главная</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Умения</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Проекты</Nav.Link>
                    </Nav>
                    <span className={'navbar-text'}>
                        <div className={'social-icon'}>
                            <a href={'vk.com'}>
                                <img src={navIcon1} alt={'vk'} />
                            </a>
                            <a href={'telegram.com'}>
                                <img src={navIcon2} alt={'telegram'} />
                            </a>
                            <a href={'whatsapp.com'} alt={'whatsapp'}>
                                <img src={navIcon3} alt={'social-icon'} />
                            </a>
                        </div>
                        <button className={'vvd'} onClick={()=> console.log('asd')}>
                            <span>
                                Написать нам
                            </span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar