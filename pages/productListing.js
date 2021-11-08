import React from 'react'

import { useMainContext } from '../services/context'

import Header from '../components/Header'
import Filter from '../components/Filter'
import ProductsGrid from '../components/ProductsGrid'
import ProductSlider from '../components/ProductSlider'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import {
  Container,
  TitleRelateds,
  ContainerBanner,
  Banner,
  Title,
  ContainerOrder,
  FilterOrder,
  ProductsContent,
  ProductsContainer,
  FilterContainer,
  ContainerPagination,
  ButtonPagination,
} from '../styles/productListing'

export default function ProductListing() {

  const { search, type } = useMainContext();

  return (
    <Container>
      <Header />
      <ContainerBanner>
        <Banner src="/banner.png" />
        <Title>{type === "search" ? "Você buscou por: " : "Categoria: "}{search}</Title>
      </ContainerBanner>
      <ContainerOrder>
        <FilterOrder>
          <option label="Relevância" />
        </FilterOrder>
      </ContainerOrder>
      <ProductsContent>
        <FilterContainer>
          <Filter />
        </FilterContainer>
        <ProductsContainer>
          <ProductsGrid />
        </ProductsContainer>
      </ProductsContent>
      <ContainerPagination>
        <ButtonPagination opacity>
          Anterior
        </ButtonPagination>
        <ButtonPagination>
          Próxima
        </ButtonPagination>
      </ContainerPagination>
      <TitleRelateds>Relacionados: </TitleRelateds>
      <ProductSlider />
      <Newsletter />
      <Footer />
    </Container>
  )
}
