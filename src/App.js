import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compliment from "./components/Compliment";
import Footer from "./components/Footer";
import Header from './components/Header'
import Home from './components/Home'
import Login from "./components/Login";
import PasswordChecker from "./components/PasswordChecker";
import Redux from "./components/Redux";
import Signup from "./components/Signup";
import Upload from "./components/Upload";
import Videos from "./components/Videos";

import Homie from './components/Homie'
import Email from './components/Email'
import Services from './components/Services'

import  './App.css'

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
// import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/videos" element={<Videos/>} />
        <Route exact path="/upload" element={<Upload/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/complimentary" element={<Compliment/>} />
        <Route exact path="/redux" element={<Redux/>} />
        <Route exact path="/password-checker" element={<PasswordChecker/>} />

        <Route exact path="/homie" element={<Homie/>} />
        <Route exact path="/email" element={<Email/>} />
        <Route exact path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
