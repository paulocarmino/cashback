import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';

import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

import Template from '@/components/Template'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Template>
      <Component {...pageProps} />

      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
    </Template>
  )
}

export default MyApp
