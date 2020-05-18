import React from 'react';
import { shallow } from 'enzyme';
import Product from '../src/app/components/Product';
import ProductCharacteristics from '../src/app/components/ProductCharacteristics';

const setup = (props = {}) => {
    return shallow(<Product {...props} />);
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`${val}`);
};

const props = {
    id: '123',
    name: 'Mattress Chipre',
    image: 'Chipre.jpg',
    firmness: 7,
    breathability: 5,
    adaptability: 4,
    title: 'The best ally for the growth of your children',
    description: 'The Cyprus mattress stands out for its...',
    price: 44,
};

it('Should render Product without errors', () => {
    const wrapper = setup({ ...props });
    const Component = findByTestAttr(wrapper, '.product-container');
    expect(Component.length).toBe(1);
});

it('Should render h1 whit the name prop', () => {
    const wrapper = setup({ ...props });
    const Component = findByTestAttr(wrapper, '.product-name');
    expect(Component.length).toBe(1);
    expect(Component.text()).toBe('Mattress Chipre');
});

it('Should render img element', () => {
    const wrapper = setup({ ...props });
    const Component = findByTestAttr(wrapper, '.product-image');
    expect(Component.find('img').length).toBe(1);
});

it('Should render a h4 element whit a title prop', () => {
    const wrapper = setup({ ...props });
    const Component = findByTestAttr(wrapper, '.product-title');
    expect(Component.text()).toBe(props.title);
});

it('Should render child component (ProductCharacteristics) whit props ', () => {
    const wrapper = setup({ ...props });
    const Component = findByTestAttr(wrapper, '.product-description');
    expect(Component.find(ProductCharacteristics).length).toBe(1);
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

it('Should render a p element whit a price prop', () => {
    const wrapper = setup({ ...props });
    const Component = findByTestAttr(wrapper, '.product-price-value');
    expect(Component.text()).toBe(`${props.price} €`);
});

it('Should render a link element whit a id prop', () => {
    const wrapper = setup({ ...props });
    const Component = findByTestAttr(wrapper, '.product-price-link');
    expect(Component.prop('to')).toBe(`/product/${props.id}`);
});
