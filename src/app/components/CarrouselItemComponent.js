import React from 'react';
import { CarouselItem, CarouselCaption } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const CarrouselItemComponent = props => {
    const { name, image, description, firmness, breathability, adaptability, price, id } = props.product;
    return (
        <div className="prueba-car">
            <div className="carrousel-left">
                <h1>{name}</h1>
                <div className="product-stars">	&#9733; 	&#9733; 	&#9733; 	&#9733; 	&#9733;</div>
                <img
                    src={require(`../static/images/` + image)}
                    alt={name}
                />
            </div>

            <div className="carrousel-right">
                <h3>Description</h3>

                <div className="carrousel-description">
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

                <div className="carrousel-price">
                    <div className="carrousel-value">{price} €</div>
                    <Link to={`/product/${id}`} className="carrousel-link">WATCH PRODUCT</Link>
                </div>
            </div>

        </div>
    );
};

export default CarrouselItemComponent;