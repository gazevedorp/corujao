import React from "react";
import Router from 'next/router';

import {
    Container,
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductButton
} from '../../styles/components/productsGrid'

export default function ProductsGrid() {

    return (
        <Container>
            <ProductCard>
                    <ProductImage src="./products/eggs.png" />
                    <ProductTitle>Ovos granja local</ProductTitle>
                    <ProductPrice>R$10,90</ProductPrice>
                    <ProductButton onClick={() => Router.push("/product")}>Comprar</ProductButton>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/espinafre.png" />
                    <ProductTitle>Espinafre da fazenda</ProductTitle>
                    <ProductPrice>R$7,90</ProductPrice>
                    <ProductButton onClick={() => Router.push("/product")}>Comprar</ProductButton>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/frutas.png" />
                    <ProductTitle>Frutas frescas</ProductTitle>
                    <ProductPrice>R$11,90</ProductPrice>
                    <ProductButton onClick={() => Router.push("/product")}>Comprar</ProductButton>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/file.png" />
                    <ProductTitle>Filé de cordeiro</ProductTitle>
                    <ProductPrice>R$10,90</ProductPrice>
                    <ProductButton onClick={() => Router.push("/product")}>Comprar</ProductButton>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/eggs.png" />
                    <ProductTitle>Ovos granja local</ProductTitle>
                    <ProductPrice>R$10,90</ProductPrice>
                    <ProductButton onClick={() => Router.push("/product")}>Comprar</ProductButton>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/espinafre.png" />
                    <ProductTitle>Espinafre da fazenda</ProductTitle>
                    <ProductPrice>R$7,90</ProductPrice>
                    <ProductButton onClick={() => Router.push("/product")}>Comprar</ProductButton>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/frutas.png" />
                    <ProductTitle>Frutas frescas</ProductTitle>
                    <ProductPrice>R$11,90</ProductPrice>
                    <ProductButton onClick={() => Router.push("/product")}>Comprar</ProductButton>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/file.png" />
                    <ProductTitle>Filé de cordeiro</ProductTitle>
                    <ProductPrice>R$10,90</ProductPrice>
                    <ProductButton onClick={() => Router.push("/product")}>Comprar</ProductButton>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="./products/file.png" />
                    <ProductTitle>Filé de cordeiro</ProductTitle>
                    <ProductPrice>R$10,90</ProductPrice>
                    <ProductButton onClick={() => Router.push("/product")}>Comprar</ProductButton>
                </ProductCard>
        </Container>
    )
}
