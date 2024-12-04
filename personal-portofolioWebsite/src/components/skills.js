import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
};

return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                            <div className="skill-box" >
                            <TrackVisibility>
                    {({isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <h2>Skills</h2> 
                                <p> Hello! Nice to Know You Guys</p>
                                </div>}
                                </TrackVisibility>
                                <Carousel responsive={responsive} ssr={true} infinite={true} autoPlaySpeed={3000} keyBoard={true} className="skill-slider" slidesToSlide={1}>
                                    <div className="skills-item">
                                        <img src={meter1} alt="Skill 1" />
                                        <h5>Web Development</h5>
                                    </div>
                                    <div className="skills-item">
                                        <img src={meter2} alt="Skill 2" />
                                        <h5>Cloud Computing</h5>
                                    </div>
                                    <div className="skills-item">
                                        <img src={meter3} alt="Skill 3" />
                                        <h5>Public Speaking</h5>
                                    </div>
                                    <div className="skills-item">
                                        <img src={meter1} alt="Skill 4" />
                                        <h5>Problem Solving</h5>
                                    </div>
                                    <div className="skills-item">
                                        <img src={meter2} alt="Skill 5" />
                                        <h5>Team Work</h5>
                                    </div> 
                                </Carousel>
                                
                            </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt= "background" />
        </section>  
    )
}