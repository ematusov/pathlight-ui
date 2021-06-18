import React from "react";
import { Switch, Route } from "react-router-dom";
import { HOMEPAGE, AUTH_PAGE1 } from "navigation/constants";
import Homepage from 'pages/Homepage/Homepage';

export const RouterConfig = () => {
    return (
        <div>
          <Switch>
            {/* List all public routes here */}
            <Route exact path={HOMEPAGE} component={Homepage} />
            
            {/* Storing as a reminder that this will take us to the login screen */}
            {/* <Route path="/login">
              <Login />
            </Route> */}
    
            {/* Eventually will move to requiring login behind certain screens - this is how we implement that */}
            {/* <PrivateRoute path={AUTH_PAGE1}>
              <AuthorizedPage1 />
            </PrivateRoute> */}
            {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
            {/* <PrivateRoute path={DASHBOARD}>
              <Dashboard />
            </PrivateRoute> */}
    
            {/* List a generic 404-Not Found route here */}
            {/* <Route path="*">
              <NotFound />
            </Route> */}
          </Switch>
        </div>
      );
};

export default RouterConfig;