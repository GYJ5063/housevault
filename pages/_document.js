// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../styles.scss"


export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                      crossOrigin="anonymous" />

                <link rel="stylesheet" href="/_next/static/style.css" />
            </Head>
            <Header />
            <body>

                <Main />
                <Footer />
                <NextScript />
            </body>
            </html>
        )
    }
}