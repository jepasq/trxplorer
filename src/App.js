import logo from './logo.svg';
import './App.css';

import NetworkStatus from './NetworkStatus';

function ProgramVersion() {
    return <div className="program-version">TrXplorer v0.0.0-1</div>;
}

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
	    <ProgramVersion />
	    </div>
  );
}

export default App;
