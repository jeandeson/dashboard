import React from "react"
import { Switch } from "react-router"
import Login from "../views/Login/Login"
import Home from "../views/Home/Home"
import Comments from "../views/Comments/Comments"
import { PrivateRoute } from "./Private/private";
import { ProtectedRoute } from "./Protected/protected";
import CustomerDetails from "../components/customerdetails/CustomerDetails"

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/login" exact component={Login} /> 
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/comments" exact component={Comments} />
      <PrivateRoute path="/customerDetails/:id" exact component={CustomerDetails} />
    </Switch>
  )
}
export { Routes };