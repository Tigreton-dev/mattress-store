import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { MenuContext } from '../context/MenuToggle-context';

import homeImage from '../static/images/home.png';
import Mattress from '../static/images/mattress.png';
import BedBase from '../static/images/bedBase.png';

const SideBar = () => {
    const { MenuVisible } = useContext(MenuContext);
    const { toggleMenu } = useContext(MenuContext);

    const toggleMenuHandler = () => toggleMenu();

    let menuStyle = null;
    if (MenuVisible) {
        menuStyle = {
            left: '0px',
        };
    }

    return (
        <div
            className="SideBar-container"
            style={menuStyle}
            data-test="component-sideBar"
        >
            <button
                className="sideBar-button"
                onClick={toggleMenuHandler}
                type="button"
                data-test="sideBar-button"
            >
                X
            </button>
            <div className="sideBar-menu" data-test="sideBar-menu">
                <ListGroup>
                    <ListGroupItem active tag="button" action>
                        MENU
                    </ListGroupItem>

                    <ListGroupItem tag="button" action>
                        <NavLink extact to="/">
                            <div className="sideBar-link">
                                <img
                                    src={homeImage}
                                    className="sideBar-image"
                                    alt=""
                                />
                                <h4>Home</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem tag="button" action>
                        <NavLink extact to="/Mattress">
                            <div className="sideBar-link">
                                <img
                                    src={Mattress}
                                    className="sideBar-image"
                                    alt=""
                                />
                                <h4>Mattress</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem tag="button" action>
                        <NavLink extact to="/BedBases">
                            <div className="sideBar-link">
                                <img
                                    src={BedBase}
                                    className="sideBar-image"
                                    alt=""
                                />
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
