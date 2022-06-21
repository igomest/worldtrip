import { ChakraProvider } from '@chakra-ui/react'
import { makeServer } from '../services/mirage';
import type { AppProps } from 'next/app'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom"

import { theme } from '../../styles/theme'

if (process.env.NODE_ENV === "development") {
  // inicializando miragejs
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
