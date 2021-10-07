import React from "react";
import { Suspense } from "react";
import { Route, Switch } from "react-router";

import routes from "../routes/Routes";
const FrontendLayout = () => {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Switch>
          {Array.isArray(routes) &&
            routes.map((route, i) => {
              return (
                <Route
                  key={route.title + i}
                  path={route.path}
                  exact={route.path === "/" ? true : false}
                >
                  {route.component}
                </Route>
              );
            })}
        </Switch>
      </Suspense>
    </>
  );
};

export default FrontendLayout;
