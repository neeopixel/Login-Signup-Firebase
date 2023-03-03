import logo from './images/logo.svg';
import './App.css';
import Draggable from 'react-draggable';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Draggable bounds="parent">
        <img src={logo} className="App-logo" alt="logo" />
        </Draggable>
      </header>
    </div>
  );
}

export default App;
