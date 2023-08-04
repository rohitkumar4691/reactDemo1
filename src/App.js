import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer"
import Contact from "./components/Contact";

import "./styles/Home.scss"
import "./styles/App.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/contact" element = {<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
