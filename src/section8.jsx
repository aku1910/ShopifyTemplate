import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './section8.css'
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
        slidesToSlide: 2
    }
};
const sliderImageUrl = [
    {
        url: "https://fone-store-demo.myshopify.com/cdn/shop/files/instagram1.jpg?v=5369563179917895542",

    },
    {
        url: "https://fone-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=5369563179917895542",

    },
    {
        url: "https://fone-store-demo.myshopify.com/cdn/shop/files/instagram3.jpg?v=5369563179917895542",

    },
    {
        url: "https://fone-store-demo.myshopify.com/cdn/shop/files/instagram4.jpg?v=5369563179917895542",

    },
    {
        url: "https://fone-store-demo.myshopify.com/cdn/shop/files/instagram5.jpg?v=5369563179917895542",

    },
    {
        url: "https://fone-store-demo.myshopify.com/cdn/shop/files/instagram6.jpg?v=5369563179917895542",

    },

];

const Slider = () => {
    return (
        <div className="parent">
            <h1 className="flex justify-center   text-[25px] font-semibold">FONE ON INSTAGRAM</h1>
            <p style={{color:"rgb(81,158,34)"}} className="flex justify-center mb-[55px] text-[25px] font-medium">#fone</p>
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >

                {sliderImageUrl.map((imageUrl, index) => {
                    return (
                        <div className="multisliderr " key={index}>
                            <img src={imageUrl.url} />
                            <div>
                                <h3 className="text-[26px] font-semibold">{imageUrl.name}</h3>
                                <p className="text-[17px]">{imageUrl.price}</p>
                            </div>
                        </div>

                    );
                })}
            </Carousel>
        </div>
    );
};
export default Slider;
