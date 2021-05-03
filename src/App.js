import React, { useState, useEffect } from 'react'
import Navigation from "./Navigation.js";
import Home from "./components/Home.js";
import Omat from "./components/Omat.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.css";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <div>
       <Navigation/>
    </div>
  );
}

export default App;
