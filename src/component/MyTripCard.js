import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';
import Divider from '@material-ui/core/Divider';
import { Container } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function MyTripCard({item, key}) {
  const classes = useStyles();
  return (
    <Container> 
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.origin}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {item.destination}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {item.start}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider />
    </Container>
  );
}
