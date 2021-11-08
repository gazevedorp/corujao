import React from "react";

import {
    Container,
    Title,
    ContainerMore,
    TextMore,
    LabelCheck,
    TextCheck
} from '../../styles/components/filter'

export default function Filter() {

    return (
        <Container>
            <Title>Mais Filtros</Title>
            <ContainerMore>
                <TextMore>Fornecedores</TextMore>
                <TextMore>+</TextMore>
            </ContainerMore>
            <LabelCheck>
                <TextCheck type="checkbox" />
                Fazendinha do vô
            </LabelCheck>
            <LabelCheck>
                <TextCheck type="checkbox" />
                Laticício Oeste
            </LabelCheck>
            <LabelCheck>
                <TextCheck type="checkbox" />
                Da Vaca
            </LabelCheck>
            <LabelCheck>
                <TextCheck type="checkbox" />
                Queijo Fresco
            </LabelCheck>
            <LabelCheck>
                <TextCheck type="checkbox" />
                Minas ouro branco
            </LabelCheck>
            <ContainerMore>
                <TextMore>Tipo</TextMore>
                <TextMore>+</TextMore>
            </ContainerMore>
            <LabelCheck>
                <TextCheck type="checkbox" />
                Ingrediente
            </LabelCheck>
            <LabelCheck>
                <TextCheck type="checkbox" />
                In natura
            </LabelCheck>
            <ContainerMore>
                <TextMore>Unidade</TextMore>
                <TextMore>+</TextMore>
            </ContainerMore>
            <LabelCheck>
                <TextCheck type="checkbox" />
                Por Kg
            </LabelCheck>
            <LabelCheck>
                <TextCheck type="checkbox" />
                Pedaço
            </LabelCheck>
            <LabelCheck>
                <TextCheck type="checkbox" />
                Unidade
            </LabelCheck>
            <LabelCheck>
                <TextCheck type="checkbox" />
                Duzia
            </LabelCheck>
            <LabelCheck>
                <TextCheck type="checkbox" />
                Rama
            </LabelCheck>
        </Container>
    )
}
