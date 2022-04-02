import { useState } from "react";
import logo from "./logo.svg";
import { Routes as Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import MyProgress from "./components/MyProgress/MyProgress";
import GuaranteHero from "./components/GuaranteHero/GuaranteHero";
import HomepageWrapper from "./pages/Homepage_wrapper/Homepage_wrapper";
import Homepage from "./pages/Homepage/Homepage";
import Pricingpage from "./pages/Pricing/Pricingpage";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path='/' exact element={<Home/>}> */}
        <Route path="/" exact element={<HomepageWrapper />}>
          <Route index element={<Homepage />} />
          <Route path="/pricing" exact element={<Pricingpage />} />
          {/* <Route path='/about' exact element={<About/>}/> */}
          {/* <Route path='/login' 
              
              exact element={<Login />}/> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
