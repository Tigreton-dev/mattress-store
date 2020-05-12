import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCharacteristics from './ProductCharacteristics';

const CarrouselItemComponent = props => {
    const { product } = props;
    const {
        name,
        image,
        description,
        firmness,
        breathability,
        adaptability,
        price,
        id,
    } = product;

    return (
        <div className="carrousel-item-container">
            <div className="carrousel-item-left">
                <h1>{name}</h1>
                <div className="product-stars">
                    {' '}
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
                <img src={require(`../static/images/${image}`)} alt={name} />
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
                    <Link to={`/product/${id}`} className="carrousel-item-link">
                        WATCH PRODUCT
                    </Link>
                </div>
            </div>
        </div>
    );
};

CarrouselItemComponent.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        firmness: PropTypes.number.isRequired,
        breathability: PropTypes.number.isRequired,
        adaptability: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};

export default CarrouselItemComponent;
