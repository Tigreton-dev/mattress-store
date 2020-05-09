import React from 'react';
import { Link } from 'react-router-dom';
import ProductCharacteristics from './ProductCharacteristics';

const Product = props => {
    const { id, name, title, description, firmness, breathability, adaptability, price, image, featuredProduct, assessment } = props;

    return (
        <div className="product-container">
            <h1 className="product-name">{name}</h1>
            <div className="product-stars">	&#9733; 	&#9733; 	&#9733; 	&#9733; 	&#9733;</div>

            <div className="product-body">
                <div className="product-image">
                    <img
                        src={require(`../static/images/` + image)}
                        alt={name}
                    />
                </div>

                <div className="product-description">
                    <h4 className="product-title">{title}</h4>
                    <p>{description}</p>
                    <ProductCharacteristics
                        firmness={firmness}
                        breathability={breathability}
                        adaptability={adaptability}
                    />
                </div>

                <div className="product-price">
                    <p className="product-price-value">{price} €</p>
                    <Link to={`/product/${id}`} className="product-price-link">WATCH PRODUCT</Link>
                </div>
            </div>
        </div>
    );
};


export default Product;