import React from 'react';
import { Route, Switch } from 'react-router-dom'

//Routes
import Home from './containers/Home';
import BlogRoutes from './containers/BlogRoutes';
import Blog from './containers/Blog';
import Portfolio from './containers/Portfolio'
import NotFound from './containers/NotFound';


export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route component={NotFound} />
    </Switch>