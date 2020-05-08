import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const items = [
    {
        id: 1,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        id: 2,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        id: 3,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const Carrousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <div className="prueba-car">
                    <div className="carrousel-left">
                        <h1>ghsdgu</h1>
                        <div className="product-stars">	&#9733; 	&#9733; 	&#9733; 	&#9733; 	&#9733;</div>
                        <img
                            src={require(`../static/images/Chipre.jpg`)}
                            alt={name}
                        />
                    </div>

                    <div className="carrousel-right">
                        <h3>Description</h3>

                        <div className="carrousel-description">
                            <p>The Cyprus mattress stands out for its incredible value for money. Une quality in its materials and exclusive Maxcolchon Eco-Fresche treatment. 2.5 cm of Airsystem Supersoft in its padding and 4 cm of Viscoelastic Sensus breathable 65 kg in its core.</p>
                            <div className="product-characteristics">
                                <div className="product-characteristics-elem">
                                    <h5>Firmness</h5>
                                    <Progress
                                        type="circle"
                                        width={70}
                                        percent={67}
                                    />
                                    <h5>intermediate</h5>
                                </div>

                                <div className="product-characteristics-elem">
                                    <h5>Breathability</h5>
                                    <Progress
                                        type="circle"
                                        width={70}
                                        percent={67}
                                    />
                                    <h5>intermediate</h5>
                                </div>

                                <div className="product-characteristics-elem">
                                    <h5>Adaptability</h5>
                                    <Progress
                                        type="circle"
                                        width={70}
                                        percent={67}
                                    />
                                    <h5>intermediate</h5>
                                </div>
                            </div>
                        </div>

                        <div className="carrousel-price">
                            <div className="carrousel-value">456 €</div>
                            <Link to={`/product/345`} className="carrousel-link">WATCH PRODUCT</Link>
                        </div>
                    </div>


                </div>

                <CarouselCaption className="text-danger" />
            </CarouselItem>
        );
    });

    return (
        <div>
            <style>
                {
                    `.custom-tag {
              max-width: 100%;
              
              background: black;
            }`
                }
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >

                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default Carrousel;