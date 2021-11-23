import React from 'react';

import { useServiceState } from '../../services/serviceState';
import { HeaderButton } from '../../styles/components/menuButton.js'

export default function MenuButton() {

    const { setMenuOpen } = useServiceState();

    return (
        <HeaderButton onClick={() => setMenuOpen()}>
            <div></div>
            <div></div>
            <div></div>
        </HeaderButton>
    )
}