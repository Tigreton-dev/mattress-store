/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export const MenuContext = React.createContext({
    MenuVisible: false,
    toggleMenu: () => {},
});

export default props => {
    const { children } = props;
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => setIsVisible(!isVisible);

    return (
        <MenuContext.Provider value={{ MenuVisible: isVisible, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
