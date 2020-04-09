/*
* Created by Allen on 2020-03-30
*/
import React from 'react'
import Document, {Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return <Html>
            <Head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initialScale=1, maximumScale=1.0, userScalable=0"/>
                <script src="https://h5cdn.skio.cn/js/flexible.js"></script>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    }
}

export default MyDocument