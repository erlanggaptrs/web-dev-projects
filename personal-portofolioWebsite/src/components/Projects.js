import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard.js";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

const projects = [
    {
        title: "Bangkit Project",
        description: "Projects",
        imgUrl: projImg1,
    },
    {
        title: "Bangkit Project",
        description: "Projects",
        imgUrl: projImg2,
    },
    {
        title: "Bangkit Project",
        description: "Projects",
        imgUrl: projImg3,
    },
    {
        title: "Bangkit Project",
        description: "Projects",
        imgUrl: projImg1,
    },
    {
        title: "Bangkit Project",
        description: "Projects",
        imgUrl: projImg2,
    },
    {
        title: "Bangkit Project",
        description: "Projects",
        imgUrl: projImg3,
    },
    {
        title: "Bangkit Project",
        description: "Projects",
        imgUrl: projImg1,
    },
];

return (
    <section className="projects" id="projects">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                    {({isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <h2>Projects</h2>
                    <p>Hello, these are the list of my projects</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <p>First Projects</p>
                            <Row>
                                {
                                    projects.map((project, index)=> {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second"> 
                        <p>Second Projects</p> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="third"> 
                        <p>Third Projects</p>
                        </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt= "background-right"/>
    </section>
    )
}