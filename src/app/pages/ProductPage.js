import React, { useReducer, useEffect } from 'react';
import useHttp from '../hooks/http';
import { withRouter } from "react-router-dom";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import { Spinner } from 'reactstrap';

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

    let values2 = (
        <Spinner color="primary" />);
    if (userProducts !== null)
        values2 = (
            <div className="productPage-container">
                <h1 className="product-name">{userProducts.name}</h1>
                <div className="product-stars">	&#9733; 	&#9733; 	&#9733; 	&#9733; 	&#9733;</div>

                <div className="productPage-body">

                    <div className="productPage-left">
                        <div className="productPage-image">
                            <img
                                src={"https://img4882.weyesimg.com/uploads/www.springmattressfactory.com/images/153985301300120.png"}
                                alt={name}
                            />
                        </div>
                        <div className="productPage-description">

                            <h1>Description</h1>
                            <div className="product-characteristics">
                                <div className="product-characteristics-element">
                                    <h5>Firmness</h5>
                                    <Progress
                                        type="circle"
                                        width={70}
                                        percent={70}
                                    />
                                    <h5>intermediate</h5>
                                </div>

                                <div className="product-characteristics-element">
                                    <h5>Breathability</h5>
                                    <Progress
                                        type="circle"
                                        width={70}
                                        percent={70}
                                    />
                                    <h5>intermediate</h5>
                                </div>

                                <div className="product-characteristics-element">
                                    <h5>Assessment</h5>
                                    <Progress
                                        type="circle"
                                        width={70}
                                        percent={70}
                                    />
                                    <h5>intermediate</h5>
                                </div>
                            </div>
                            <h4 className="product-title">{userProducts.title}</h4>
                            <p>{userProducts.description}</p>

                        </div>
                    </div>


                    <div className="productPage-right">
                        <div className="productPage-purchaseBox-details">
                            <p className="productPage-purchaseBox-details-price">{userProducts.price} €</p>
                            <div>

                                <div className="productPage-purchaseBox-details-selectorBox">
                                    <p className="productPage-purchaseBox-details-choseTitle">Chosse size: </p>
                                    <select className="productPage-purchaseBox-details-selector">
                                        <option value="volvo">80X180</option>
                                        <option value="saab">80X190</option>
                                        <option value="opel">80X200</option>
                                        <option value="audi">90X180</option>
                                    </select>
                                </div>
                            </div>


                            <button className="productPage-purchaseBox-addButton">ADD PRODUCT</button>
                        </div>

                    </div>



                </div>
                <div className="productPage-featured">

                </div>
            </div>
        )
    return (
        <div className="productPage-container">
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