import React from 'react';

import ConnectionStatus from './ConnectionStatus';
import { mainOptions } from './TronConsts.js';

const TronWeb = require('tronweb');

/** An component used to show the connection status of the Tron network.
 *
 */
class NetworkStatus extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    isFullnodeConnected: 'null',
	    isSolidityConnected: 'null',
	    isEventserverConnected: 'null',
	};
    }

    async componentDidMount() {
	const tronweb = new TronWeb(mainOptions);
	tronweb.isConnected().then((val) => {
	    /*	    console.log(val);
		    console.log(val.solidityNode.toString());
	    */
	    this.setState({
		isFullnodeConnected: val.fullNode.toString(),
		isSolidityConnected: val.solidityNode.toString(),
		isEventserverConnected: val.eventServer.toString(),
	    });
	});
    }
    
    render() {
	return (
	    <div className="widget">Network Status :<br />
		<ConnectionStatus label="Full node"
				  value={this.state.isFullnodeConnected} />
		
		<ConnectionStatus label="Solidity node"
				  value={this.state.isSolidityConnected} />
		
		<ConnectionStatus label="Event server"
				  value={this.state.isEventserverConnected} />
	    </div>
	)
  }
}

export default NetworkStatus;
