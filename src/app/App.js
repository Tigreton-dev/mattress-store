import React from 'react';
import { hot } from 'react-hot-loader/root';

import SideBar from './components/SideBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes/Routes';

const App = () => {
    return (
        <div className="App-container">
            <Header />
            <div className="App-body">
                <SideBar />
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default hot(App);
