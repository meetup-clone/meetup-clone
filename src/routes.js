import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Group from './Components/Group'

export default (
    <Switch>
        <Route to='/' component={Home} exact />
        <Route to='/:group' component={Group} />
    </Switch>
)