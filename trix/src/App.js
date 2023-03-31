import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar } from "./components/navbar";
import { Herosection } from "./components/herosection";
import { Routes, Route } from "react-router-dom";
import Store  from "./components/Store";
import { Footer } from "./components/Footer";
import Login from "./components/login";
import Signup from './components/signup';
import Addservice from './components/Addservice';

import "./App.css";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Add" element={<Addservice />}></Route>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
