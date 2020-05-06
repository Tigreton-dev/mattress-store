import React from 'react';
import { hot } from 'react-hot-loader/root';

import Header from './components/Header';

const App = () => {
    return (
        <div className="App-container">
            <Header />
        </div>
    );
};

export default hot(App);
