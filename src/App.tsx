import * as React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/styles/dashboard.css";

import MainLayout from "./pages/layout/MainLayout";

const history = createBrowserHistory();

class App extends React.Component<{}, {}> {

  render() {
    return (
      <>
        <BrowserRouter>
          <Router history={history}>
            <MainLayout />
          </Router>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
