import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import contactImage from './../assets/img/contact-img.svg'
function Contact(props) {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Отправить');
    const [status, setStatus] = useState({});
    const onFormUpdate = (category, value) => {
        setFormDetails({...formDetails, [category]: value})
    }

    return (
        <section className={'contact'} id={'connect'}>
            <Container>
                <Row className={'align-items-center'} >
                    <Col md={6}>
                        <img src={contactImage} alt={'Contact Us'} />
                    </Col>
                    <Col md={6}>
                        <h2>Заказать услугу</h2>
                        <form onSubmit='' action=''>
                            <Row>
                                <Col sm={6} className={'px-1'}>
                                    <input type="text" value={formDetails.firstName} placeholder={'Имя*'} onChange={(e) => {
                                        onFormUpdate('firstName', e.target.value)
                                    }} />
                                </Col>
                                <Col sm={6} className={'px-1'}>
                                    <input type="text" value={formDetails.lastName} placeholder={'Фамилия'} onChange={(e) => {
                                        onFormUpdate('lastName', e.target.value)
                                    }} />
                                </Col>
                                <Col sm={6} className={'px-1'}>
                                    <input type="email" value={formDetails.email} placeholder={'Email'} onChange={(e) => {
                                        onFormUpdate('email', e.target.value)
                                    }} />
                                </Col>
                                <Col sm={6} className={'px-1'}>
                                    <input type="tel" value={formDetails.phone} placeholder={'Номер телефона*'} onChange={(e) => {
                                        onFormUpdate('phone', e.target.value)
                                    }} />
                                </Col>
                                <Col>
                                    <textarea row={'6'} value={formDetails.message} placeholder={'Сообщение'} onChange={(e) => {
                                        onFormUpdate('message', e.target.value)
                                    }}/>
                                    <button type={'submit'}> <span>{buttonText}</span> </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;