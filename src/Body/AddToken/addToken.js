import React, { Component } from 'react';
import {Card, Form, Button, Container, Row, Col, Nav} from 'react-bootstrap';

class AddToken extends Component {

    state = {
        currentView : "service"
    };

    formData = {
        hours:1,
        data : {
            device :"",
            scope : [],
            descrizione:""
        }
        
    };

    handleChange = (event) => {
        switch (event.target.name) {
            case 'validoOre' : this.formData['hours']=parseInt(event.target.value); break;
            case 'chkEndPoints' : 
                if(event.target.checked)
                    this.formData.data.scope.push(event.target.id); 
                else {
                    let idx = this.formData.data.scope.indexOf(event.target.id);
                    console.log("Elemento da Rimuovere "+idx);
                    this.formData.data.scope.splice(idx,1);
                }
                break;
            default : this.formData.data[event.target.name]=event.target.value
        }
    }    

    services = () =>{
        return(
            <Card.Text className="APICardText">
                <Row>
                    <Col className="mb-2 text-muted">Pompa</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/pompaPiscina<GET>$" label="GET" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/pompaPiscina<POST>$" label="POST" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/pompaPiscina<PUT>$" label="PUT" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/pompaPiscina<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>                                                
                <Row>
                    <Col className="mb-2 text-muted">Mensa</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/mensa/.*<GET>$" label="GET" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/mensa/.*<POST>$" label="POST" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/mensa/.*<PUT>$" label="PUT" disabled onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/mensa/.*<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>
                <Row>
                    <Col className="mb-2 text-muted">Allarme</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/allarme<GET>$" label="GET" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/allarme<POST>$" label="POST" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/allarme<PUT>$" label="PUT" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/allarme<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>    
                <Row>
                    <Col className="mb-2 text-muted">Email</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/email<GET>$" label="GET" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/email<POST>$" label="POST" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/email<PUT>$" label="PUT" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/email<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>        
                <Row>
                    <Col className="mb-2 text-muted">LocalExec</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/localExec<GET>$" label="GET" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/localExec<POST>$" label="POST" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/localExec<PUT>$" label="PUT" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/localExec<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>        
                <Row>
                    <Col className="mb-2 text-muted">Basculante</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/basculante<GET>$" label="GET" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/basculante<POST>$" label="POST" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/basculante<PUT>$" label="PUT" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/basculante<DELETE>$" label="DELETE" onChange={this.handleChange}/></Col>
                </Row>     
                <Row>
                    <Col className="mb-2 text-muted">Luce Cancello</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/luceCancello<GET>$" label="GET" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/luceCancello<POST>$" label="POST" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/luceCancello<PUT>$" label="PUT" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/luceCancello<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>    
                <Row>
                    <Col className="mb-2 text-muted">Echo</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/echo<GET>$" label="GET" onChange={this.handleChange} /></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/echo<POST>$" label="POST" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/echo<PUT>$" label="PUT" onChange={this.handleChange} /></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/service\/echo<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>    
                <Row>
                    <Col className="mb-2 text-muted">Google</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/q/<GET>$" label="GET" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/q/<POST>$" label="POST" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/q/<PUT>$" label="PUT" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/q/<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>                                                                                                                                                                                                                                                                                                                             
            </Card.Text>
        )
    }

