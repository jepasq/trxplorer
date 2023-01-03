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

class NetworkStatus extends React.Component {
    render() {

	const tronweb = new TronWeb(mainOptions);
	console.log(tronweb);
	
	return <div className="widget">Network Status</div>;
  }
}

export default NetworkStatus;
