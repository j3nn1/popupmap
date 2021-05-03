import React, { useState, useEffect } from 'react'
//import Luettelo from "./Luettelo.js";
import { Container, Row, Col, Form, Button, Card} from 'react-bootstrap';



export default function Kirjaudu(props) { 

    return (
        <div className=''>
            <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2"></Col>
                <Col md="auto">
                        <h1 style={{backgroundColor: "white", margin:"10px"}}>
                        Kirjaudu palveluun
                        </h1>
                        <h6 style={{backgroundColor: "white", margin:"10px"}}>
                       ...
                        </h6>
                    </Col>
                    <Col xs lg="2"></Col>
                </Row>


                <Row className="justify-content-md-center">
                <Col xs lg="2"></Col>
                <Col md="auto">
                   <Card>
                       <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Sähköposti</Form.Label>
                            <Form.Control type="email" placeholder="Sähköposti" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Salasana</Form.Label>
                            <Form.Control type="password" placeholder="Salasana" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Kirjaudu
                        </Button>

                        <Button variant="link" type="submit">
                            Luo tunnus
                        </Button>

                        </Form>
                        </Card.Body>
                        </Card>
                </Col>
                <Col xs lg="2"></Col>
                </Row>
            </Container>
            
        </div>
   
    )
}