import React from "react"
import { Switch } from "react-router"
import Login from "../views/Login/Login"
import Home from "../views/Home/Home"
import Comments from "../views/Comments/Comments"
import { PrivateRoute } from "./Private/private";
import { ProtectedRoute } from "./Protected/protected";
import CustomerDetails from "../components/customerdetails/CustomerDetails"
import Customers from "../components/customers/Customers"
import Graph from "../views/Graph/Graph"
import Navigation from "../components/shared/navigation/Navigation"

const Routes = () => {
  return (
    <>
    <Navigation/>
      <Switch>
        <ProtectedRoute path="/login" exact component={Login} /> 
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/comments" exact component={Comments} />
        <PrivateRoute path="/customerDetails/:id" exact component={CustomerDetails} />
        <PrivateRoute path="/graph" exact component={Graph} />
        <PrivateRoute path="/customers" exact component={Customers} />
      </Switch>
    </>
  )
}
export { Routes };