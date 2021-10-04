import React from 'react';
import { Card, Col, Container} from 'react-bootstrap';

const Course = (props) => {
    const { img, course, price, duration } = props.course;
    return (
        <div>


            <Container>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{course}</Card.Title>
                            <div className="d-flex justify-content-between">
                                <div className="fw-bold">price: {price}</div>
                                <div className="fw-bold">Duration: {duration}</div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Container>



        </div>
    );
};

export default Course;