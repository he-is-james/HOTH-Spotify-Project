import { react } from '@babel/types';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Feed from './components/Feed';
import Redirect from './components/Redirect'

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/feed" component={Feed} />
                    <Route path="/redirect" component={Redirect} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;