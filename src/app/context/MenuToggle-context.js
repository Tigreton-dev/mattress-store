/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export const MenuContext = React.createContext({
    MenuVisible: false,
    toggleMenu: () => {},
});

export const MenuProvider = props => {
    const { children } = props;
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => setIsVisible(!isVisible);

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <MenuContext.Provider
            value={{ MenuVisible: isVisible, toggleMenu }}
            {...props}
        >
            {children}
        </MenuContext.Provider>
    );
};
