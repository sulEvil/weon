import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from "react-on-screen";
import {isVisible} from "@testing-library/user-event/dist/utils";

function Banner(props) {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Дизайн', 'Разработка', 'Продвижение'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 2000;
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(400);
        }
    }
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {
            clearInterval(ticker);
        }
    }, [text]);




    return (
        <section className={'banner'} id={'home'}>
            <Container>
                <Row className={'align-items-center'}>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>

                                <div className={"animate__animated animate__fadeIn"}>
                                    <span className={'tagline'}>Быть на шаг впереди</span>
                                    <h1>{`Быть на шаг впереди`}<br/> <span className={'wrap'}>{text}&nbsp;</span></h1>
                                    <p> Делаем не просто красивые сайты и приложения, создаем то, что принесет Вам прибыль </p>
                                    <button onClick={() => console.log('connect')}>Обсудить проект <ArrowRightCircle size={25} /></button>
                                </div>
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img alt='header' src={headerImg} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;