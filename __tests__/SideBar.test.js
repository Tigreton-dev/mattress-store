import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import SideBar from '../src/app/components/SideBar';
import { MenuProvider } from '../src/app/context/MenuToggle-context';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = ({ isVisible }) => {
    const MenuVisible = isVisible || false;
    return mount(
        <MenuProvider value={{ MenuVisible, toggleMenu: jest.fn() }}>
            <BrowserRouter>
                <SideBar />
            </BrowserRouter>
        </MenuProvider>
    );
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

describe('Render SideBar elements', () => {
    test('Should renders without error', () => {
        const wrapper = setup({});
        const Component = findByTestAttr(wrapper, 'component-sideBar');
        expect(Component.length).toBe(1);
    });

    test('Should renders SideBar Button without error', () => {
        const wrapper = setup({});
        const Component = findByTestAttr(wrapper, 'sideBar-button');
        expect(Component.length).toBe(1);
    });

    test('Should renders SideBar Menu without error', () => {
        const wrapper = setup({});
        const Component = findByTestAttr(wrapper, 'sideBar-menu');
        expect(Component.length).toBe(1);
    });

    it('Should render no style on main component when useContext value is false', () => {
        const wrapper = setup({ isVisible: false });
        const Component = findByTestAttr(wrapper, 'component-sideBar');
        expect(Component.prop('isVisible')).toBeFalsy();
        expect(Component.prop('style')).toStrictEqual({});
    });

    it('Should render style left: 0px on main component when useContest value is true', () => {
        const wrapper = setup({ isVisible: true });
        const component = findByTestAttr(wrapper, 'component-sideBar');
        expect(component.prop('isVisible')).toBeTruthy();
        expect(component.prop('style')).toHaveProperty('left', '0px');
    });
});

describe('Render images on SideBar', () => {
    test('Should renders SideBar Home image without error', () => {
        const wrapper = setup({});
        const Component = findByTestAttr(wrapper, 'home-image');
        expect(Component.length).toBe(1);
    });

    test('Should renders SideBar Mattress image without error', () => {
        const wrapper = setup({});
        const Component = findByTestAttr(wrapper, 'mattress-image');
        expect(Component.length).toBe(1);
    });

    test('Should renders SideBar bedBase image without error', () => {
        const wrapper = setup({});
        const Component = findByTestAttr(wrapper, 'bedBase-image');
        expect(Component.length).toBe(1);
    });
});
