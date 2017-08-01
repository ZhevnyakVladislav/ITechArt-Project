import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LogInForm from '../containers/LogInFormContainer';
import SignUpForm from '../containers/SignUpFormContainer';

export default () => (
    <Switch>
        <Route path="/login" component={LogInForm} />
        <Route path="/signup" component={SignUpForm} />
    </Switch>
);
