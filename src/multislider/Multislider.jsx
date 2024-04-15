import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
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
        url: "https://fone-store-demo.myshopify.com/cdn/shop/files/ba3.png?v=1660639419",
        name: "Ham Sandwich",
        price:"It is a long established fact that a reader ."
    },
    {
        url: "https://fone-store-demo.myshopify.com/cdn/shop/files/ba2.png?v=1660639531",
        name: "Hamburger Veggie",
        price:"It is a long established fact that a reader ."
    },
    {
        url: "https://fone-store-demo.myshopify.com/cdn/shop/files/ba4.png?v=1660639419",
        name: "Sushi Sashimi",
        price:"It is a long established fact that a reader ."
    },
    {
        url: "https://fone-store-demo.myshopify.com/cdn/shop/files/ba1.png?v=1660639419",
        name:"Pepperoni Pizza",
        price:"It is a long established fact that a reader ."
    },
];

const Slider = () => {
    return (
        <div className="parent">
            <h1 className="flex justify-center  mb-[55px] text-[25px] font-semibold">VISIT OUR STORE </h1>
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
                        <div className="multislider items-center gap-4" key={index}>
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
