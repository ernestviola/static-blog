import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import Blog from './Blog';
import NotFound from './NotFound';

export default class BlogRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/blog" exact component={Blog} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        );
    }


}
