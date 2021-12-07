import React , { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import * as moment from 'moment';
import axios from 'axios';
import Cookies from 'universal-cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function TripForm() {
    const classes = useStyles();

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [start, setStart] = useState('');

    const createTrip = async () => {
        var startTime = start + ':00.000Z';
        console.log(startTime);
        var today = new Date();
        var created = moment(today).format('YYYY-MM-DDTHH:mm:ss');
        created = created + ".000Z";
        var cookies = new Cookies();
        var owner = cookies.get('user');
        axios.post('http://localhost:1337/trips', {origin: origin, destination: destination, created: created, start: start, owner: owner}).then(response => {
          console.log(response);
        });
      };

    return (
        <div>
            <Paper className={classes.root}>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    required
                    id="outlined-required"
                    label="Origin"
                    defaultValue=""
                    variant="outlined"
                    onInput={ e=>setOrigin(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Destination"
                    defaultValue=""
                    variant="outlined"
                    onInput={ e=>setDestination(e.target.value)}
                />
                <TextField
                required
                id="datetime-local"
                label="Trip Start"
                type="datetime-local"
                className={classes.textField}
                onInput={ e=>setStart(e.target.value)}
                InputLabelProps={{
                shrink: true,
                }}
                />
                <Button variant="contained" color="primary" onClick={ e => createTrip()}>
                    Create
                </Button>
            </form>
            </Paper>
        </div>
    );
}
