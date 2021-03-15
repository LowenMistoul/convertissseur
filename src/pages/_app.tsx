import '../public/styles/global.scss'

import React from 'react'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Convertisseur</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}