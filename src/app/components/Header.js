import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/actions/ToggleMenu";

const Header = () => {
    const MenuVisible = useSelector(state => state.MenuToggle.MenuVisible);
    const dispatch = useDispatch();
    return (
        <div className="Header-container">
            <button className="Header-button" onClick={() => dispatch(toggleMenu())} type="button">
                X
            </button>
            <h1>Mattress App</h1>
        </div>
    );
};

export default Header;