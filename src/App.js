import logo from './logo.svg';
import CarpoolBottomNavigation from './component/CarpoolBottomNavigation';
import { BrowserRouter, Switch, Route , Redirect} from "react-router-dom";
import CreateTrip from './pages/CreateTrip';
import SearchTrip from './pages/SearchTrip';
import MyTrip from './pages/MyTrip';
import PrivateRoute from './component/PrivateRoute';

import Login from './pages/Login';
import './App.css';
import {useState} from 'react';

function App() {

  const [redirect, setRedirect] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/create" component={CreateTrip} />
          <PrivateRoute path="/my-trips" component={MyTrip} />
          <PrivateRoute path="/search" component={SearchTrip} />
          <Route path="/" component={Login} />
        </Switch>
        {redirect ? <Redirect to="/" /> : null}
        <CarpoolBottomNavigation redirect={setRedirect}></CarpoolBottomNavigation>
      </BrowserRouter>
    </div>
  );
}

export default App;
