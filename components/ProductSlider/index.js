import React from "react";

import Slider from "react-slick";

import {
    Container,
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductPrice
} from '../../styles/components/productSlider'

export default function ProductSlider() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false,
            }
          }]
    };

    return (
        <Container>
            <Slider {...settings}>
            <ProductCard>
                    <ProductImage src="./products/castanha.png" />
                    <ProductTitle>Castanhas de caju</ProductTitle>
                    <ProductPrice>R$10,90</ProductPrice>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/pao.png" />
                    <ProductTitle>Pão artesanal</ProductTitle>
                    <ProductPrice>R$7,90</ProductPrice>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/palmito.png" />
                    <ProductTitle>Palmito fresco</ProductTitle>
                    <ProductPrice>R$11,90</ProductPrice>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/leite.png" />
                    <ProductTitle>Leite</ProductTitle>
                    <ProductPrice>R$10,90</ProductPrice>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/castanha.png" />
                    <ProductTitle>Castanhas de caju</ProductTitle>
                    <ProductPrice>R$10,90</ProductPrice>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/pao.png" />
                    <ProductTitle>Pão artesanal</ProductTitle>
                    <ProductPrice>R$7,90</ProductPrice>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/palmito.png" />
                    <ProductTitle>Palmito fresco</ProductTitle>
                    <ProductPrice>R$11,90</ProductPrice>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/leite.png" />
                    <ProductTitle>Leite</ProductTitle>
                    <ProductPrice>R$10,90</ProductPrice>
                </ProductCard>
            </Slider>
        </Container>
    )
}
