import React, {
    useState,
} from 'react'
import {
    Container,
    Banner,
    Title,
    InputDiv,
    Input,
    Icon
} from '../../styles/components/searchBanner'
import Router from 'next/router';

import { useMainContext } from '../../services/context'

export default function SearchBanner() {

    const { setSearch } = useMainContext();
    const [inputValue, setInputValue] = useState("")

    return (
        <Container>
            <Banner src="/banner.png" />
            <Title>ALIMENTOS SEMPRE FRESQUINHOS</Title>
            <InputDiv>
                <Input value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <Icon
                    src="./search.png"
                    onClick={() => {
                        setSearch(inputValue, "search");
                        Router.push("/productListing")
                    }} />
            </InputDiv>
        </Container>
    )
}
