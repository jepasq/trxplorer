import './App.css';

import CheckAddress from './CheckAddress';
import NetworkStatus from './NetworkStatus';
import ToFrom from './ToFrom';

function ProgramVersion() {
    return <footer>
	<div className="program-version">TrXplorer v0.0.0-4</div>
	</footer>
}

function App() {
    return (
	    <div>
	    <div className="App">
	    <header className="App-header">TrXplorer</header>
	    <div>
	    Welcome to <em>TrxPlorer</em>. Here you can check the TRX network
	status and check if an address is valid!
	    </div>
	    </div>
	    <ToFrom />
	    <CheckAddress />
	    <NetworkStatus />
	    <ProgramVersion />
	    </div>
    );
}

export default App;
