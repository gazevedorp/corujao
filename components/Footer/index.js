import {
    Container,
    DivColumns,
    DivColumn,
    TitleColumn,
    Text,
    TextColumn,
    TextColumnBold,
    DivTextWithIcon,
    IconColumn,
    ImageColumn,
    DivCards,
    ImageCard,
    DivTerms,
    TextTerms,
    ImageTerms
} from '../../styles/components/footer'


export default function Footer() {

    return (
        <Container>
            <DivColumns>
                <DivColumn>
                    <TitleColumn>INSTITUCIONAL</TitleColumn>
                    <Text>Empresa</Text>
                    <Text>Como comprar</Text>
                    <Text>Segurança</Text>
                    <Text>Envio</Text>
                    <Text>Pagamento</Text>
                    <Text>Tempo de Garantia</Text>
                    <Text>Contato</Text>
                </DivColumn>
                <DivColumn>
                    <TitleColumn marginLeft="35">ATENDIMENTO</TitleColumn>
                    <DivTextWithIcon>
                        <IconColumn src="./phone.png" />
                        <TextColumn>(00)00000-0000</TextColumn>
                    </DivTextWithIcon>
                    <DivTextWithIcon>
                        <IconColumn src="./whatsapp.png" />
                        <TextColumn>(00)00000-0000</TextColumn>
                    </DivTextWithIcon>
                    <DivTextWithIcon>
                        <IconColumn src="./email.png" />
                        <TextColumn>corujaodovo@gmail.com</TextColumn>
                    </DivTextWithIcon>
                    <DivTextWithIcon>
                        <IconColumn src="./clock.png" />
                        <TextColumnBold>Horários de Funcionamento</TextColumnBold>
                    </DivTextWithIcon>
                    <DivTextWithIcon>
                        <Text>Atendimento de Segunda à Sexta-feira das 8:00h às 18h. Sábado das 8:00 às 13:00</Text>
                    </DivTextWithIcon>
                </DivColumn>
                <DivColumn>
                    <TitleColumn marginLeft="35">REDES SOCIAIS</TitleColumn>
                    <DivTextWithIcon>
                        <IconColumn src="./facebook.png" />
                        <TextColumn>Facebook</TextColumn>
                    </DivTextWithIcon>
                    <DivTextWithIcon>
                        <IconColumn src="./instagram.PNG" />
                        <TextColumn>Instagram</TextColumn>
                    </DivTextWithIcon>
                </DivColumn>
                <DivColumn>
                    <TitleColumn>SELOS DE SEGURANÇA</TitleColumn>
                    <ImageColumn src="./google.png" />
                    <ImageColumn src="./loja-protegida.png" />
                </DivColumn>
            </DivColumns>
            <DivCards>
                <ImageCard src="./cards/pix.png" />
                <ImageCard src="./cards/dinner.png" />
                <ImageCard src="./cards/visa.png" />
                <ImageCard src="./cards/bradesco.png" />
                <ImageCard src="./cards/hipercard.png" />
                <ImageCard src="./cards/express.png" />
                <ImageCard src="./cards/caixa.png" />
                <ImageCard src="./cards/dinheiro.png" />
                <ImageCard src="./cards/boleto.png" />
                <ImageCard src="./cards/aura.png" />
                <ImageCard src="./cards/hiper.png" />
                <ImageCard src="./cards/master.png" />
                <ImageCard src="./cards/visa2.png" />
                <ImageCard src="./cards/bb.png" />
                <ImageCard src="./cards/jcb.png" />
                <ImageCard src="./cards/itau.png" />
                <ImageCard src="./cards/elo.png" />
                <ImageCard src="./cards/discover.png" />
            </DivCards>
            <DivTerms>
                <TextTerms>
                    Preços e condições de pagamento da Ribeirão da Pesca podem ser alterados sem aviso prévio. Fotos meramente ilustrativas.
                </TextTerms>
                <ImageTerms src="./agencia.png" />
            </DivTerms>
        </Container>
    )
}
