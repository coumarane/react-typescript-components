import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./pages/home";
import Contact from "./components/contact/contact";
import Datatable from "./pages/datatable";


export const AppRoutes: React.FC = () => (
  <Switch>
    <Redirect exact={true} from={`/`} to={"/home"} />
    <Route exact={true} path={"/home"} component={Home} />
    <Route exact={true} path={"/datatable"} component={Datatable} />
    <Route exact={true} path={"/contact"} component={Contact} />
  </Switch>
);
