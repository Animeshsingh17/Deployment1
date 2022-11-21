import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FormCard from "./Components/Form/index";
import Home from "./Components/Home/index";
import About from "./Components/About/index";
import Information from "./Components/Information";

function App(props) {
  return (
      <BrowserRouter>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/Info">Information</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<FormCard />}></Route>
            <Route exact path="/Info" element={<Information />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;
