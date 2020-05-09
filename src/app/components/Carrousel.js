import React, { useState } from 'react';
import { Carousel, CarouselControl, CarouselItem, CarouselCaption } from 'reactstrap';
import CarrouselItemComponent from './CarrouselItemComponent';

const Carrousel = props => {
    const { products } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const slides = products.map((product) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(true)}
            >
                <CarrouselItemComponent product={product} />
                <CarouselCaption className="text-danger" />
            </CarouselItem>
        );
    });

    return (
        <div>
            <Carousel activeIndex={activeIndex} >
                {slides}
                <CarouselControl />
                <CarouselControl />
            </Carousel>
        </div>
    );
}

export default Carrousel;