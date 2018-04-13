import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoggedOut from './Components/LoggedOut.js';
import LoggedIn from './Components/LoggedIn.js';
import Welcome from './Components/Welcome.js';
import Group from './Components/Group.js'
import Events from './Components/Events.js'
import Create from './Components/Create.js'
import Schedule from './Components/ScheduleEvent.js'

export default (
    <Switch>
        <Route path='/' component={LoggedOut} exact />
        <Route path='/home' component={LoggedIn} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/create' component={Create} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/:group' component={Group} exact/>
        <Route path='/:group/events/:event' component={Events} />
    </Switch>
)
