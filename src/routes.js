import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoggedOut from './Components/LoggedOut';
import LoggedIn from './Components/LoggedIn';
import Group from './Components/Group'

export default (
    <Switch>
        <Route to='/' component={LoggedOut} exact />
        <Route to='/home' component={LoggedIn} />
        <Route to='/:group' component={Group} />
    </Switch>
)
