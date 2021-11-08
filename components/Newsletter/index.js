import React, {
    useState
} from 'react'
import {
    Container,
    Image,
    DivInput,
    Input,
    Button
} from '../../styles/components/newsletter'

export default function Header() {

    const [email, setEmail] = useState("");

    return (
        <Container>
            <Image src="/newsletter.png" />
            <DivInput>
                <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                />
                <Button onClick={() => console.log(email)}>
                    CADASTRAR
                </Button>
            </DivInput>
        </Container>
    )
}
