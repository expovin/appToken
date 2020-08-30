import React, { Component } from 'react';
import {Container, Table, Button, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faExclamationCircle, faBan, faEye, faFilter } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import 'moment-timezone';

class TokensList extends Component {

    state = {
        rowTokens:[],
        tokens:[],
        tokensReady:false,
        filter:false
    }

    mapTokens = (tokens) => {
        console.log(tokens)
        let t = tokens.map((tk, idx) =>{
            console.log(tk.token)
            return(
                <tr key={idx} onClick={() => this.props.changeShowBottom('tokenDetails',tk.tokenId)}>
                    <td>{tk.token}</td>
                    <td>{tk.device}</td>
                    <td><Moment format="DD/MMM/YYYY HH.mm.ss" date={tk.DataCreazione}/></td>
                    <td><Moment format="DD/MMM/YYYY HH.mm.ss" add={{ hours: tk.ValidoOre }}>{tk.DataCreazione}</Moment></td>
                    <td>{this.stateIcon(tk.revocato, tk.DataCreazione, tk.ValidoOre)}</td>
                </tr>
            )                
        })
        this.setState({tokensReady:true, tokens:t})        
    }

    componentDidMount(){
        this.setState({tokensReady:false});
        this.props.getTokens()
        .then( tokens =>{
            this.setState({rowTokens:tokens.data})
            this.mapTokens(tokens.data)
        })
        .catch(error => console.log(error))
    }

    stateIcon = (state, dataCreazione, hours) => {
        var d = Date.parse(dataCreazione);
        let expDate = d + (hours*60*60*1000);
        var now = Date.parse(new Date())
        if(now > expDate)
            return (<FontAwesomeIcon  icon={faExclamationCircle} size="lg" color="#FDB900"/> )

        switch (state){
            case 0 : return (<FontAwesomeIcon  icon={faCheck} size="lg" color="green"/> )
            case 1 : return (<FontAwesomeIcon  icon={faBan} size="lg" color="red"/> )
        }


    }

    filter = () => {
        if(this.state.filter){
            this.mapTokens(this.state.rowTokens);
            this.setState({filter:false})
        } else {
            let tokens = this.state.rowTokens.filter(t => {
                if(!t.revocato) return t
            })
            this.mapTokens(tokens);
            this.setState({filter:true})
        }

    }

    titolo = () =>{
        return(
            <h2>Lista Tokens</h2>
        )
    }

    tableTokens = () =>{

        return(
            <div>
                <Row>                    
                    <Col sm={11}>{this.titolo()}</Col>
                    <Col sm={1}>
                        <FontAwesomeIcon  className="iconMark" icon={faFilter} onClick={this.filter} color={this.state.filter ? '#333333' : '#999999'}/>
                        <FontAwesomeIcon  className="iconMark" icon={faTrash} onClick={this.props.deleteExpired} color="red"/>
                    </Col>
                </Row>
                <Row>
                <hr />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Token</th>
                                <th>Device</th>
                                <th>Data Creazione</th>
                                <th>Scadenza</th>
                                <th>Stato</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tokens}
                        </tbody>
                    </Table> 
                </Row>
            </div>
        )
    }


    render(){
      return(
          <Container>                
                {this.state.tokensReady ? this.tableTokens() : <h3>Loading .... </h3>}
                
          </Container>
      )
    }
  }
  
  export default TokensList;
  