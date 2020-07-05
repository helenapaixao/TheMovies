import React, { useState } from "react";
import Movie from "../../components/Movie";
import { Container } from "./styles";
import Media from "../Media";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



interface IMediaCarousel {
    items: any[];
}

const Watched: React.FC<IMediaCarousel> = ({ items }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 16,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    return (
        <Container>
            <Carousel
                responsive={responsive}
                infinite={true}
                removeArrowOnDeviceType={["mobile"]}
                itemClass="carousel-item"
            >
               
            </Carousel>
        </Container>
    );
};

export default Watched;
