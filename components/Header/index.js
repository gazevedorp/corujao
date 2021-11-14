import {
  Container,
  Logo,
  DivOptions,
  CategoriesSelect,
  CartImage,
  DivLogin,
  DivLoginImage,
  DivLoginTitle
} from '../../styles/components/header'
import Router from 'next/router';

import { useMainContext } from '../../services/context'

export default function Header() {

  const { search, setSearch } = useMainContext();

  return (
    <Container>
      <Logo onClick={() => Router.push("/")} src="/logo.png" />
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
        <CartImage onClick={() => Router.push("/cart")} src="/cart.png" />
        <DivLogin>
          <DivLoginImage src="/user.png" />
          <DivLoginTitle>Entrar / Cadastre-se</DivLoginTitle>
        </DivLogin>
      </DivOptions>
    </Container>
  )
}
