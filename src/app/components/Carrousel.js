import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Carousel,
    CarouselControl,
    CarouselItem,
    CarouselCaption,
    CarouselIndicators,
} from 'reactstrap';
import CarrouselItemComponent from './CarrouselItemComponent';

const Carrousel = props => {
    const { products } = props;

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === products.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === 0 ? products.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = newIndex => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = products.map(product => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <CarrouselItemComponent product={product} />
                <CarouselCaption
                    captionText={product.name}
                    className="text-danger"
                />
            </CarouselItem>
        );
    });

    return (
        <div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                ride="carousel"
                interval="6000"
            >
                <CarouselIndicators
                    items={products}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                    className="carrousel-control"
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                    className="carrousel-control"
                />
            </Carousel>
        </div>
    );
};

Carrousel.propTypes = {
    products: PropTypes.node.isRequired,
};

export default Carrousel;
