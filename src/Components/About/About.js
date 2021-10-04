import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './About.css'
import about from '../../team.png'

const About = () => {
    return (
        <div>
            <Container>
                <div>
                    <h1 className="header">Time to Learn English with FIVE-MINUTES-SCHOOL</h1>
                    <h3>Sharing what we know with other since 2020</h3><hr />
                    <br />

                    <Row>
                        <Col sm={6}>
                            <div className="about-info">
                                <h3 >We envision a world where anyone, anywhere has the power to transform their life through learning.</h3>
                                <br />
                                <h6>
                                    Coursera partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.
                                </h6>
                            </div>
                        </Col>


                        <Col sm={6}>

                            <img className="about-img" src={about} alt="" />

                        </Col>
                    </Row>


                </div>
            </Container>




            {/* team members detail  */}
            <Container className="story">

                <Row>
                    <Col sm={5}>
              

                            <img className="about-img2" src="https://images.ctfassets.net/00atxywtfxvd/3JTfOpbc60Z57eLxWRtCZe/f6da896e4f7c4a5b6fa7fd8d33d89586/Coursera_Our_Story_Assets.jpeg" alt="" />
    
                    </Col>


                    <Col sm={7}>

                        <div className="about-info">
                        <h1>Our story</h1>
                        <h6>Coursera was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing life-transforming learning experiences to learners around the world. Today, Coursera is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies. Coursera received B Corp certification in February 2021, which means that we have a legal duty not only to our shareholders, but to also make a positive impact on society more broadly, as we continue our efforts to reduce barriers to world-class education for all.</h6>
                        <br />
                        <h6>
                            82 million learners, 100+ Fortune 500 companies, and more than 6,000 campuses, businesses, and governments come to Coursera to access world-class learning—anytime, anywhere.
                        </h6>
                        </div>

                    </Col>
                </Row>



            </Container>
        </div>


    );
};

export default About;