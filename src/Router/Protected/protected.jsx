import React from "react";

import { Redirect, Route } from "react-router";
import { useAccountContext } from "../../contexts/accountContexts";

const ProtectedRoute = ({ ...routeProps }) => {
  const {account} = useAccountContext()
  if (account === undefined) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to="/" />;
  }
};

export { ProtectedRoute };