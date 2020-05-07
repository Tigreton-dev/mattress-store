import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";



const Product = props => {
    const { id, name, title, description, firmness, breathability, adaptability, price, image, featuredProduct, assessment } = props;
    const { isAdded, setIsAdded } = useState(false);
    console.log(image)
    return (
        <div className="product">
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
                    <div className="product-characteristics">
                        <div className="product-characteristics-elem">
                            <h5>Firmness</h5>
                            <Progress
                                type="circle"
                                width={70}
                                percent={firmness}
                            />
                            <h5>intermediate</h5>
                        </div>

                        <div className="product-characteristics-elem">
                            <h5>Breathability</h5>
                            <Progress
                                type="circle"
                                width={70}
                                percent={breathability}
                            />
                            <h5>intermediate</h5>
                        </div>

                        <div className="product-characteristics-elem">
                            <h5>Adaptability</h5>
                            <Progress
                                type="circle"
                                width={70}
                                percent={adaptability}
                            />
                            <h5>intermediate</h5>
                        </div>
                    </div>
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