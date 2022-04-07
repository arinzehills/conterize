import { useState } from "react";
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
import ContentTypes from "./pages/ContentTypes/ContentTypes";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import ContentCreators from "./pages/ContentCreators/ContentCreators";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path='/' exact element={<Home/>}> */}
        <Route path="/" exact element={<HomepageWrapper />}>
          <Route index element={<Homepage />} />
          <Route path="/pricing" exact element={<Pricingpage />} />
          <Route path="/contenttypes" exact element={<ContentTypes />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/contentcreators" exact element={<ContentCreators />} />
        </Route>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Switch>
    </div>
  );
}

export default App;
