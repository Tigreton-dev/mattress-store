import React, { useState } from 'react';
import { Carousel, CarouselControl, CarouselItem, CarouselCaption } from 'reactstrap';
import CarrouselItemComponent from './CarrouselItemComponent';

const Carrousel = props => {
    const { products } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === products.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? products.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const slides = products.map((product) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
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
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default Carrousel;