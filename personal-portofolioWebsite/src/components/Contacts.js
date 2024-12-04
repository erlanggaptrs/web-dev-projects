import { useState } from "react";
import { Container , Row , Col} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const formInitalDetails ={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitalDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitalDetails);
        if (result.code === 200) {
            setStatus({success: true, message: "Message Sent Successfully"});
        } else {
            setStatus({success: false, message: "Something went wrong, please try again later."});
        }
    }

    return(
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="Contact Us"/>
                </Col>
                <Col md={6}>
                <TrackVisibility>
                    {({isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__lightSpeedInRight" : ""}>
                    <h2>Get in Touch</h2>
                    </div>}
                    </TrackVisibility>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" placeholder="First Name" value={formDetails.firstName} onChange={(e) => onFormUpdate("firstName", e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" placeholder="Last Name" value={formDetails.lastName} onChange={(e) => onFormUpdate("lastName", e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" placeholder="Email Address" value={formDetails.email} onChange={(e) => onFormUpdate("email", e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" placeholder="Phone No." value={formDetails.phone} onChange={(e) => onFormUpdate("phone", e.target.value)}/>
                            </Col>
                            <Col>
                            <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}/>
                            <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}> {status.message} </p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
    )
}