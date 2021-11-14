import React from 'react'
import Router from 'next/router'

import Header from '../components/Header'
import Footer from '../components/Footer'

import {
    Container,
    Banner,
    HeaderCart,
    HeaderCartText,
    HeaderCartButton,
    Item,
    ItemImageText,
    ItemImage,
    ItemDivText,
    ItemTitle,
    ItemSubtitle,
    DivQty,
    Quantity,
    Number,
    Price,
    DivDetails,
    DeliveryData,
    DeliveryTitle,
    DeliveryDescription,
    DivDelivery,
    DivTotalPrice,
    DeliveryDetails,
    CartButtons,
    CartButton,
    DivValues,
    TextValue,
    TextDescription
} from '../styles/cart'

export default function Cart() {

    return (
        <Container>
            <Header />
            <Banner src="/banner.png" />
            <HeaderCart>
                <HeaderCartText>Meu carrinho</HeaderCartText>
                <HeaderCartButton onClick={() => Router.push('/login')}>Continuar</HeaderCartButton>
            </HeaderCart>
            <Item>
                <ItemImageText>
                    <ItemImage onClick={() => Router.push('/product')} src="./product-banana.png" />
                    <ItemDivText>
                        <ItemTitle>Banana prata KG</ItemTitle>
                        <ItemSubtitle>Fornecido por: <b>fazenda norte</b></ItemSubtitle>
                    </ItemDivText>
                </ItemImageText>
                <DivQty>
                    <Quantity>-</Quantity>
                    <Number>1</Number>
                    <Quantity>+</Quantity>
                </DivQty>
                <Price>R$ 4,99</Price>
            </Item>
            <Item>
                <ItemImageText>
                    <ItemImage onClick={() => Router.push('/product')} src="./product-banana.png" />
                    <ItemDivText>
                        <ItemTitle>Banana prata KG</ItemTitle>
                        <ItemSubtitle>Fornecido por: <b>fazenda norte</b></ItemSubtitle>
                    </ItemDivText>
                </ItemImageText>
                <DivQty>
                    <Quantity>-</Quantity>
                    <Number>1</Number>
                    <Quantity>+</Quantity>
                </DivQty>
                <Price>R$ 4,99</Price>
            </Item>
            <DivDetails>
                <DivDelivery>
                    <DeliveryData>
                        <DeliveryTitle>Forma de Envio:</DeliveryTitle>
                        <DeliveryDetails src="./delivery-details.png" />
                    </DeliveryData>
                    <DeliveryDescription>
                        Possui cupom? Utilize-o na página de pagamento e aproveite!
                    </DeliveryDescription>
                </DivDelivery>
                <DivTotalPrice>
                    <TextValue>Resumo do pedido</TextValue>
                    <DivValues>
                        <TextValue>Subtotal:</TextValue>
                        <TextValue>R$ 9,98</TextValue>
                    </DivValues>
                    <DivValues>
                        <TextValue>Total do pedido:</TextValue>
                        <TextValue>R$ 9,98</TextValue>
                    </DivValues>
                    <TextDescription>
                        no boleto à vista
                    </TextDescription>
                    <TextDescription>
                        ou 1x sem juros de R$ 94,00 no cartão de crédito
                    </TextDescription>
                    <TextDescription>
                        ou 12x de R$ 9,70 no cartão de créditoÏ
                    </TextDescription>
                </DivTotalPrice>
            </DivDetails>
            <CartButtons>
                <CartButton onClick={() => Router.push('/productListing')}>Escolher mais produtos</CartButton>
                <CartButton onClick={() => Router.push('/login')}>Continuar</CartButton>
            </CartButtons>
            <Footer />
        </Container>
    )
}
