import React, {Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PLAY, START } from "./routes";
import { Play, Welcome } from "pages";
import {Loader} from "components"

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
        <Route exact path={START} component={Welcome} />
        <Route path={PLAY} component={Play} />
      </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
