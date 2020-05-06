import React from 'react';
import { hot } from 'react-hot-loader/root';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App-container">
            <Header />
            <Footer />
        </div>
    );
};

export default hot(App);
