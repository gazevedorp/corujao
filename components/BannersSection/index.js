import {
    Container,
    Cards,
    Card,
    CardImage,
    CardText,
    CardTitle,
    CardDescription
} from '../../styles/components/bannersSection'


export default function BannersSection() {

    return (
        <Container>
            <Cards>
                <Card>
                    <CardImage src="./eggs.png" />
                    <CardText>
                        <CardTitle>Lorem Ipson</CardTitle>
                        <CardDescription>porta elementum</CardDescription>
                    </CardText>
                </Card>
                <Card>
                    <CardImage src="./abacaxi.png" />
                    <CardText>
                        <CardTitle>Lorem Ipson</CardTitle>
                        <CardDescription>porta elementum</CardDescription>
                    </CardText>
                </Card>
                <Card>
                    <CardImage src="./dieta.png" />
                    <CardText>
                        <CardTitle>Lorem Ipson</CardTitle>
                        <CardDescription>porta elementum</CardDescription>
                    </CardText>
                </Card>
                <Card>
                    <CardImage src="./padaria.png" />
                    <CardText>
                        <CardTitle>Lorem Ipson</CardTitle>
                        <CardDescription>porta elementum</CardDescription>
                    </CardText>
                </Card>
            </Cards>
        </Container>
    )
}