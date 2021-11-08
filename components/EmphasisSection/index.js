import {
    Container,
    Cards,
    CardContainer,
    Card,
    CardImage,
    CardText,
    CardTitle,
    CardStars,
    CardFooterContainer
} from '../../styles/components/emphasisSection'


export default function EmphasisSection() {

    return (
        <Container>
            <Cards>
                <CardContainer>
                    <Card>
                        <CardImage src="./vo.png" />
                        <CardText>
                            <CardTitle>Fazendinha do vô</CardTitle>
                            <CardStars src="./stars.png" />
                        </CardText>
                    </Card>
                    <CardFooterContainer src="./fazendinha-banner.png" />
                </CardContainer>
                <CardContainer>
                    <Card>
                        <CardImage src="./joao.png" />
                        <CardText>
                            <CardTitle>João pé de feijão</CardTitle>
                            <CardStars src="./stars2.png" />
                        </CardText>
                    </Card>
                    <CardFooterContainer src="./joao-banner.png" />
                </CardContainer>
                <CardContainer>
                    <Card>
                        <CardImage src="./melancia.png" />
                        <CardText>
                            <CardTitle>Melância na cabeça</CardTitle>
                            <CardStars src="./stars3.png" />
                        </CardText>
                    </Card>
                    <CardFooterContainer src="./melancia-banner.png" />
                </CardContainer>
            </Cards>
        </Container>
    )
}