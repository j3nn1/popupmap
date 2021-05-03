import React, { useState, useEffect } from 'react'
import Home from "./components/Home.js";
import Omat from "./components/Omat.js";
import Kirjaudu from "./components/Kirjaudu.js";
import MapContainer from './components/MapContainer.js'
import { Navbar, Nav, NavItem, Button, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import styles from "./styles.css";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import PopMeUp from './PopMeUp.png'

const Navigation = () => {
  let routes = '';
  //Tähän lisää if-else kirjautumistiedon mukaan
  routes = (
    <>
    <Route path='/loyda'>
      <MapContainer /> 
    </Route>
    <Route path='/omat'>
      <Omat /> 
    </Route>
    <Route path='/kirjaudu'>
      <Kirjaudu /> 
    </Route>
    <Route exact path='/'>
      <Home /> 
    </Route>
   </> 
  )
  return (
    <div>
     
       <Router>
        {/*<MainHeader> */}
          <Navbar bg="light" expand="lg">
            <>
            <Navbar.Brand href="/" >
            <img
              src={PopMeUp}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>

          
            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-right">     
            
            <LinkContainer to={'/'} exact>
                <NavItem>
                  <Button variant="light">Home</Button>
                </NavItem>
              </LinkContainer>

              <LinkContainer to={'/loyda'} exact>
                <NavItem>
                  <Button variant="light">Löydä</Button>
                </NavItem> 
              </LinkContainer>
            

              <LinkContainer to={'/omat'} exact>
                <NavItem>
                  <Button variant="light">Omat</Button>
                </NavItem> 
              </LinkContainer>

            </Navbar.Collapse>
            
            <Navbar.Collapse className="justify-content-end">
              <LinkContainer to={'/kirjaudu'} exact>
                  <NavItem>
                    <Button variant="light">Kirjaudu</Button>
                    </NavItem>
                </LinkContainer>
            </Navbar.Collapse>

           
          </> 

          </Navbar>
        {/*</MainHeader> */}
        
        <Switch>
          {routes}
        </Switch>

       </Router>
     
    </div>
  );
}

export default Navigation;
