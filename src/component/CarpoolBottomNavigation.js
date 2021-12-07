import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Cookies from'universal-cookie';

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function CarpoolBottomNavigation({redirect}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if(value == 3){
      var cookie  = new Cookies();
      cookie.remove('user', {path: '/'});
      redirect(true);
    }
  }, [value]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.stickToBottom}
    >
      <BottomNavigationAction label="Search" icon={<SearchIcon />} component={Link} to="/" />
      <BottomNavigationAction label="Create" icon={<AddIcon/>} component={Link} to="/create"/>
      <BottomNavigationAction label="Trips" icon={<DriveEtaIcon />} component={Link} to="/my-trips"/>
      <BottomNavigationAction label="Logout" icon={<ExitToAppIcon />}/>
    </BottomNavigation>

    
  );
}
