import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
// import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/room/:roomId" element={<Chat />} />

            <Route path="/" />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
