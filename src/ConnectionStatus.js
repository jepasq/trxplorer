import React from 'react';

/** A React component showing the Tron network connection
 *
 *
 */
class ConnectionStatus extends React.Component {
    constructor(props) {
	super(props);
	this.state= {
	    label: props.label,
	    value: props.value,
	    css: 'success'
	}
    }

    async componentDidMount() {
	if (this.state.value === 'false') {
	    this.setState({css: 'danger'});
	}
    }

    /** The render method, returning markup content of this component
     *
     */
    render() {
	let cn = "text-" + this.state.css;
	return <div className="constatus">
		   {this.state.label}:
		   <span className={cn}>
		       {this.state.value}
		   </span>
	       </div>
    }
}

export default ConnectionStatus;
