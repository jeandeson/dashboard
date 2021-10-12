import React from "react";

import { Redirect, Route } from "react-router";
import { useAccountContext } from "../../contexts/accountContexts";

const PrivateRoute = ({ ...routeProps }) => {
  const {account} = useAccountContext()
  if (account !== undefined) {
    return <Route  {...routeProps}/>;
  } else {
    return <Redirect to="/login" />;
  }
};

export { PrivateRoute };