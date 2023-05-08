// A widget used to check if a tron adress is valid
import React from 'react';

const TronWeb = require('tronweb');
const mainOptions = {
  fullNode: 'https://api.nileex.io',
  solidityNode: 'https://api.nileex.io',
  eventServer: 'https://api.nileex.io'
};

class CheckAddress extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    isFullnodeConnected: 'null',
	    isSolidityConnected: 'null',
	    isEventserverConnected: 'null',
	    checkResult: 'tested!'
	};

	// This binding is necessary to make `this` work in the callback
	this.checkAddr = this.checkAddr.bind(this);
    }

    checkAddr() {
	const tronweb = new TronWeb(mainOptions);
	console.log(tronweb.isAddress("aze"));
	this.setState({
	    checkResult: "aze"
	});
    }
    
    render() {
	return <div className="widget">
		   <div>Check Address :</div>
		   <div>
		       <input type="text"></input>
		       <button type="button" onClick={this.checkAddr}>
			   Check
		       </button>
		       <span>{this.state.checkResult}</span>
		   </div>
	       </div>
    }
}

export default CheckAddress;
