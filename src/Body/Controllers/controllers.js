import React, { Component } from 'react';
import {Container, Button} from 'react-bootstrap';

class Controllers extends Component {
    render(){
      return(
            <Container>
                <Button className="float-right" variant="primary" onClick={() => this.props.changeShowBottom('nuovoToken')}>Nuovo token</Button>
            </Container>
            
      )
    }
  }
  
  export default Controllers;
  