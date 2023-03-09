import logo from "./images/logo.svg";
import "./App.css";
import Draggable from "react-draggable";
import { router, routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Draggable bounds="parent">
          <div className="appparent">
            <router>
              <routes> </routes>
              <routes> </routes>
              <routes> </routes>
            </router>
            <img src={logo} className="App-logo" alt="logo" />;
          </div>
        </Draggable>
      </header>
    </div>
  );
}

export default App;
