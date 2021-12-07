import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LoginForm from '../component/LoginForm';
import Cookies from 'universal-cookie';
import { Redirect, Route } from 'react-router-dom'
export default function Login({redirect}) {

    const isLoggedIn = () => {
        var cookies = new Cookies();
        return cookies.get("user") != null;
      };

    const loggedIn = isLoggedIn()
  
    return (
      <Route
        render={props =>
            !loggedIn ? (
                <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                  <LoginForm/>
                </Container>
              </React.Fragment>
          ) : (
            <Redirect to={{ pathname: '/search', state: { from: props.location } }} />
          )
        }
      />
    )
}
