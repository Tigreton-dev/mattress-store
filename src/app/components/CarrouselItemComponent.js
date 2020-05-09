import React from 'react';
import { Link } from 'react-router-dom';
import ProductCharacteristics from './ProductCharacteristics';

const CarrouselItemComponent = props => {
    const { name, image, description, firmness, breathability, adaptability, price, id } = props.product;
    return (
        <div className="carrousel-item-container">
            <div className="carrousel-item-left">
                <h1>{name}</h1>
                <div className="product-stars">	&#9733; 	&#9733; 	&#9733; 	&#9733; 	&#9733;</div>
                <img
                    src={require(`../static/images/` + image)}
                    alt={name}
                />
            </div>

            <div className="carrousel-item-right">
                <h3>Description</h3>
                <div className="carrousel-item-description">
                    <p>{description}</p>
                    <ProductCharacteristics
                        firmness={firmness}
                        breathability={breathability}
                        adaptability={adaptability}
                    />
                </div>

                <div className="carrousel-item-price">
                    <div className="carrousel-item-value">{price} €</div>
                    <Link to={`/product/${id}`} className="carrousel-item-link">WATCH PRODUCT</Link>
                </div>
            </div>

        </div>
    );
};

export default CarrouselItemComponent;