// A widget for address conversion

import React from 'react';
import { mainOptions } from './TronConsts.js';

/** An address converter widget
 *
 */
class ToFrom extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    address: '',
	    convertResult: '',
	    to: '',
	    from: '',
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

    changeTo(evt) {
	const val = evt.target.value;
	this.setState({
	    to: val
	});
    }

    changeFrom(evt) {
	const val = evt.target.value;
	this.setState({
	   from: val
	});
    }
    
    convert() {
	console.log("Convert " + this.state.to);
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
			   <option onChange={this.changeFrom(this.value)} value="hex">Hexstring</option>
			   <option onChange={this.changeFrom(this.value)} value="b58">Base58</option>
		       </select>
		       <br />
		       <label htmlFor="totype">To :</label>
		       <select id="totype">
			   <option onChange={this.changeTo(this.value)} value="hex">Hexstring</option>
			   <option onChange={this.changeTo(this.value)} value="b58">Base58</option>
		       </select>
		       <br />
		       <button type="button" onClick={this.convert}>
			   Convert
		       </button>
		       <br />
		       <input type="text" value={this.state.convertResult}
			      readOnly></input>
		       <br />
		   </div>
	       </div>
    }

}

export default ToFrom;
