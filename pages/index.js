import React, {
  useEffect
} from 'react'

import { useMainContext } from '../services/context'

import Header from '../components/Header'
import SearchBanner from '../components/SearchBanner'
import BannersSection from '../components/BannersSection'
import Products from '../components/Products'
import ProductSlider from '../components/ProductSlider'
import Sections from '../components/Sections'
import EmphasisSection from '../components/EmphasisSection'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import {
  Container,
  TitleEmphasis
} from '../styles/home'

export default function Home() {

  const { search } = useMainContext();

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <Container>
      <Header />
      <SearchBanner />
      <BannersSection />
      <Products />
      <ProductSlider />
      <Sections />
      <TitleEmphasis>Destaques:</TitleEmphasis>
      <EmphasisSection />
      <Newsletter />
      <Footer />
    </Container>
  )
}
