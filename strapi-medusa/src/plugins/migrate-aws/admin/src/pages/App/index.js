// @ts-nocheck
/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnErrorOccurred } from "@strapi/helper-plugin";
import pluginId from "../../pluginId";
import HomePage from "../HomePage";
import AwsMigratePage from "../AwsMigratePage";
import DatabaseMigratePage from "../DatabaseMigratePage";
import CdnMigratePage from "../CdnMigratePage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route
          path={`/plugins/${pluginId}/migrate-s3`}
          component={AwsMigratePage}
          exact
        />
        <Route
          path={`/plugins/${pluginId}/migrate-database`}
          component={DatabaseMigratePage}
          exact
        />
        <Route
          path={`/plugins/${pluginId}/migrate-cdn`}
          component={CdnMigratePage}
          exact
        />
        <Route component={AnErrorOccurred} />
      </Switch>
    </div>
  );
};

export default App;
