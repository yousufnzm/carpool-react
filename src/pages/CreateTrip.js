import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TripForm from '../component/TripForm';
import Cookies from 'universal-cookie';

export default function CreateTrip() {


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <TripForm />
      </Container>
    </React.Fragment>
  );
}
