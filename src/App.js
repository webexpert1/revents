import React, { Fragment} from 'react';
import './App.css';
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import NavBar from './features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';

import { Route } from 'react-router-dom';
import HomePage from './features/event/home/Home';
import EventDetailedPage from './features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from './features/event/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from './features/event/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from './features/event/user/Settings/SettingsDashboard';
import EventForm from './features/event/EventForm/EventForm';

function App() {
  return (
    <Fragment>
       <Route exact path='/' component={HomePage} />
       <Route path='/(.+)'
              render={() => (
                <Fragment>
                <NavBar />
                  <Container className="main">
                   
                    <Route path="/events" component={EventDashboard} />
                    <Route path="/events/:id" component={EventDetailedPage} />
                    <Route path="/people" component={PeopleDashboard} />
                    <Route path="/profile/:id" component={UserDetailedPage} />
                    <Route path="/settings" component={SettingsDashboard} />
                    <Route path="/createEvent" component={EventForm} />
                  </Container>
              </Fragment>
            )}
       />
    </Fragment>
       
  );
}

export default App;
