import React, { lazy, Suspense } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import Loader from "../../components/utility/loader";

const routes = [
 
  {
    path: ``,
    component: lazy(() =>
      import("./Pages")
    ),
    exact: true,
  },
  {
    path: `assignedgroups/view`,
    component: lazy(() =>
      import("./Pages/AssignedGroups/View")
    ),
    exact: true,
  },
  {
    path: `chat`,
    component: lazy(() =>
      import("./Pages/Chat/Chat")
    ),
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
