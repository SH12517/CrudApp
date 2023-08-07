import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import {

  Route,
  Routes,

} from "react-router-dom";
import Notfound from "./components/pages/Notfound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

function App(props) {
  return (
  
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route Component = {Notfound}/>
        </Routes>
      </div>
   
  );
}

export default App;
