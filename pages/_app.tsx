import { AppProps } from 'next/app'
import appWithI18n from 'next-translate/appWithI18n'

import i18nConfig from '@/i18n'
import '@/style/style.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithI18n(MyApp, {
  ...i18nConfig,
  //
  // If you remove the "skipInitialProps", then all the namespaces
  // will be downloaded in the getInitialProps of the app.js and you
  // won't need to have any helper loadNamespaces on each page.
  //
  // skipInitialProps=false (default):
  // 🟢 Easy to configure
  // 🔴 All your pages are behind a server. No automatic page optimization.
  //
  // skipInitialProps=true:
  // 🔴 Hard to configure
  // 🟢 Better performance with automatic page optimization.
  //
  skipInitialProps: false
})
