import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from '../src/app/App';
import Header from '../src/app/components/Header';
import SideBar from '../src/app/components/SideBar';
import Routes from '../src/app/routes/Routes';
import Footer from '../src/app/components/Footer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = shallow(<App {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

test('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
});

test('renders body without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'App-body');
    expect(appComponent.length).toBe(1);
});

test('renders the inner Header', () => {
    const wrapper = setup();
    expect(wrapper.find(Header).length).toEqual(1);
});

test('renders the inner SideBar', () => {
    const wrapper = setup();
    expect(wrapper.find(SideBar).length).toEqual(1);
});

test('renders the inner Routes', () => {
    const wrapper = setup();
    expect(wrapper.find(Routes).length).toEqual(1);
});

test('renders the inner Footer', () => {
    const wrapper = setup();
    expect(wrapper.find(Footer).length).toEqual(1);
});
