import {
  Container,
  LogoWeb,
  LogoMobile,
  DivOptions,
  CategoriesSelect,
  CartImage,
  DivLogin,
  DivLoginImage,
  DivLoginTitle
} from '../../styles/components/header'
import Router from 'next/router';

import { useMainContext } from '../../services/context'

import MenuButton from '../MenuButton';
import Menu from '../Menu';

export default function Header() {

  const { search, setSearch } = useMainContext();

  return (
    <>
      <Container>
        <LogoWeb onClick={() => Router.push("/")} src="/logo.png" />
        <LogoMobile onClick={() => Router.push("/")} src="/logo-mobile.png" />
        <DivOptions>
          <CategoriesSelect value={search} onChange={e => {
            setSearch(e.target.value, "category")
            Router.push("/productListing")
          }} >
            <option value="" label="Produtos" />
            <option value="Ovos" label="Ovos" />
            <option value="Queijos" label="Queijos" />
            <option value="Frutas" label="Frutas" />
            <option value="Legumes" label="Legumes" />
            <option value="Verduras" label="Verduras" />
          </CategoriesSelect>
          <MenuButton />
          <CartImage onClick={() => Router.push("/cart")} src="/cart.png" />
          <DivLogin>
            <DivLoginImage src="/user.png" />
            <DivLoginTitle>Entrar / Cadastre-se</DivLoginTitle>
          </DivLogin>
        </DivOptions>
      </Container>
      <Menu />
    </>
  )
}