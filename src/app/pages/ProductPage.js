import React, { useReducer, useEffect } from 'react';
import useHttp from '../hooks/http';
import { withRouter } from "react-router-dom";

const productsReducer = (currentProducts, action) => {
    switch (action.type) {
        case 'SET':
            return action.products;
        default:
            throw new Error('new errorrr!');
    }
};


const ProductPage = props => {
    const { match } = props;
    const productId = match.params.Id;
    const [userProducts, dispatch] = useReducer(productsReducer, null);
    const {
        isLoading,
        error,
        responseData,
        sendRequest,
        values,
        reqIdentifer,
        clear,
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
        dispatch({ type: 'SET', products: responseData });
    }, [responseData, values, reqIdentifer, isLoading, error]);

    let values2 = null;
    if (userProducts !== null)
        values2 = (
            <div>
                <p>{userProducts.assessment}</p>
                <p>{userProducts.breathability}</p>
                <p>{userProducts.description}</p>
                <p>{userProducts.featuredProduct}</p>
                <p>{userProducts.firmness}</p>
                <p>{userProducts.image}</p>
                <p>{userProducts.name}</p>
                <p>{userProducts.price}</p>
                <p>{userProducts.title}</p>

            </div>
        )
    return (
        <div className="productPage-container">
            <h1>Procut page</h1>
            {values2}
        </div>
    );
};

export default withRouter(ProductPage);

/*
<p>{userProducts.adaptability}</p>
            <p>{userProducts.assessment}</p>
            <p>{userProducts.breathability}</p>
            <p>{userProducts.description}</p>
            <p>{userProducts.featuredProduct}</p>
            <p>{userProducts.firmness}</p>
            <p>{userProducts.image}</p>
            <p>{userProducts.name}</p>
            <p>{userProducts.price}</p>
            <p>{userProducts.title}</p>
*/