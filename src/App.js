import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
// import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />

              <Route path="/" />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
