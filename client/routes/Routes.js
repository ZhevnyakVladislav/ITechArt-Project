import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LogInForm from '../containers/LogInFormContainer';
import SignUpForm from '../containers/SignUpFormContainer';
import UserPage from '../containers/UserPageContainer';

export default () => (
    <Switch>
        <Route path="/login" component={LogInForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/account" component={UserPage} />
    </Switch>
);
