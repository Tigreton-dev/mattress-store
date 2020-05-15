import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { BrowserRouter } from 'react-router-dom';
import SideBar from '../src/app/components/SideBar';
import { MenuProvider } from '../src/app/context/MenuToggle-context';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
    return mount(
        <MenuProvider>
            <BrowserRouter>
                <SideBar />
            </BrowserRouter>
        </MenuProvider>
    );
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

describe('SideBar', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const Component = findByTestAttr(wrapper, 'component-sideBar');
        expect(Component.length).toBe(1);
    });

    test('renders SideBar Button without error', () => {
        const wrapper = setup();
        const Component = findByTestAttr(wrapper, 'sideBar-button');
        expect(Component.length).toBe(1);
    });

    test('renders SideBar Menu without error', () => {
        const wrapper = setup();
        const Component = findByTestAttr(wrapper, 'sideBar-menu');
        expect(Component.length).toBe(1);
    });

    test('renders SideBar Home image without error', () => {
        const wrapper = setup();
        const Component = findByTestAttr(wrapper, 'home-image');
        expect(Component.length).toBe(1);
    });

    test('renders SideBar Mattress image without error', () => {
        const wrapper = setup();
        const Component = findByTestAttr(wrapper, 'mattress-image');
        expect(Component.length).toBe(1);
    });

    test('renders SideBar bedBase image without error', () => {
        const wrapper = setup();
        const Component = findByTestAttr(wrapper, 'bedBase-image');
        expect(Component.length).toBe(1);
    });
});
