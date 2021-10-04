import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand className="brandStyle" href="#home">Five-Minute-school</Navbar.Brand>
                    <Nav className="mx-auto">


                        <Link className="linkStyle" to="/home">Home</Link>
                        <Link className="linkStyle" to="/about">About</Link>
                        <Link className="linkStyle" to="/service">Service</Link>

                        <Link className="linkStyle" to="/contact">contact</Link>


                    </Nav>
                    <Button className="btn" variant="info">Register For Free</Button>
                </Container>
            </Navbar>
            <br />


        </>
    );
};

export default Header;