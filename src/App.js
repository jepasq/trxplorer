import logo from './logo.svg';
import './App.css';

import NetworkStatus from './NetworkStatus';

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

function App() {
    return (
	<div>
	  <div className="App">
	  <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
          >
          Learn React
      </a>
	  </header>
	  </div>
	    <NetworkStatus />
	    </div>
  );
}

export default App;
