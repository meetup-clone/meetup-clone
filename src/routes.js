import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoggedOut from './Components/LoggedOut.js';
import LoggedIn from './Components/LoggedIn.js';
import Group from './Components/Group.js'
import Events from './Components/Events.js'
import Create from './Components/Create.js'
import Schedule from './Components/Schedule.js'

export default (
    <Switch>
        <Route path='/' component={LoggedOut} exact />
        <Route path='/home' component={LoggedIn} />
        <Route path='/create' component={Create} />
        <Route path='/schedule/:id' component={Schedule} />
        <Route path='/:group' component={Group} exact />
        <Route path='/:group/events/:event' component={Events} />
    </Switch>
)
