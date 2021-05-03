import React, { useState, useEffect } from 'react'
//import Luettelo from "./Luettelo.js";
import { Container, Row, Col, Form, Button, Card, Image} from 'react-bootstrap';
import PopMeUp from '../PopMeUp.png';
import {LinkContainer} from 'react-router-bootstrap'



export default function Home(props) { 
    const siirryKartalle = () => {
        
    }
    return (
        <div className='homePage'>
           
            <Container>
          
                <Row className="justify-content-md-center">
                    <Col xs lg="2"></Col>
                    <Col md="auto">
                        <Image src={PopMeUp} fluid />
                    </Col>
                    <Col xs lg="2"></Col>
                </Row>


                <Row className="justify-content-md-center">
                    <Col xs lg="2"></Col>
                    <Col md="auto">
                        <Button variant="light" size='lg' href='/loyda' block>GO!</Button> {' '}
                    </Col>
                    <Col xs lg="2"></Col>
                </Row>
            </Container>
           
            
        </div>
   
    )
}