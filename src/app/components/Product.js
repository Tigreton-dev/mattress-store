import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Product = props => {
    const { id, name, title, description, firmness, breathability, adaptability, price, image, featuredProduct, assessment } = props;
    const { isAdded, setIsAdded } = useState(false);

    return (
        <div className="product">
            <h1 className="product-name">{name}</h1>
            <div className="product-stars">	&#9733; 	&#9733; 	&#9733; 	&#9733; 	&#9733;</div>

            <div className="product-body">
                <div className="product-image">
                    <img
                        src={"https://img4882.weyesimg.com/uploads/www.springmattressfactory.com/images/153985301300120.png"}
                        alt={name}
                    />
                </div>

                <div className="product-description">
                    <h4 className="product-title">{title}</h4>
                    <p>{description}</p>
                    <div className="product-characteristics">
                        <div>
                            <h5>Firmeza</h5>
                            <Progress
                                type="circle"
                                width={70}
                                percent={70}
                            />
                            <h5>intermedia</h5>
                        </div>

                        <div>
                            <h5>Transpirabilidad</h5>
                            <Progress
                                type="circle"
                                width={70}
                                percent={70}
                            />
                            <h5>intermedia</h5>
                        </div>

                        <div>
                            <h5>Adaptabilidad</h5>
                            <Progress
                                type="circle"
                                width={70}
                                percent={70}
                            />
                            <h5>intermedia</h5>
                        </div>
                    </div>
                </div>

                <div className="product-price">
                    <p className="product-price-value">{price} €</p>
                    <Link to={`/product/1`} className="product-price-link">VER PRODUCTO</Link>
                </div>
            </div>
        </div>
    );
};


export default Product;