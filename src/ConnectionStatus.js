import React from 'react';

class ConnectionStatus extends React.Component {
    constructor(props) {
	super(props);
	this.state= {
	    key: props.label,
	    value: props.value,
	}
    }


    render() {
	return <div className="constatus">
		   {this.state.label}:
		   {this.state.value}
	       </div>
    }
}

export default ConnectionStatus;
