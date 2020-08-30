import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

class Header extends Component {
    render(){
      return(
          <Container>
            <Jumbotron>
                <h1>API Token</h1>
                <p>
                    Da qui è possibile creare verificare e revocare i token per le API interne. Ogni Token può avere uno scope ben preciso. 
                    Creare un Token di autenticazione per ogni Device/Servizio diverso che ne fa uso
                </p>
            </Jumbotron>
          </Container>

      )
    }
  }
  
  export default Header;
  