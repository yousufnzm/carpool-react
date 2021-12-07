import React , { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Redirect } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function LoginForm() {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const login = async () => {
        axios.post('http://localhost:1337/auth/local', {
            identifier: email,
            password: password,
        }).then(response => {
        // Handle success.
            console.log('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);
            const cookies = new Cookies();
            cookies.set("user", response.data.user.id, { path : '/'});
            setRedirect(true);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
      };

    const register = async () => {
        axios.post('http://localhost:1337/auth/local/register', {
          username: email,
          email: email,
          password: password,
        })
        .then(response => {
          console.log('Well done!');
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
          const cookies = new Cookies();
          cookies.set("user", response.data.user.id, { path : '/'});
          setRedirect(true);
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response);
        });
    };

    return (
        redirect ? <Redirect to='/search'/> : 
            <div>
                <Paper className={classes.root}>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        defaultValue=""
                        variant="outlined"
                        onInput={ e=>setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        type="password"
                        defaultValue=""
                        variant="outlined"
                        onInput={ e=>setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={ e => login()}>
                        Login
                    </Button>
                    <Button variant="contained" color="primary" onClick={ e => register()}>
                        Register
                    </Button>
                </form>
                </Paper>
            </div>
    );
}
