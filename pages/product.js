import React from 'react'

import Header from '../components/Header'
import ProductSlider from '../components/ProductSlider'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import {
  Container,
  TitleRelateds,
  ContainerBanner,
  Banner,
  Path,
  ContainerDetails,
  ContainerImages,
  Miniatures,
  ImageMiniatures,
  Image,
  Details,
  DescriptionContainer,
  Title,
  Subtitle,
  Description,
  TecnicalDescription,
  Stars,
  Price,
  Button,
  ImagePayment,
  DivHor,
  Quantity,
  Number,
  Input,
  ButtonCep
} from '../styles/product'

export default function Product() {

  return (
    <Container>
      <Header />
      <ContainerBanner>
        <Banner src="/banner.png" />
      </ContainerBanner>
      <Path>Home - Frutas - Banana prata</Path>
      <ContainerDetails>
        <ContainerImages>
          <Miniatures>
            <ImageMiniatures src="./banana1.png" />
            <ImageMiniatures src="./banana2.png" />
            <ImageMiniatures src="./banana3.png" />
            <ImageMiniatures src="./banana4.png" />
          </Miniatures>
          <Image src="./banana.png" />
        </ContainerImages>
        <Details>
          <Title>Banana prata KG</Title>
          <Description>Fornecido por: <b>fazenda norte</b></Description>
          <Description>Avaliação:</Description>
          <Stars src="./stars2.png" />
          <Price>R$ 4,99</Price>
          <DivHor>
            <Description>Quantidade:</Description>
            <Quantity margin>-</Quantity>
            <Number>1</Number>
            <Quantity>+</Quantity>
          </DivHor>
          <Button>Comprar</Button>
          <DivHor borderTop>
            <Description>Calcular Frete:</Description>
            <Input />
            <ButtonCep>Ok</ButtonCep>
          </DivHor>
          <ImagePayment src="./pagamento.png" />
        </Details>
      </ContainerDetails>
      <DescriptionContainer>
        <Title>DESCRIÇÃO GERAL</Title>
        <Subtitle>Banana prata</Subtitle>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Description>
        <Title>FICHA TÉCNICA</Title>
        <TecnicalDescription backgroundColor>Código	0029520002</TecnicalDescription>
        <TecnicalDescription>Categoria	Frutas</TecnicalDescription>
        <TecnicalDescription backgroundColor>Fornecedor: Fazenda Norte</TecnicalDescription>
      </DescriptionContainer>
      <TitleRelateds>Relacionados: </TitleRelateds>
      <ProductSlider />
      <Newsletter />
      <Footer />
    </Container>
  )
}