    tado = () => {
        return(
            <Card.Text className="APICardText">
                <Row>
                    <Col className="mb-2 text-muted">Home</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/home<GET>$" label="GET" onChange={this.handleChange} /></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/home<POST>$" label="POST" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/home<PUT>$" label="PUT" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/home<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>  
                <Row>
                    <Col className="mb-2 text-muted">Zone</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/zone<GET>$" label="GET" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/zone<POST>$" label="POST" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/zone<PUT>$" label="PUT" disabled onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/zone<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>      
                <Row>
                    <Col className="mb-2 text-muted">stateInfo</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/stateInfo<GET>$" label="GET" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/stateInfo<POST>$" label="POST" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/stateInfo<PUT>$" label="PUT" disabled onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/stateInfo<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>        
                <Row>
                    <Col className="mb-2 text-muted">stateInfo Zone</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/stateInfo/.*<GET>$" label="GET" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/stateInfo/.*<POST>$" label="POST" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/stateInfo/.*<PUT>$" label="PUT" disabled onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/stateInfo/.*<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>    
                <Row>
                    <Col className="mb-2 text-muted">Weatherinfo</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/weatherinfo<GET>$" label="GET" onChange={this.handleChange}/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/weatherinfo<POST>$" label="POST" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/weatherinfo<PUT>$" label="PUT" disabled onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/weatherinfo<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row> 
                 <Row>
                    <Col className="mb-2 text-muted">Switch ON|OFF</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/switch/.*<GET>$" label="GET" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/switch/.*<POST>$" label="POST" onChange={this.handleChange} /></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/switch/.*<PUT>$" label="PUT" disabled onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/switch/.*<DELETE>$" label="DELETE" onChange={this.handleChange} /></Col>
                </Row>  
                <Row>
                    <Col className="mb-2 text-muted">Switch All</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/switchAll<GET>$" label="GET" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/switchAll<POST>$" label="POST" onChange={this.handleChange} /></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/switchAll<PUT>$" label="PUT" disabled onChange={this.handleChange} /></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/switchAll<DELETE>$" label="DELETE" onChange={this.handleChange} /></Col>
                </Row>                  
                <Row>
                    <Col className="mb-2 text-muted">Set Manual</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/setManual/.*<GET>$" label="GET" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/setManual/.*<POST>$" label="POST" onChange={this.handleChange} /></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/setManual/.*<PUT>$" label="PUT" disabled onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/setManual/.*<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>      
                <Row>
                    <Col className="mb-2 text-muted">Historic Info</Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/historicInfo/.*<GET>$" label="GET" onChange={this.handleChange} /></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/historicInfo/.*<POST>$" label="POST" onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/historicInfo/.*<PUT>$" label="PUT" disabled onChange={this.handleChange} disabled/></Col>
                    <Col><Form.Check type="switch" name="chkEndPoints" id="^\/tado\/historicInfo/.*<DELETE>$" label="DELETE" onChange={this.handleChange} disabled/></Col>
                </Row>                                                                                                    
            </Card.Text>

        )

    }

    selectedView = () =>{
        switch(this.state.currentView) {
            case "service" : return (this.services()); break;
            case "tado" : return (this.tado()); break;
        }
    }

    render(){
        return(
            <Container>
                <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Nuovo Token</Card.Title>

                    <Row id="NavPills">
                        <Nav justify variant="tabs" defaultActiveKey="/services">
                            <Nav.Item>
                                <Nav.Link eventKey="/services" onClick={() =>{this.setState({currentView:"service"})}}>Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Tado" onClick={() =>{this.setState({currentView:"tado"})}}>Tado</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Altro" disabled>Altro</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>


                    {this.selectedView()}
                    <Card.Text>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formDevice">
                                        <Form.Label>Device</Form.Label>
                                        <Form.Control type="text" placeholder="Device or Service" name="device" onChange={this.handleChange} />
                                        <Form.Text className="text-muted">
                                            Assegna un token diverso per ogni device/servizio
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formValidita">
                                        <Form.Label>Valido</Form.Label>
                                        <Form.Control as="select" name="validoOre" onChange={this.handleChange} custom>
                                            <option value="1">1 ora</option>
                                            <option value="6">6 ore</option>
                                            <option value="24">24 ore</option>
                                            <option value="168">1 settimana</option>
                                            <option value="672">4 settimane</option>
                                            <option value="61320">3 mesi</option>
                                            <option value="122640">6 mesi</option>
                                            <option value="245280">12 mesi</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Scope</Form.Label>
                                    <Card style={{ width: '100%' }}>
                                        <Card.Body>

                                        </Card.Body>
                                    </Card> 
                                </Col>
                                <Col>
                                    <Form.Group controlId="frmDescrizione">
                                        <Form.Label>Descrizione</Form.Label>
                                        <Form.Control as="textarea" rows="11" name="descrizione" onChange={this.handleChange}/>
                                    </Form.Group>                                
                                </Col>
                            </Row>
                        </Form>                    
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                        <Button variant="primary" onClick={() => this.props.addToken(this.formData)}>Aggiungi</Button>
                        <Button variant="warning" onClick={() => this.props.changeShowBottom(null)}>Cancella</Button>                        
                </Card.Footer>                
                </Card>        
            </Container>
    
        )
    }
}

export default AddToken;