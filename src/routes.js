import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoggedOut from './Components/LoggedOut.js';
import LoggedIn from './Components/LoggedIn.js';
import Welcome from './Components/Welcome.js';
import Group from './Components/Group.js'
import Events from './Components/Events.js'
import CreateGroup from './Components/CreateGroup.js'
import ScheduleEvent from './Components/ScheduleEvent.js'

export default (
    <Switch>
        <Route path='/' component={LoggedOut} exact />
        <Route path='/home' component={LoggedIn} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/:group' component={Group} exact/>
        <Route path='/:group/events/:event' component={Events} />
        <Route path='/create' component={CreateGroup} />
        <Route path='/schedule' component={ScheduleEvent} />
    </Switch>
)
