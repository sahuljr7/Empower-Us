import NavBar from '../lib/navbar'
import '../styles/globals.css'
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <NavBar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
