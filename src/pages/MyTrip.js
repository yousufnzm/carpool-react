import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MyTripContainer from '../component/MyTripContainer';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import Cookies from 'universal-cookie';


const MyTrip = (props) => {
  const [tripArray, setTripArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrips = async () => {
    var cookies = new Cookies();
    axios.get('http://localhost:1337/trips?owner=' + cookies.get('user')).then(response => {
      console.log(response);
      setTripArray([...tripArray, ...response.data]);
    });

    setLoading(false);
  };

  useEffect(() => {
    fetchTrips();
  }, [loading]);

return (
  <React.Fragment>
    <CssBaseline />
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {loading ? <LinearProgress /> : <MyTripContainer tripArray={tripArray} />}
      </Container>
    </React.Fragment>
  </React.Fragment>
  )
};

export default MyTrip;