// A widget used to check if a tron adress is valid
import React from 'react';

class CheckAddress extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    isFullnodeConnected: 'null',
	    isSolidityConnected: 'null',
	    isEventserverConnected: 'null',
	};

	// This binding is necessary to make `this` work in the callback
	this.checkAddr = this.checkAddr.bind(this);
    }

    checkAddr() {
	console.log("Check address!");
    }
    
    render() {
	return <div className="widget">
		   <div>Check Address :</div>
		   <div>
		       <input type="text"></input>
		       <button type="button" onClick={this.checkAddr}>
			   Check
		       </button>
		   </div>
	       </div>
    }
}

export default CheckAddress;
