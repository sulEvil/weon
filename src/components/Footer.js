import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import footerImg from "./../assets/img/footer-bg.png";
import logo from './../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
function Footer(props) {
    return (
        <footer className={'footer'} >
            <Container>
                <Row className={'align-items-center'}>
                    <Col sm={6}>
                        <div className={'logo-text'}> We On Site</div>
                    </Col>
                    <Col sm={6} className={'text-center text-sm-end'}>
                        <div className={'social-icon'} >
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
                        <p>CopyRight 2020. Все права защищены.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;