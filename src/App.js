import './App.css';

import CheckAddress from './CheckAddress';
import NetworkStatus from './NetworkStatus';

function ProgramVersion() {
    return <footer>
	<div className="program-version">TrXplorer v0.0.0-3</div>
	</footer>
}

function App() {
    return (
	    <div>
	    <div className="App">
	    <header className="App-header">TrXplorer</header>
	    </div>
	    <CheckAddress />
	    <NetworkStatus />
	    <ProgramVersion />
	    </div>
    );
}

export default App;
