import React, { Component } from 'react';
import HEADER from './Header/header';
import BODY from './Body/body';
import './App.css';
import axios from 'axios';

axios.interceptors.request.use( request =>{
  /** 
   * Qui è possibile editare qualsiasi request in uscita
   * ad esempio aggiungere headers variable 
   * */ 


   return (request)
}, error => {
  /** 
   * Qui è possibile gestire centralmente tutti gli errori
   * in spedizione di requests
   */

   console.log("Errore nella spedizione della request. E' possibile gestirla globalmente da index.js")
   // Rimando il controllo al componente locale
   return Promise.reject(error);
})

axios.interceptors.response.use( response =>{
  /**
   * Qui è possibile editare qualsiasi response in entrata
   * */   

   return (response)
}, error => {
  /** 
   * Qui è possibile gestire centralmente tutti gli errori
   * in ricezione di response
   */
   
   // Rimando il controllo al componente locale
   return Promise.reject(error);
})


class App extends Component {

  state = {
    tokens:[],
    showBottom : null,
    tokenIdx : null,
    lastToken : null
  }

  changeShowBottom = (state, idx=null) => {
    console.log("idx :"+idx)
    this.setState({showBottom:state, tokenIdx:idx})
  }

  getTokens = () =>{
    return new Promise ((fulfill, reject) => {
      axios.get('/token')
      .then( result => {
        fulfill(result.data)
      })
      .catch(error => console.log(error))
    })       
  }

  addToken = (body) =>{
    return new Promise ((fulfill, reject) => {
      axios.post('/token',body)
      .then( result => {
        this.getTokens()
        this.setState({lastToken:result.data.token, showBottom:"showToken"})
        fulfill(result.data)
      })
      .catch(error => console.log(error))
    })       
  }  

  revocaToken = (tokenId) =>{
    return new Promise ((fulfill, reject) => {
      axios.delete('/token',{data: {tokenId:tokenId}})
      .then( result => {
        this.getTokens()
        //this.setState({showBottom:"showToken"})
        fulfill(result.data)
      })
      .catch(error => console.log(error))
    })       
  }    

  deleteExpired = () => {
    return new Promise ((fulfill, reject) => {
      axios.delete('/token/clean')
      .then( result => {
        this.getTokens()
        fulfill(result.data)
      })
      .catch(error => console.log(error))
    })      
  }

  render(){
    return(
      <div>
        <HEADER />
        <BODY getTokens={this.getTokens}
              showBottom={this.state.showBottom}
              changeShowBottom={this.changeShowBottom}
              tokenIdx = {this.state.tokenIdx}
              addToken={this.addToken}
              lastToken={this.state.lastToken}
              revocaToken={this.revocaToken}
              deleteExpired={this.deleteExpired}/>
      </div>
    )
  }
}

export default App;

