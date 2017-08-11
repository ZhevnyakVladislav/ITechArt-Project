import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LogInForm from '../containers/LogInFormContainer';
import SignUpForm from '../containers/SignUpFormContainer';
import Adverts from '../containers/AdvertsContainer';
import UserPage from '../containers/UserPageContainer';
import AddAdvertForm from '../containers/AddAdvertFormContainer';
import NoMatchesContainer from '../containers/NoMatchesContainer';

export default () => (
    <Switch>
        <Route path="/login" component={LogInForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/account/:id" component={UserPage} />
        <Route path="/alladverts" component={Adverts} />
        <Route path="/newadvert" component={AddAdvertForm} />
        <Route component={NoMatchesContainer} />
    </Switch>
);
