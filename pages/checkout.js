import React from 'react'
import Router from 'next/router'

import Header from '../components/Header'
import Footer from '../components/Footer'

import {
  Container,
  Banner,
  ContainerCheckout,
  ContainerCard,
  CheckoutCard,
  CardHeader,
  CardHeaderTitle,
  Icon,
  Title,
  EditText,
  Card,
  IconCard,
  CardTitle,
  EditTextCard,
  CardDescription,
  CardDescriptionText,
  TextName,
  Input,
  TitleResume,
  DivPrice,
  DivPriceText,
  ProductCard,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice
} from '../styles/checkout'

export default function Login() {

  return (
    <Container>
      <Header />
      <Banner src="/banner.png" />
      <ContainerCheckout>
        <ContainerCard>
          <CheckoutCard>
            <CardHeader>
              <CardHeaderTitle>
                <Icon>1</Icon>
                <Title>Informações pessoais</Title>
              </CardHeaderTitle>
              <EditText>Editar</EditText>
            </CardHeader>
            <TextName>Olá Clarisse!</TextName>
            <Card>
              <CardHeader>
                <CardHeaderTitle>
                  <CardTitle>clarisse@gmail.com</CardTitle>
                </CardHeaderTitle>
                <EditText>sair ou trocar</EditText>
              </CardHeader>
            </Card>
            <CardDescription>
              <CardDescriptionText bold >
                ***isse***eira**
              </CardDescriptionText>
              <CardDescriptionText bold >
                (1*) ***56-2170
              </CardDescriptionText>
            </CardDescription>
          </CheckoutCard>
          <CheckoutCard>
            <CardHeader>
              <CardHeaderTitle>
                <Icon>2</Icon>
                <Title>Endereço de cadastro</Title>
              </CardHeaderTitle>
              <EditText>Editar</EditText>
            </CardHeader>
            <CardDescription>
              <CardDescriptionText >Rua coronel josé brass n°***19</CardDescriptionText>
              <CardDescriptionText>Jardim Marajó - Marília/SP</CardDescriptionText>
              <CardDescriptionText>CEP: 175343-002</CardDescriptionText>
            </CardDescription>
          </CheckoutCard>
          <CheckoutCard>
            <CardHeader>
              <CardHeaderTitle>
                <Icon>3</Icon>
                <Title>Formas de envio</Title>
              </CardHeaderTitle>
            </CardHeader>
            <Card>
              <CardHeader>
                <CardHeaderTitle>
                  <IconCard src="./card.png" />
                  <CardTitle bold>Transporte 1</CardTitle>
                </CardHeaderTitle>
                <EditTextCard>valor do envio 0,99</EditTextCard>
              </CardHeader>
            </Card>
          </CheckoutCard>
        </ContainerCard>
        <ContainerCard>
          <CheckoutCard>
            <CardHeader>
              <CardHeaderTitle>
                <Icon>4</Icon>
                <Title>Forma de pagamento</Title>
              </CardHeaderTitle>
            </CardHeader>
            <CardDescription>
              <CardDescriptionText >Selecione uma forma de pagamento para finalizar
                seu pedido:
              </CardDescriptionText>
            </CardDescription>
            <Card>
              <CardHeader>
                <CardHeaderTitle>
                  <IconCard src="./card.png" />
                  <CardTitle bold>Cãrtão de crédito</CardTitle>
                </CardHeaderTitle>
                <EditTextCard>Em até 12x</EditTextCard>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardHeaderTitle>
                  <IconCard src="./card.png" />
                  <CardTitle bold>Boleto</CardTitle>
                </CardHeaderTitle>
                <EditTextCard>á vista</EditTextCard>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardHeaderTitle>
                  <IconCard src="./card.png" />
                  <CardTitle bold>Transferência</CardTitle>
                </CardHeaderTitle>
                <EditTextCard>á vista</EditTextCard>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardHeaderTitle>
                  <IconCard src="./card.png" />
                  <CardTitle bold>Pix</CardTitle>
                </CardHeaderTitle>
                <EditTextCard>á vista</EditTextCard>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardHeaderTitle>
                  <IconCard src="./card.png" />
                  <CardTitle bold>Outras formas</CardTitle>
                </CardHeaderTitle>
                <EditTextCard>á vista</EditTextCard>
              </CardHeader>
            </Card>
          </CheckoutCard>
        </ContainerCard>
        <ContainerCard>
          <CheckoutCard>
            <CardHeader>
              <CardHeaderTitle>
                <TitleResume>Resumo do pedido</TitleResume>
              </CardHeaderTitle>
            </CardHeader>
            <ProductCard>
              <ProductImage src="./banana-checkout.png" />
              <ProductDetails>
                <ProductName>Banana prata KG</ProductName>
                <CardDescriptionText>
                Fornecido por: <b>vô zico produtos</b>
                </CardDescriptionText>
                <ProductPrice>
                  R$ 4,99
                </ProductPrice>
              </ProductDetails>
            </ProductCard>
            <ProductCard>
              <ProductImage src="./banana-checkout.png" />
              <ProductDetails>
                <ProductName>Banana maçã KG</ProductName>
                <CardDescriptionText>
                  Fornecido por: <b>fazenda norte</b>
                </CardDescriptionText>
                <ProductPrice>
                  R$ 4,99
                </ProductPrice>
              </ProductDetails>
            </ProductCard>
            <EditTextCard onClick={() => Router.push("/cart")}>
              voltar ao carrinho
            </EditTextCard>
            <CardDescriptionText>
              Observações:
            </CardDescriptionText>
            <Input rows="8" />
            <DivPrice>
              <DivPriceText>
                <CardDescriptionText>
                  Subtotal de produtos:
                </CardDescriptionText>
                <CardDescriptionText bold>
                  R$9,98
                </CardDescriptionText>
              </DivPriceText>
              <DivPriceText>
                <CardDescriptionText bold>
                  Total do pedido:
                </CardDescriptionText>
                <CardDescriptionText bold>
                  R$10,97
                </CardDescriptionText>
              </DivPriceText>
            </DivPrice>
          </CheckoutCard>
        </ContainerCard>
      </ContainerCheckout>
      <Footer />
    </Container>
  )
}
