import React from 'react';
import './App.css';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';
import {Container, Divider} from "@material-ui/core";

function App() : JSX.Element {
  return (
    <div className="App">
      <Router>
      <Container className="site-container" maxWidth="sm">

        <br/>
        <Typography variant="h1">DYOR</Typography>
        <Typography variant="h5">(Do Your Own Research)</Typography>
        <br/>

        <p><a href="https://unegma.com" target="_blank" className="hi">By Unegma (not affiliated with the FCA)<br/></a></p>
        <p className="black">thanks to Freddie for the idea</p>
        <br/>
      </Container>

      </Router>
    </div>
  );
}

export default App;
