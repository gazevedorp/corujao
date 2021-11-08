import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Corujão do Ovo</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp