import React from "react";
import Grid from '@material-ui/core/Grid';
import TripCard from "./TripCard";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export default function TripContainer({tripArray, id}){
  const classes = useStyles();

  return (
    <div>
      <Grid 
        container
        alignItems="center"
        justify="center"
        spacing={2}>
        {tripArray.map((tripItem) => (
              tripItem.owner.id == id ? null :
              <Grid item>
                <TripCard item={tripItem} key={tripItem.id} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};
