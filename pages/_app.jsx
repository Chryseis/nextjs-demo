/*
* Created by Allen on 2020-03-30
*/
import '@/public/css/reset.less'
import '@/public/css/global.less'
import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import {Provider} from 'react-redux'
import * as Actions from '@/actions/navi'
import configureStore from '../configureStore/store'
import RouteSlider from '@/common/RouteSlider'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        if(!!ctx.req){
            ctx.store.dispatch(Actions.editPathQueue(ctx.pathname,'','PUSH'))
        }

        Router.events.on('routeChangeStart', url=>ctx.store.dispatch(Actions.editPathQueue(url,'','PUSH')))

        return { pageProps }
    }

    render() {
        const { Component, pageProps, store } = this.props
        return  <Provider store={store}>
            <RouteSlider>
                <Component {...pageProps}/>
            </RouteSlider>
        </Provider>
    }
}

export default withRedux(configureStore)(MyApp)