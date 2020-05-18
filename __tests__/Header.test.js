import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/app/components/Header';

const setup = (props = {}) => {
    return shallow(<Header {...props} />);
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`${val}`);
};

it('Should render Product without errors', () => {
    const wrapper = setup();
    const Component = findByTestAttr(wrapper, '.Header-container');
    expect(Component.length).toBe(1);
});

it('Should render a button without errors', () => {
    const wrapper = setup();
    const Component = findByTestAttr(wrapper, '.Header-container');
    expect(Component.find('button').length).toBe(1);
});

it('Should render 3 button line without errors', () => {
    const wrapper = setup();
    const Component = findByTestAttr(wrapper, '.Header-butto-linen');
    expect(Component.length).toBe(3);
});

it('Should render h1 element without errors', () => {
    const wrapper = setup();
    const Component = findByTestAttr(wrapper, '.Header-container');
    expect(Component.find('h1').length).toBe(1);
});
