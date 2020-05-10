import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuToggle-context';

const Header = () => {
    const toggleMenu = useContext(MenuContext).toggleMenu;

    const toggleMenuHandler = () => toggleMenu();

    return (
        <div className="Header-container">
            <button className="Header-button" onClick={toggleMenuHandler} type="button">
                <div className="Header-butto-linen"></div>
                <div className="Header-butto-linen"></div>
                <div className="Header-butto-linen"></div>
            </button>
            <h1>Mattress App</h1>
        </div>
    );
};

export default Header;