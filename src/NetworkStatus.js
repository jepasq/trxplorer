import React from 'react';

const TronWeb = require('tronweb');

const mainOptions = {
  fullNode: 'https://api.nileex.io',
  solidityNode: 'https://api.nileex.io',
  eventServer: 'https://api.nileex.io'
  // fullNode: "http://47.252.3.238:8090",
  // solidityNode: "http://47.252.3.238:8090",
  // eventServer: "http://47.252.3.238:8090"
};
const privateKey = '';

const handleIsConnected = async event => {
    const tronweb = new TronWeb(mainOptions);
    const isConnected = await tronweb.isConnected();
    console.log(isConnected);
    return isConnected;
}

class NetworkStatus extends React.Component {
    constructor(props) {
	super(props);
	this.state = {isConnected: 'null'};
	// handleIsConnected()
    }

    async componentDidMount() {
	// Or handleIsConnected()
	const tronweb = new TronWeb(mainOptions);
	tronweb.isConnected().then((val) => {
	    this.state.isConnected = val;
	});
    }
    
    render() {
	return <div className="widget">Network Status :<br />
	Connected : {this.state.isConnected}</div>
  }
}

export default NetworkStatus;
