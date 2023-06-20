// A widget for address conversion

import React from 'react';
import { mainOptions } from './TronConsts.js';

class ToFrom extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    address: ''
	};

	// This binding is necessary to make `this` work in the callback
//	this.checkAddr = this.checkAddr.bind(this);
    }
    render() {
	return <div className="widget">
		   <div>Address converter :</div>
		   <div>
		       <input type="text"
			      onChange={evt => this.changeAddrValue(evt)}>
		       </input>
		       <option>
		       </option>
		       <button type="button" onClick={this.checkAddr}>
			   Convert
		       </button>
		       <br />
		       <div>{this.state.checkResult}</div>
		   </div>
	       </div>
    }

}

export default ToFrom;
