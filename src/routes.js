import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'

export default (
    <Switch>
        <Route to='/' component={Home} exact />
    </Switch>
)