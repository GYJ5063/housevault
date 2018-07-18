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
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Search the house vault for the latest property information | House Vault</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                      crossOrigin="anonymous" />
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                      rel="stylesheet"
                      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                      crossOrigin="anonymous" />
                <link rel="stylesheet" href="/_next/static/style.css" />
                <meta name="description" content="View Local information about an address including epc, population, house prices, crime and much more." />

            </Head>
            <Header />
            <body>

                <Main />
                <Footer />
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                        crossOrigin="anonymous"></script>
                <NextScript />
            </body>
            </html>
        )
    }
}