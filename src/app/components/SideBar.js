import React from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/actions/ToggleMenu";

import homeImage from '../static/images/home.png';
import UsewrImage from '../static/images/user.png';
import SettingsImage from '../static/images/settings.png';

const SideBar = () => {
    const MenuVisible = useSelector(state => state.MenuToggle.MenuVisible);
    const dispatch = useDispatch();
    let menuStyle = null;
    if (MenuVisible) {
        menuStyle = {
            left: '0px',
        };
    }
    return (
        <div className="SideBar-container" style={menuStyle}>
            <h1>Sidebar</h1>
            <button className="sideBar-button" onClick={() => dispatch(toggleMenu())} type="button">
                X
            </button>
            <div>


                <NavLink extact to="/">
                    <div className="sideBar-link">
                        <img src={homeImage} className="sideBar-image" alt="" />
                        <p>Home</p>
                    </div>
                </NavLink>

                <NavLink extact to="/Mattress">
                    <div className="sideBar-link">
                        <img src={UsewrImage} className="sideBar-image" alt="" />
                        <p>Mattress</p>
                    </div>
                </NavLink>


                <NavLink extact to="/BedBases">
                    <div className="sideBar-link">
                        <img src={SettingsImage} className="sideBar-image" alt="" />
                        <p>Bed Bases</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default SideBar;