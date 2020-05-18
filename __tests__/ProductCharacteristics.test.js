import React from 'react';
import { shallow } from 'enzyme';
import { Progress } from 'react-sweet-progress';
import ProductCharacteristics from '../src/app/components/ProductCharacteristics';

const setup = (props = {}) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return shallow(<ProductCharacteristics {...props} />);
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`${val}`);
};

const props = {
    firmness: 7,
    breathability: 5,
    adaptability: 4,
};

it('Should render ProductCharacteristics without errors', () => {
    const wrapper = setup({
        productData: props,
    });
    const Component = findByTestAttr(wrapper, '.product-characteristics');
    expect(Component.length).toBe(1);
});

it('Should render child component (ProductCharacteristics) whit props ', () => {
    const wrapper = setup({
        productData: props,
    });
    const Component = findByTestAttr(wrapper, '.product-characteristics');
    expect(Component.find(Progress).length).toBe(3);
});

it('Should render h5 element', () => {
    const wrapper = setup({
        productData: props,
    });
    const Component = findByTestAttr(wrapper, '.product-characteristics');
    expect(Component.find('h5').length).toBe(6);
});
