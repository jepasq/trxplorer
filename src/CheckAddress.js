// A widget used to check if a tron adress is valid
import React from 'react';
import { mainOptions } from './TronConsts.js';

const TronWeb = require('tronweb');

class CheckAddress extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    isFullnodeConnected: 'null',
	    isSolidityConnected: 'null',
	    isEventserverConnected: 'null',
	    checkResult: 'Waiting...',
	    address: ''
	};

	// This binding is necessary to make `this` work in the callback
	this.checkAddr = this.checkAddr.bind(this);
    }

    changeAddrValue(evt) {
	const val = evt.target.value;
	this.setState({
	    address: val
	});
    }
    
    checkAddr() {
	const tronweb = new TronWeb(mainOptions);

	var newSpan;
	
	if (tronweb.isAddress(this.state.address)) {
	    newSpan = (
		<span>The addresse is <strong>valid</strong>.</span>
	    )
	} else {
	    newSpan = (
		<span>The addresse is <strong>not valid</strong>.</span>
	    )
	}
	
	this.setState({
	    checkResult: newSpan
	});
    }
    
    render() {
	return <div className="widget">
		   <div>Check Address :</div>
		   <div>
		       <input type="text"
			      onChange={evt => this.changeAddrValue(evt)}>
		       </input>
		       <button type="button" onClick={this.checkAddr}>
			   Check
		       </button>
		       <br />
		       <div>{this.state.checkResult}</div>
		   </div>
	       </div>
    }
}

export default CheckAddress;
