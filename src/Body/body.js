import React, { Component } from 'react';
import TokenList from './TokenList/tokenList';
import AddToken from './AddToken/addToken';
import Controllers from './Controllers/controllers';
import TokenDetails from './TokenDetail/tokenDetails';
import ShowToken from './ShowTokenCreated/showTokenCreated';

class Body extends Component {

    bottomPage = () =>{
        switch (this.props.showBottom) {
            case 'nuovoToken' : return (<AddToken   changeShowBottom={this.props.changeShowBottom}
                                                    addToken={this.props.addToken}/>)
            case 'tokenDetails' : return (<TokenDetails   changeShowBottom={this.props.changeShowBottom}
                                                            tokenIdx={this.props.tokenIdx}
                                                            getTokens={this.props.getTokens}
                                                            revocaToken={this.props.revocaToken}/>)
            case 'showToken' : return (<ShowToken lastToken={this.props.lastToken}
                                                  changeShowBottom={this.props.changeShowBottom}/>)
            default : return (<Controllers   changeShowBottom={this.props.changeShowBottom}/>)
        }
    }
    render() {
        return (
            <div>
              <TokenList    getTokens={this.props.getTokens}
                            changeShowBottom={this.props.changeShowBottom}
                            deleteExpired={this.props.deleteExpired}/>
      
              {this.bottomPage()}
              
            </div>
          );
    }

  }
  

  export default Body;