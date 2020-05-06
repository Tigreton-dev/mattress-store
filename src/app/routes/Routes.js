import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Mattress from '../pages/Mattress';
import Login from '../pages/Login';
import Product from '../pages/ProductPage';

const Routes = () => {
    return (
        <div>
            <div>
                <Switch>
                    <Route path="/Mattress">
                        <Mattress />
                    </Route>
                    <Route path="/Login">
                        <Login />
                    </Route>
                    <Route exact path="/product/:Id">
                        <Product />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};
export default withRouter(Routes);
