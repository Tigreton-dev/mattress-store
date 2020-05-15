import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import {
    MenuProvider,
    MenuContext,
} from '../src/app/context/MenuToggle-context';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const TestComponent = () => {
    const { MenuVisible, toggleMenu } = React.useContext(MenuContext);

    return (
        <div>
            <div data-test="value">{MenuVisible.toString()}</div>
            <button onClick={toggleMenu} type="button" data-test="button">
                toggleMenu
            </button>
        </div>
    );
};

const setup = () => {
    return mount(
        <MenuProvider>
            <TestComponent />
        </MenuProvider>
    );
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

test('test useContext', () => {
    const wrapper = setup();
    const Component = findByTestAttr(wrapper, 'value');
    const button = findByTestAttr(wrapper, 'button');
    expect(Component.text()).toEqual('false');
    button.simulate('click');
    expect(Component.text()).toEqual('true');
});
