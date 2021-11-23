import React from 'react';
import Router from 'next/router';

import { useServiceState } from '../../services/serviceState';
import { useMainContext } from '../../services/context'

import {
    Sidebar,
    Item
} from 'react-sidebar-ui'

import 'react-sidebar-ui/dist/index.css';

//The style classes described are found in '../../styles/global.js'

export default function Menu() {

    const { setMenuOpen, menuOpen } = useServiceState();
    const { setSearch } = useMainContext();

    if (menuOpen)
        return (
            <Sidebar classes="menu" isCollapsed={false}>
                < Item classes="menu-item"
                    onClick={() => {
                        setSearch("Ovos");
                        setMenuOpen();
                        Router.push("/productListing");
                    }}>
                    Ovos
                </Item >
                <Item classes="menu-item"
                    onClick={() => {
                        setSearch("Queijos");
                        setMenuOpen();
                        Router.push("/productListing");
                    }}>
                    Queijos
                </Item>
                <Item classes="menu-item"
                    onClick={() => {
                        setSearch("Frutas");
                        setMenuOpen();
                        Router.push("/productListing");
                    }}>
                    Frutas
                </Item>
                <Item classes="menu-item"
                    onClick={() => {
                        setSearch("Legumes");
                        setMenuOpen();
                        Router.push("/productListing");
                    }}>
                    Legumes
                </Item>
                <Item classes="menu-item"
                    onClick={() => {
                        setSearch("Verduras");
                        setMenuOpen();
                        Router.push("/productListing");
                    }}>
                    Verduras
                </Item>
                <Item classes="menu-item"
                    onClick={() => setMenuOpen()}>
                    <b>Fechar</b>
                </Item>
            </Sidebar >
        )
    else
        return <></>
}