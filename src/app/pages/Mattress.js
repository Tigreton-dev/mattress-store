import React from 'react';
import useHttp from '../hooks/http';

const productsReducer = (currentProducts, action) => {
    switch (action.type) {
        case 'SET':
            return action.products;
        default:
            throw new Error('new errorrr!');
    }
};

const Colchones = () => {
    const [userProducts, dispatch] = useReducer(productsReducer, []);
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
            'http://localhost:3000/api/products',
            'GET',
            null,
            null,
            'GET_ALL_PRODUCTS'
        );
    }, []);

    useEffect(() => {
        const loadedProducts = [];
        for (const key in responseData) {
            loadedProducts.push({
                id: responseData[key]._id,
                name: responseData[key].name,
                title: responseData[key].title,
                description: responseData[key].description,
                firmness: responseData[key].firmness,
                breathability: responseData[key].breathability,
                adaptability: responseData[key].adaptability,
                price: responseData[key].price,
                image: responseData[key].image,
                featuredProduct: responseData[key].featuredProduct,
                assessment: responseData[key].assessment,
            });
            dispatch({ type: 'SET', products: loadedProducts });
        }
    }, [responseData, values, reqIdentifer, isLoading, error]);



    return (
        <div className="Mattress-container">
            <h1>Mattress</h1>
        </div>
    );
};

export default Colchones;