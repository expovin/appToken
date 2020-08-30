import React, { Component } from 'react';
import {Row, Col, Container, Button, Badge, Card} from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment-timezone';

class TokenDetails extends Component {

    state = {
        tokensReady:false,
        tokenDetails : {
            token:"Test"
        },
        currentIdx:null,
        warningButtons:false
    }

    tokenScaduto=false;

    componentDidMount(){
        this.setState({tokensReady:false});
        this.props.getTokens()
        .then( tokens =>{
            let t = tokens.data
            .filter((tk, idx) => {if(tk.tokenId === this.props.tokenIdx) return tk})
            .map((tk) =>{return(tk)})

            this.setState({tokensReady:true, tokenDetails:t[0]}, console.log(this.state))
        })
        .catch(error => console.log(error))
    }

    componentDidUpdate() {
        if(this.state.currentIdx !== this.props.tokenIdx){
            var dettToken = document.getElementById("DettaglioToken");
            if(dettToken)
                dettToken.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});  

            this.setState({currentIdx:this.props.tokenIdx})
            this.componentDidMount();
        }
    }

    tokenRevocato = () =>{
        //return(<div className="TextDanger">Token Revocato</div>)
        return(<div id="watermark">
                    <p className="TextDanger">Token Revocato</p>
               </div>
            )
    }

    tokenRevocatoBanner = () =>{
        //return(<div className="TextDanger">Token Revocato</div>)
        return(<div id="watermark">
                    <p className="TextWarning">Token Scaduto</p>
               </div>
            )
    }    

    revocaButton = () =>{
        return(<Button variant="danger" onClick={() => this.setState({warningButtons:true})}>Revoca</Button>)
    }

    listScope = () => {
        let list = this.state.tokenDetails.scope.map(s => {
            return(<li>{s}</li>)
        })
    return(<ul>{list}</ul>)
    }

    tokenDetails = () => {

        // Controllo Token scaduto
        var d = Date.parse(this.state.tokenDetails.DataCreazione);
        let expDate = d + (this.state.tokenDetails.ValidoOre*60*60*1000);
        var now = Date.parse(new Date())      
        if(now > expDate){
            console.log("Token Scaduto!")
            this.tokenScaduto=true;
        }
        
        
        return(
            <Row>
                <Col>
                <dl class="row">
                    <dt class="col-sm-3">Token</dt>
                    <dd class="col-sm-9">{this.state.tokenDetails.token} ({this.state.tokenDetails.tokenId})</dd>

                    <dt class="col-sm-3">Device</dt>
                    <dd class="col-sm-9">{this.state.tokenDetails.device}</dd>

                    <dt class="col-sm-3">Creato</dt>
                    <dd class="col-sm-9"><Moment format="DD/MMM/YYYY HH.mm.ss" date={this.state.tokenDetails.DataCreazione}/></dd>                

                    <dt class="col-sm-3">Scade</dt>
                    <dd class="col-sm-9"><Moment format="DD/MMM/YYYY HH.mm.ss" add={{ hours: this.state.tokenDetails.ValidoOre }}>{this.state.tokenDetails.DataCreazione}</Moment></dd>     

                    <dt class="col-sm-3">Scope</dt>
                    <dd class="col-sm-9">{this.listScope()}</dd>                             
                </dl>                
                </Col>
                <Col>
                    
                    {this.tokenScaduto? this.tokenRevocatoBanner() : this.state.tokenDetails.revocato? this.tokenRevocato() : null}
                </Col>
            </Row>

        )
    }


    normalButton = () => {
        console.log(this.state.tokenDetails.revocato+" "+this.state.expired)
        return(
            <Card.Footer>
                <Button variant="warning" onClick={() => this.props.changeShowBottom(null)}>Indietro</Button>
                {!this.state.tokenDetails.revocato && !this.tokenScaduto? this.revocaButton() : null}
            </Card.Footer>
        )

    }

    revocaToken = () =>{
        let currentToken = this.state.tokenDetails;
        currentToken.revocato=true;

        this.props.revocaToken(this.props.tokenIdx); 
        this.setState({warningButtons:false, tokenDetails:currentToken})
    }

    warnButtons = () =>{
        return(
            <Card.Footer>
                <Row>
                    <Col>
                        <p>ATTENZIONE! Tutte le applicazioni che usano questo token non funzioneranno piu!</p>
                    </Col>
                    <Col>
                        <Button variant="danger" onClick={this.revocaToken}>Sicuro, Revoca Token</Button>
                        <Button variant="info" onClick={() => this.setState({warningButtons:false})}>No, Torna indietro</Button>                    
                    </Col>
                </Row>
            </Card.Footer>   
        )
     
    }

    cardDetails = () =>{
        return(
            <Card id="DettaglioToken">
                <Card.Header>
                    <Card.Title>Dettaglio Token selezionato</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {this.tokenDetails()}
                    </Card.Text>
                </Card.Body>
                    {!this.state.warningButtons ? this.normalButton() : this.warnButtons()}            
            </Card>            
        )
    }

    render(){
      return(
          <Container>  
              {this.state.tokensReady ? this.cardDetails() : <p>Loading...</p>}
          </Container>
      )
    }
  }
  
  export default TokenDetails;
  