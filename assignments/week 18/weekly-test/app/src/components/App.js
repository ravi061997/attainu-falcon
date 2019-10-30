import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Mails from "./Mails";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="mt-3 mb-4">
          <img
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/New_Logo_Gmail.svg/634px-New_Logo_Gmail.svg.png"
            alt=""
          />
        </div>
        <div className="row">
          <aside className="col-2">
            <Navbar />
          </aside>
          <section className="col-10">
            <Switch>
              <Route exact path="/" component={Mails} />
              <Route path="/Sent" component={Mails} />
              <Route path="/drafts" component={Mails} />
              <Route path="/trash" component={Mails} />
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
