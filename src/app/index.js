import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { MenuProvider } from './context/MenuToggle-context';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

function render(Component) {
    ReactDOM.render(
        <MenuProvider>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </MenuProvider>,
        document.getElementById('app')
    );
}

render(App);
