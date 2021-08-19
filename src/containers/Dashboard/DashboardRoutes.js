import React, { lazy, Suspense } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import Loader from "../../components/utility/loader";

const routes = [
 
  
  {
    path: ``,
    component: lazy(() =>
      import("./Pages/")
    ),
    exact: true,
  },
  {
    path: `volenteer/view`,
    component: lazy(() =>
      import("./Pages/Volenteer/View")
    ),
    exact: true,
  },
  {
    path: `senior/view`,
    component: lazy(() =>
      import("./Pages/Senior/View")
    ),
    exact: true,
  },
  
  {
    path: `admin-user`,
    component: lazy(() => import("../../AdminPanel/User/UserPage")),
    exact: true,
  },
 
  
  
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
