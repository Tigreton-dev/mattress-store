import React from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/actions/ToggleMenu";

import homeImage from '../static/images/home.png';
import Mattress from '../static/images/mattress.png';
import SettingsImage from '../static/images/settings.png';
import BedBase from '../static/images/bedBase.png';

import { ListGroup, ListGroupItem } from 'reactstrap';

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
            <button className="sideBar-button" onClick={() => dispatch(toggleMenu())} type="button">
                X
            </button>
            <div className="sideBar-menu">
                <ListGroup>
                    <ListGroupItem active tag="button" action>
                        MENU
                    </ListGroupItem>

                    <ListGroupItem tag="button" action>
                        <NavLink extact to="/">
                            <div className="sideBar-link">
                                <img src={homeImage} className="sideBar-image" alt="" />
                                <h4>Home</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem tag="button" action>
                        <NavLink extact to="/Mattress">
                            <div className="sideBar-link">
                                <img src={Mattress} className="sideBar-image" alt="" />
                                <h4>Mattress</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem tag="button" action>
                        <NavLink extact to="/BedBases">
                            <div className="sideBar-link">
                                <img src={BedBase} className="sideBar-image" alt="" />
                                <h4>Bed Bases</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>



                </ListGroup>
            </div>
        </div>
    );
};

export default SideBar;