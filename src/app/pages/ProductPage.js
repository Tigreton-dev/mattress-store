import React, { useReducer, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import { withRouter } from "react-router-dom";

import useHttp from '../hooks/http';
import ProductInfo from '../components/ProductInfo';

const productsReducer = (currentProducts, action) => {
    switch (action.type) {
        case 'SET':
            return action.products;
        default:
            throw new Error('new errorrr!');
    }
};

const ProductPage = props => {
    const productId = props.match.params.Id;
    const [userProducts, dispatch] = useReducer(productsReducer, null);
    const {
        isLoading,
        error,
        responseData,
        sendRequest,
        values,
        reqIdentifer,
    } = useHttp();

    useEffect(() => {
        sendRequest(
            `http://localhost:3000/api/products/${productId}`,
            'GET',
            null,
            null,
            'GET_ONE_PRODUCT'
        );
    }, []);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'SET', products: responseData });
        }, 2000)

    }, [responseData, values, reqIdentifer, isLoading, error]);

    let product = (<Spinner color="primary" />);
    if (userProducts !== null) product = (<ProductInfo productData={userProducts} />);
    return (
        <div>
            {product}
        </div>
    );
};

export default withRouter(ProductPage);

