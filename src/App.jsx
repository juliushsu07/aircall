import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import CallList from "./components/CallList.jsx";
import axios from "axios";

const App = () => {
  const [calls, setCalls] = useState();

  useEffect(() => {
    axios
      .get(
        "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities"
      )
      .then((res) => {
        const calls = [...res.data];
        setCalls(calls);
      });
  }, []);

  return (
    <div className="container">
      <Router>
        <Header />
        <div className="container-view">
          <Routes>
            <Route path="/" element={<CallList calls={calls} />} />
            <Route path="/allcalls" element={<CallList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
