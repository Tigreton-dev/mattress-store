import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Mattress from '../pages/Mattress';
import BedBases from '../pages/BedBases';
import Product from '../pages/ProductPage';

const Routes = () => {
    return (
        <div>
            <div>
                <Switch>
                    <Route path="/Mattress">
                        <Mattress />
                    </Route>
                    <Route path="/BedBases">
                        <BedBases />
                    </Route>
                    <Route path="/product/:Id">
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
