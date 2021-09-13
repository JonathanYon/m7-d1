import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import Jobs from "./component/Jobs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Company from "./component/Company";
import { useState } from "react";

function App() {
  const [company, setCompany] = useState(null);
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Router>
        <Route
          path="/"
          exact
          render={(routeProps) => (
            <Home search={search} setSearch={setSearch} {...routeProps} />
          )}
        />
        {/* <Route component={Jobs} path="/" exact /> */}
        <Route
          path="/"
          exact
          render={(routeProps) => (
            <Jobs setCompany={setCompany} {...routeProps} search={search} />
          )}
        />
        <Route
          path="/company"
          exact
          render={(routeProps) => <Company company={company} {...routeProps} />}
        />
        {/* <Route component={Company} path="/company" exact  /> */}
      </Router>
    </div>
  );
}

export default App;
