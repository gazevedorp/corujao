import React from 'react'
import {
    Container,
    CardLeft,
    CardLeftImage,
    CardRight,
    CardRightImage,
} from '../../styles/components/sections'


export default function Sections() {

    return (
        <Container>
            <CardLeft>
                <CardLeftImage src="./linguica.PNG" />
            </CardLeft>
            <CardRight>
                <CardRightImage src="./temperos.PNG" />
                <CardRightImage src="./hamburguerias.PNG" />
            </CardRight>
        </Container>
    )
}