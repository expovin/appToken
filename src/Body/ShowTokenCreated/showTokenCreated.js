import React, { Component } from 'react';
import {Container, Button, Card} from 'react-bootstrap';

class ShowTokenCreated extends Component {

    copyToClipboard = () => {
      var copyText = document.getElementById("tokenString");
      let result = copyText.select();
      document.execCommand("copy");
      console.log("Copied the text: "+result + " --> " + copyText.value);
    }

    render(){
      return(
          <Container>
              <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Token creato</Card.Title>
                    <Card.Text>
                        <textarea style={{ width: '100%' }} id="tokenString" name="tokenString" disabled >{this.props.lastToken}</textarea>
                        <p>Salvare il token perchè non sarà piu possibile visualizzarlo</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                        <Button variant="warning" onClick={() => this.props.changeShowBottom(null)}>Fatto</Button>    
                        <Button variant="info"    onClick={this.copyToClipboard}>Copy</Button>                    
                </Card.Footer>                   
              </Card>
          </Container>
      )
    }
  }
  
  export default ShowTokenCreated;
  