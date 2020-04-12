/*
* Created by Allen on 2020-03-30
*/
import '@/public/css/reset.less'
import '@/public/css/global.less'
import React from 'react'
import App from 'next/app'
import Header from 'next/head'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import {Provider} from 'react-redux'
import * as Actions from '@/actions/navi'
import configureStore from '../configureStore/store'
import RouteSlider from '@/common/RouteSlider'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        if (!!ctx.req) {
            ctx.store.dispatch(Actions.editPathQueue(ctx.pathname, '', 'PUSH'))
        }

        return { pageProps }
    }

    componentDidMount() {
        const { store } = this.props
        Router.events.on('routeChangeStart', url => store.dispatch(Actions.editPathQueue(url, '', 'PUSH')))
    }

    render() {
        const { Component, pageProps, store } = this.props
        return <>
            <Header>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initialScale=1, maximumScale=1.0, userScalable=0"/>
                <script src="http://static.chryseis.cn/flexible.js"></script>
            </Header>
            <Provider store={store}>
                <RouteSlider>
                    <Component {...pageProps}/>
                </RouteSlider>
            </Provider>
        </>
    }
}

export default withRedux(configureStore)(MyApp)