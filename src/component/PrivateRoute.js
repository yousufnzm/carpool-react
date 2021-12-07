import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Cookies from 'universal-cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const isLoggedIn = () => {
        var cookies = new Cookies();
        return cookies.get("user") != null;
      };

    const loggedIn = isLoggedIn()
  
    return (
      <Route
        {...rest}
        render={props =>
            loggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
        }
      />
    )
  }
  
  export default PrivateRoute