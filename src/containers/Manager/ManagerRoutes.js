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
    path: `volenteer/view`,
    component: lazy(() =>
      import("./Pages/Volenteer/View")
    ),
    exact: true,
  },
  {
    path: `volenteer/edit`,
    component: lazy(() =>
      import("./Pages/Volenteer/Edit")
    ),
    exact: true,
  },
  {
    path: `volenteer/add`,
    component: lazy(() =>
      import("./Pages/Volenteer/Add")
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
    path: `senior/edit`,
    component: lazy(() =>
      import("./Pages/Senior/Edit")
    ),
    exact: true,
  },
  {
    path: `senior/add`,
    component: lazy(() =>
      import("./Pages/Senior/Add")
    ),
    exact: true,
  },
  {
    path: `groups/view`,
    component: lazy(() =>
      import("./Pages/Groups/View")
    ),
    exact: true,
  },

  {
    path: `groups/page`,
    component: lazy(() =>
      import("./Pages/Groups/GroupPage")
    ),
    exact: true,
  },
  {
    path: `groups/add`,
    component: lazy(() =>
      import("./Pages/Groups/Add")
    ),
    exact: true,
  },
  {
    path: `distribution/view`,
    component: lazy(() =>
      import("./Pages/Distribution/View")
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
