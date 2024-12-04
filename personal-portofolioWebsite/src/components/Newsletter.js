import {Alert} from "react-bootstrap";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import {useEffect} from "react";
import TrackVisibility from 'react-on-screen';

export const Newsletter = ({onValidated, status, message}) => {
const [email, setEmail] = useState('');


useEffect(() => {
    if (status === "success") clearFields();
},[status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL:email
        })
    }
    const clearFields = (e) => {
        setEmail('');
    }
    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                    <TrackVisibility>
                    {({isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <h1>Let's keep in touch with me</h1>
                        </div>}
                        </TrackVisibility>
                        {status === "sending" && <Alert>sending...</Alert>}
                        {status === "error" && <Alert variant="danger">{message}</Alert>}
                        {status === "success" && <Alert>{message}</Alert>}
                    </Col>
                    <Col lg={12} md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
                                <button type="submit">Subscribe</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}