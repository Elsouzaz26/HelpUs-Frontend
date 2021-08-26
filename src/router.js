import React, { lazy, Suspense } from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { PUBLIC_ROUTE, PRIVATE_ROUTE } from "./route.constants";
import Loader from "./components/utility/loader";
import { Auth } from "./service/Auth";
import AdminHomePage from "./containers/Pages/Manager/HomePage";
import VolenteerHomePage from "./containers/Pages/Volenteer/HomePage";

// const ProductionSettings = lazy(() => import("./containers/Production/ProductionSettings/ProductionSettings"));

const Manager = lazy(() => import("./containers/Manager/Manager"));
const Volenteer = lazy(() => import("./containers/Volenteer/Volenteer"));


const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import("./containers/Pages/Login/LoginPage")),
  },
  {
    path: PUBLIC_ROUTE.SIGN_IN,
    component: lazy(() => import("./containers/Pages/Login/LoginPage")),
  },
  
];

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = Auth.authenticated() ? true : false;
  console.log(children, { ...rest });
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default function Routes() {
  return (
    // <ErrorBoundary>
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}

          <PrivateRoute path="/manager">
            <Manager />
          </PrivateRoute>

          <PrivateRoute path="/volenteer">
            <Volenteer />
          </PrivateRoute>

          <PrivateRoute path="/manager-home" >
            <AdminHomePage></AdminHomePage>
          </PrivateRoute>

          <PrivateRoute path="/volenteer-home" >
            <VolenteerHomePage></VolenteerHomePage>
          </PrivateRoute>
          
        </Switch>
      </Router>
    </Suspense>
    // </ErrorBoundary>
  );
}
