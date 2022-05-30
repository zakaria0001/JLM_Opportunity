import './App.css';
import Header from'./components/Header/index';
import Landing from'./components/Landing/index';
import Feed from'./components/Feed/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'


import React from 'react';
import { Container } from 'react-bootstrap';
function App() {
  return (
    
    <div className="App">
      <Container>
      <Header/>
      <Landing/>
      <Feed/>
     </Container>
    </div>
  );
}

export default App;
