import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compliment from "./components/Compliment";
import Footer from "./components/Footer";
import Header from './components/Header'
import Home from './components/Home'
import Login from "./components/Login";
import Redux from "./components/Redux";
import Signup from "./components/Signup";
import Upload from "./components/Upload";
import Videos from "./components/Videos";

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
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
