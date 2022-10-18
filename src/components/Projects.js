import React from 'react';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import {Col, Container, Nav, Row, Tab, Tabs} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import {isVisible} from "@testing-library/user-event/dist/utils";
import TrackVisibility from "react-on-screen";
function Projects(props) {
    const projects = [
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
    ]


    return (
        <section className={'project'} id={'projects'}>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                                <div className={"animate__animated animate__fadeIn"}>
                                    <h2>Проекты</h2>
                                    <p> Предлагаем все, что нужно вашему бренду для цифрового маркетинга и продвижения бизнеса. </p>
                                </div>
                        </TrackVisibility>
                        <Tab.Container id={'projects-tabs'} defaultActiveKey={'first'} >
                            <Nav variant={'pills'} className={'nav-pills mb-5 justify-content-center'} id={'pills-tab'}>
                                <Nav.Item>
                                    <Nav.Link eventKey={'first'}>Бизнес</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link eventKey={'second'}>Дизайн</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={'third'}>Реклама</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey={'first'}>
                                    <Row>
                                        {
                                            projects.map((project, index)=> {
                                                return (
                                                    <ProjectCard key={index} imgUrl={project.imgUrl} title={project.title} description = {project.description} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'second'}>
                                    <Row>
                                        {
                                            projects.map((project, index)=> {
                                                return (
                                                    <ProjectCard imgUrl={project.imgUrl} title={project.title} description = {project.description} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'third'}>
                                    <Row>
                                        {
                                            projects.map((project, index)=> {
                                                return (
                                                    <ProjectCard imgUrl={project.imgUrl} title={project.title} description = {project.description} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className={'background-image-right'} alt="background"/>
        </section>
    );
}

export default Projects;