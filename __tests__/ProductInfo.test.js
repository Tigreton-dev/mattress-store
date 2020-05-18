import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import ProductInfo from '../src/app/components/ProductInfo';
import ProductCharacteristics from '../src/app/components/ProductCharacteristics';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return shallow(<ProductInfo {...props} />);
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`${val}`);
};

const props = {
    name: 'Mattress Chipre',
    image: 'Chipre.jpg',
    firmness: 7,
    breathability: 5,
    adaptability: 4,
    title: 'The best ally for the growth of your children',
    description: 'The Cyprus mattress stands out for its...',
    price: 44,
};

it('Should render ProductInfo without errors', () => {
    const wrapper = setup({
        productData: props,
    });
    const Component = findByTestAttr(wrapper, '.productInfo-container');
    expect(Component.length).toBe(1);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

it('check prop name on h1 element', () => {
    const wrapper = setup({
        productData: props,
    });
    const Component = findByTestAttr(wrapper, '.product-name');
    expect(Component.text()).toEqual(props.name);
});

it('check prop title on h4 element', () => {
    const wrapper = setup({
        productData: props,
    });
    const Component = findByTestAttr(wrapper, '.product-title');
    expect(Component.text()).toEqual(props.title);
});

it('check prop description on p element', () => {
    const wrapper = setup({
        productData: props,
    });
    const Component = findByTestAttr(wrapper, '.productInfo-description');
    expect(Component.find('p').text()).toEqual(props.description);
});

it('check prop price on p element', () => {
    const wrapper = setup({
        productData: props,
    });
    const Component = findByTestAttr(wrapper, '.productInfo-right-price');
    expect(Component.text()).toEqual(`${props.price} €`);
});

it('Should render an image', () => {
    const wrapper = setup({
        productData: props,
    });
    const Component = findByTestAttr(wrapper, '.productInfo-image');
    expect(Component.find('img').length).toEqual(1);
});

it('Should render child component (ProductCharacteristics) whit props ', () => {
    const wrapper = setup({
        productData: props,
    });
    const Component = findByTestAttr(wrapper, '.productInfo-container');
    expect(Component.find(ProductCharacteristics).length).toBe(1);
    expect(Component.find('#childId').exists()).toBeFalsy();
    expect(Component.find(ProductCharacteristics).props().firmness).toBe(
        props.firmness
    );
    expect(Component.find(ProductCharacteristics).props().breathability).toBe(
        props.breathability
    );
    expect(Component.find(ProductCharacteristics).props().adaptability).toBe(
        props.adaptability
    );
});
