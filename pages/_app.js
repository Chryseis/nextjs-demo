/*
* Created by Allen on 2020-03-30
*/
import '@/public/css/reset.less'
import React from 'react'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import {Provider} from 'react-redux'
import configureStore from '../configureStore/store'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        return { pageProps }
    }

    render() {
        const { Component, pageProps, store } = this.props
        return  <Provider store={store}>
            <Component {...pageProps}/>
        </Provider>
    }
}

export default withRedux(configureStore)(MyApp)