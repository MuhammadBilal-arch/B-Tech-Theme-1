import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from "./Header/Header"
// import Navbar from "./Nav/Nav"
import About from "./About/About"
import Home from "./Home/Home"
import Services from "./Services/Services"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import Prices from "./Prices/Prices"
import ListApi from "./Test/Test"
import Navbar from "./Nav/Nav"
// import SideBar from "./SideBar/SideBar"
function App() {
  return (
    <section>

      <Header />
      {/* <SideBar/> */}
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Services' component={Services} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Prices' component={Prices} />
        {/* <Route path='/Api' component={ListApi} /> */}
        <Route path='/Api'>
      <ListApi value='Hello World' />
        </Route> 
      </Switch>
      <Footer />
    </section>
  );
}

export default App;

