import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const token = localStorage.getItem("token");
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/auth/login" />;
        }
      }}
    />
  );
};
export default PrivateRoute;
