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
import { userSelector } from "./redux/user";
import { useSelector } from "react-redux";
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
  let isLoggedIn = Auth.authenticated() ? true : false

  console.log(rest)

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



  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  


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

        
          {
            user && user.role == "manager" ?
              <PrivateRoute path="/manager-home" >
                <AdminHomePage></AdminHomePage>
              </PrivateRoute>

              : null
          }
          {
           user &&  user.role == "manager" ?
              <PrivateRoute path="/manager">
                <Manager />
              </PrivateRoute>

              : null
          }
          {
            user && user.role == "volenteer" ?
              <PrivateRoute path="/volenteer">
                <Volenteer />
              </PrivateRoute>
              : null
          }
          {
            user && user.role == "volenteer" ?
              <PrivateRoute path="/volenteer-home" >
                <VolenteerHomePage></VolenteerHomePage>
              </PrivateRoute>
              : null
          }



        </Switch>
      </Router>
    </Suspense>
    // </ErrorBoundary>
  );
}
