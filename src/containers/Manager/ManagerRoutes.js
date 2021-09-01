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
    path: `volunteer/view`,
    component: lazy(() =>
      import("./Pages/Volunteer/View")
    ),
    exact: true,
  },
  {
    path: `volunteer/edit`,
    component: lazy(() =>
      import("./Pages/Volunteer/Edit")
    ),
    exact: true,
  },
  {
    path: `volunteer/add`,
    component: lazy(() =>
      import("./Pages/Volunteer/Add")
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
    path: `groups/todo`,
    component: lazy(() =>
      import("./Pages/Groups/Todo")
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
    path: `distribution/edit`,
    component: lazy(() =>
      import("./Pages/Distribution/Edit")
    ),
    exact: true, 
  },
  {
    path: `distribution/add`,
    component: lazy(() =>
      import("./Pages/Distribution/Add")
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
  {
    path: `stats`,
    component: lazy(() =>
      import("./Pages/Manager/Stats")
    ),
    exact: true, 
  },
  {
    path: `blog`,
    component: lazy(() =>
      import("./Pages/Manager/Notebook")
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
