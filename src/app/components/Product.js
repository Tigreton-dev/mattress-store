import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Product = props => {
    const { isAdded, setIsAdded } = useState(false);

    return (
        <div className="product">
            <h1 className="product-name">Colchón Elasticmax</h1>
            <div className="product-stars">	&#9733; 	&#9733; 	&#9733; 	&#9733; 	&#9733;</div>

            <div className="product-body">
                <div className="product-image">
                    <img
                        src={"https://img4882.weyesimg.com/uploads/www.springmattressfactory.com/images/153985301300120.png"}
                        alt={name}
                    />
                </div>

                <div className="product-description">
                    <h4 className="product-title">Relaja tu cuerpo mientras descansas</h4>
                    <p>Colchón viscoelástico de 6 cm. El colchón Elasticmax tiene firmeza intermedia resultando excelente para la reducción de presiones. 2 cm de viscoelástica natural acolchada de 80 kg de densidad y 4 cm de viscoelástica de 65 kg en su núcleo.</p>
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