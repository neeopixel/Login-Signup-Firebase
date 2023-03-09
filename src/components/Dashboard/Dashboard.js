import logo from "../../images/logo.svg";
import "./Dashboard.css";
import Draggable from "react-draggable";
import Footer from "../../library/Footer";
import {} from "bootstrap";
import {} from "react-bootstrap";

function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Dragclass">

          <Draggable bounds="parent">
            <div className="Move">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </Draggable>

          <Footer />
        </div>
      </header>
    </div>
  );
}

export default Dashboard;
