import React from 'react';

import ConnectionStatus from './ConnectionStatus';

const TronWeb = require('tronweb');

const mainOptions = {
  fullNode: 'https://api.nileex.io',
  solidityNode: 'https://api.nileex.io',
  eventServer: 'https://api.nileex.io'
  // fullNode: "http://47.252.3.238:8090",
  // solidityNode: "http://47.252.3.238:8090",
  // eventServer: "http://47.252.3.238:8090"
};
//const privateKey = '';

class NetworkStatus extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    isFullnodeConnected: 'null',
	    isSolidityConnected: 'null',
	    isEventserverConnected: 'null',
	};
	// handleIsConnected()
    }

    async componentDidMount() {
	// Or handleIsConnected()
	const tronweb = new TronWeb(mainOptions);
	tronweb.isConnected().then((val) => {
	    // val.fullNode/solidityNode/eventServer
	    this.setState({
		isFullnodeConnected: val.fullNode.toString(),
		isSolidityConnected: val.solidityNode.toString(),
		isEventserverConnected: val.eventServer.toString(),
	    });
	    console.log(val);
	});
    }
    
    render() {
	return <div className="widget">Network Status :<br />
		   Connected : <br />
  <div className="constatus">Full node :{this.state.isFullnodeConnected}</div>
  <div className="constatus">Solidity node :{this.state.isSolidityConnected}</div>
  <div className="constatus">Event server :{this.state.isEventserverConnected}</div>
  <ConnectionStatus label="Event server" value={this.state.isEventserverConnected} />
	       </div>
  }
}

export default NetworkStatus;
