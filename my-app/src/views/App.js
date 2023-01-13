import {Route, Routes} from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";


import './App.css';
import Home from './home';
import Login from './login';
import About from "./about";
import LegalMentions from "./legalMentions";
import Signin from "./signIn";

function App() {
  return (
      <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="login" element={<Login />} />
      <Route path="signin" element={<Signin />} />
      <Route path="about" element={<About />} />
      <Route path="legalMentions" element={<LegalMentions />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
