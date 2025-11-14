import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      {/* Tailwind smoke test banner */}
      <div className="p-4 bg-sky-600 text-white text-center">Tailwind CSS configured — if you see this, Tailwind is working</div>
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
  );
}

export default App;
