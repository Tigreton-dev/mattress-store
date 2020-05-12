import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuToggle-context';

const Header = () => {
    const { toggleMenu } = useContext(MenuContext);

    const toggleMenuHandler = () => toggleMenu();

    return (
        <div className="Header-container">
            <button
                className="Header-button"
                onClick={toggleMenuHandler}
                type="button"
            >
                <div className="Header-butto-linen" />
                <div className="Header-butto-linen" />
                <div className="Header-butto-linen" />
            </button>
            <h1>Mattress App</h1>
        </div>
    );
};

export default Header;
