import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Mails from "./Mails";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="mt-3 mb-4">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">Webmail </span>
        </nav>
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
