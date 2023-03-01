import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Bookingout from './Bookingout';
import Ticket from './Ticket';
import 'animate.css';

export const UserContext = React.createContext()

function App() {
  return (
   
    <div className="App">
      <UserContext.Provider value="pavan">
      <Header/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/booking" element={<Bookingout />}/>
      <Route path="/ticket" element={<Ticket />}/>
      </Routes>
      </UserContext.Provider>
    </div>
  
  );
}

export default App;
