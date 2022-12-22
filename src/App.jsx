import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import MissedCalls from "./components/MissedCalls.jsx";
import AllCalls from "./components/UnArchivedCalls.jsx";
import UnArchivedCalls from "./components/ArchivedCalls.jsx";
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
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <div className="container">
      <Router>
        <Header />
        <div className="container-view">
          <Routes>
          <Route path="/" element={<MissedCalls calls={calls} setCalls={setCalls}/>} />
            <Route path="/allcalls" element={<AllCalls calls={calls} setCalls={setCalls}/>} />
            <Route path="/archived" element={<UnArchivedCalls calls={calls} setCalls={setCalls}/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
