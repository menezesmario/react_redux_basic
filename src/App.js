import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: '10px', backgroundColor: 'black', color: '#ffffff' }}>
      <h2 style={{ marginBottom: '100px' }}>Redux Basic Class: React with Redux</h2>
      <input type="text" style={{height: '34px', width: '300px'}}/>
      <button style={{height: '40px', padding: '0px 30px 0px 30px' }}>
        Send
      </button>
      <h3 style={{ marginBottom: '100px' }}>Waiting...</h3>
    </div>
  );
}

export default App;
