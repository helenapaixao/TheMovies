import React from "react";
import Media from '../Media';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "../../pages/SignIn/styles";

interface MediaCarousel {
    items: any[];
}
const MovieCarousel: React.FC<MediaCarousel> = ({ items }) => {
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
                {items.map((item) => (
                    <div key={item.id}>
                        <Media item={item} type={item.media_type} />
                    </div>
                ))}
            </Carousel>
        </Container>
    );
};

export default MovieCarousel;
