import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LogInForm from '../containers/LogInFormContainer';

export default () => (
    <Switch>
        <Route exact path="/" component={LogInForm} />
    </Switch>
);
