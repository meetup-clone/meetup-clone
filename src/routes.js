import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoggedOut from './Components/LoggedOut.js';
import LoggedIn from './Components/LoggedIn.js';
import Group from './Components/Group'
import Event from './Components/Event'

export default (
    <Switch>
        <Route path='/' component={LoggedOut} exact />
        <Route path='/home' component={LoggedIn} />
        <Route path='/:group' component={Group} />
        <Route path='/:group/events/:event' component={Event} />
    </Switch>
)
