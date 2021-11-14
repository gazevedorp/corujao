import React from 'react'
import Router from 'next/router'

import Header from '../components/Header'
import Footer from '../components/Footer'

import {
  Container,
  Banner,
  Page,
  Title,
  DivInput,
  Input,
  Button,
  Description,
  ReturnText
} from '../styles/login'

export default function Login() {

  return (
    <Container>
      <Header />
      <Banner src="/banner.png" />
      <Page>
        <Title>Informe seu e-mail ou CPF/CNPJ para prosseguir com sua compra</Title>
        <DivInput>
          <Input placeholder="Digite seu e-mail ou CPF/CNPJ" />
          <Button onClick={() => Router.push("/checkout")}>CADASTRAR</Button>
        </DivInput>
        <Description>Utilizaremos seus dados para identificar seu cadastro ou criar uma nova conta</Description>
      </Page>
      <ReturnText onClick={() => Router.back()}>Voltar ao carrinho</ReturnText>
      <Footer />
    </Container>
  )
}
