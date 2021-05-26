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
        <Typography>The definitive list for projects in the Zero Knowledge Space</Typography>
        <Typography className="red">This site is in Beta, please <a target="_blank" href="https://unegma.com/contact">drop a message</a> if you feel there is any error</Typography>
        <br/>
      </Container>

      </Router>
    </div>
  );
}

export default App;
