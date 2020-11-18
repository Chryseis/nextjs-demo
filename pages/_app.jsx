/*
 * Created by Allen on 2020-03-30
 */
import '@/public/css/reset.less'
import '@/public/css/global.less'
import React, { useEffect } from 'react'
import Header from 'next/head'
import App from 'next/app'
import { useRouter } from 'next/router'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import * as Actions from '@/actions/navi'
import configureStore from '../configureStore/store'
import RouteSlider from '@/common/RouteSlider'

function MyApp({ Component, pageProps, store }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => store.dispatch(Actions.editPathQueue(url, '', 'PUSH'))

    router.events.on('routeChangeStart', handleRouteChange)

    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [])

  return (
    <>
      <Header>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initialScale=1, maximumScale=1.0, userScalable=0" />
        <script src="http://static.chryseis.cn/flexible.js" />
      </Header>
      <Provider store={store}>
        <RouteSlider>
          <Component {...pageProps} />
        </RouteSlider>
      </Provider>
    </>
  )
}

MyApp.getInitialProps = async appContext => {
  const pageProps = await App.getInitialProps(appContext)
  const ctx = appContext.ctx
  if (!!ctx.req) {
    ctx.store.dispatch(Actions.editPathQueue(ctx.pathname, '', 'PUSH'))
  }
  return { pageProps }
}

export default withRedux(configureStore)(MyApp)
