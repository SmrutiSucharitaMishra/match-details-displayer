import "./App.css";
import TeamDetails from "./components/TeamDetails";
import React from "react";
import MatchType from "./components/match-type";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/details";
import Table from "./components/Table";
import DetailsState from "./Contexts/DetailsState";
function App() {
  return (
    <div className="App">
      <DetailsState>
        <Router>
          <Routes>
            <Route path="/" exact element={<Table />} />
            <Route path="/details" exact element={<Details />} />
            <Route path="/teamdetails" exact element={<TeamDetails />} />
            <Route path="/matchdetails" exact element={<MatchType />} />
          </Routes>
        </Router>
      </DetailsState>
    </div>
  );
}

export default App;
