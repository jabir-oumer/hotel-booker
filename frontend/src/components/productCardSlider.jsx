// import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const ProductCardSlider = ( {onClick}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        // centerMode: true,
        initialSlide: 1,
        // variableWidth: true,
        slidesToScroll: 1,
        // focusOnSelect: true,
        // rows: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: false,
                    dots: true,
                    // centerPadding: "60px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: false,
                    dots: true,
                }
            }
        ]
    };

    return (
        <div className="items-center h-fit">
            <Slider {...settings}>
                {/* Add your product card components here */}
                <div className = "pl-5 pr-5" >
                    <ProductCard onClick={onClick}/>
                </div>
                <div className = "pl-5 pr-5" >
                    <ProductCard onClick={onClick}/>
                </div>
                <div className = "pl-5 pr-5" >
                    <ProductCard onClick={onClick}/>
                </div>
                <div className = "pl-5 pr-5" >
                    <ProductCard onClick={onClick}/>
                </div>
                <div className = "pl-5 pr-5" >
                    <ProductCard onClick={onClick}/>
                </div>
                <div className = "pl-5 pr-5" >
                    <ProductCard onClick={onClick}/>
                </div>
                <div className = "pl-5 pr-5" >
                    <ProductCard onClick={onClick}/>
                </div>
                <div className = "pl-5 pr-5" >
                    <ProductCard onClick={onClick}/>
                </div>
                <div className = "pl-5 pr-5" >
                    <ProductCard onClick={onClick}/>
                </div>
                <div className = "pl-5 pr-5" >
                    <ProductCard onClick={onClick}/>
                </div>
                <div className = "pl-5 pr-5" >
                    <ProductCard onClick={onClick}/>
                </div>
                <div className = "pl-5 pr-5" >
                    <ProductCard onClick={onClick}/>
                </div>
                {/* Add more product cards as needed */}
            </Slider>
        </div>
    );
};

export default ProductCardSlider;
