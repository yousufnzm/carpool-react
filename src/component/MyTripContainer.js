import React from "react";
import Grid from '@material-ui/core/Grid';
import MyTripCard from "./MyTripCard";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export default function MyTripContainer({tripArray}){
  const classes = useStyles();

  return (
    <div>
      <Grid 
        container
        alignItems="center"
        justify="center"
        spacing={2}>
        {tripArray.map((tripItem) => (
              <Grid item>
                <MyTripCard item={tripItem} key={tripItem.id} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};
