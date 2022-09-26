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
          <Routes>
            <Route
              path="/app"
              element={
                <>
                  <Sidebar />
                  <Chat />
                </>
              }
            />

            <Route path="/" element={<h1>Home screen</h1>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
