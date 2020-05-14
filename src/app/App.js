import React from 'react';
import { hot } from 'react-hot-loader/root';

import SideBar from './components/SideBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes/Routes';

const App = () => {
    return (
        <div className="App-container" data-test="component-app">
            <Header />
            <div className="App-body" data-test="App-body">
                <SideBar />
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default hot(App);
