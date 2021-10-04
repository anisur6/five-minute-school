import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courdes.css'

const Courdes = () => {
    const [course, setcourse] = useState([]);

    useEffect(() => {
        fetch('./course.JSON')
            .then(res => res.json())
            .then(data => setcourse(data));
    }, [])

    return (
        <div className="courseclass">
            <Row xs={1} md={3} className="g-4">
                {
                    course.map(course => <Course course={course}></Course>)
                }
            </Row>

        </div>
    );
};

export default Courdes;