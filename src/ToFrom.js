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
	this.convert = this.convert.bind(this);
    }

    changeAddrValue(evt) {
	const val = evt.target.value;
	this.setState({
	    address: val
	});
    }
    
    convert() {
	this.setState({
	    address: 'new address!'
	});
    }
    
    render() {
	return <div className="widget">
		   <div>Address converter :</div>
		   <div>
		       <input type="text"
			      onChange={evt => this.changeAddrValue(evt)}>
		       </input>
		       <br />
		       <label htmlFor="fromtype">From :</label>
		       <select id="fromtype">
			   <option value="hex">Hexstring</option>
			   <option value="b58">Base58</option>
		       </select>
		       <br />
		       <label htmlFor="totype">To :</label>
		       <select id="totype">
			   <option value="hex">Hexstring</option>
			   <option value="b58">Base58</option>
		       </select>
		       <br />
		       <button type="button" onClick={this.convert}>
			   Convert
		       </button>
		       <br />
		       <div>{this.state.checkResult}</div>
		   </div>
	       </div>
    }

}

export default ToFrom;
