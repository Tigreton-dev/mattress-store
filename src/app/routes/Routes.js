import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Mattress from '../pages/Mattress';

const Routes = () => {
    return (
        <div>
            <div>
                <Switch>
                    <Route path="/Mattress">
                        <Mattress />
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
