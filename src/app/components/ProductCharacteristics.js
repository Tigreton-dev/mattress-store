import React from 'react';

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const ProductCharacteristics = props => {
    const { firmness, breathability, adaptability } = props;
    return (
        <div className="product-characteristics">
            <div className="product-characteristics-element">
                <h5>Firmness</h5>
                <Progress
                    type="circle"
                    width={70}
                    percent={firmness}
                />
                <h5>intermediate</h5>
            </div>

            <div className="product-characteristics-element">
                <h5>Breathability</h5>
                <Progress
                    type="circle"
                    width={70}
                    percent={breathability}
                />
                <h5>intermediate</h5>
            </div>

            <div className="product-characteristics-element">
                <h5>Adaptability</h5>
                <Progress
                    type="circle"
                    width={70}
                    percent={adaptability}
                />
                <h5>intermediate</h5>
            </div>

        </div>
    );
};

export default ProductCharacteristics;