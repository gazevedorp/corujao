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
                <CardLeftImage src="./linguica.png" />
            </CardLeft>
            <CardRight>
                <CardRightImage src="./temperos.png" />
                <CardRightImage src="./hamburguerias.png" />
            </CardRight>
        </Container>
    )
}