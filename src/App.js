import "./App.css";

import 'swiper/css';
import Navbar from "./components/navbar/Navbar";
import { Outlet} from "react-router-dom";
// import { BrowserRouter, Route, Outlet } from 'react-router-dom';
import Footer from "./components/footer/Footer";
// import Router from "./config/Router"



function App() {
  return (
    <div className="App">
    <Navbar />

    <Outlet/>
    <Footer/>
  </div>

  );
}

export default App;
