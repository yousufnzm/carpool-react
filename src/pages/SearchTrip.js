import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TripContainer from '../component/TripContainer';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import Cookies from 'universal-cookie';

const SearchTrip = (props) => {

  const [tripArray, setTripArray] = useState([]);
  const [loading, setLoading] = useState(true);

  var cookie = new Cookies();
  
  const fetchTrips = async () => {
    axios.get('http://localhost:1337/trips').then(response => {
      console.log(response.data);
      setTripArray(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchTrips();
  }, [loading]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {loading ? <LinearProgress /> : <TripContainer tripArray={tripArray} id={cookie.get('user')} />}
      </Container>
    </React.Fragment>
  )
};

export default SearchTrip;