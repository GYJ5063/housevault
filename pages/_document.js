// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import moment from "moment"

export default class MyDocument extends Document {
    constructor(props) {
        super(props);

    }
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }
    render() {
        return (
            <html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                      crossOrigin="anonymous" />
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                      rel="stylesheet"
                      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                      crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
                      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
                      crossOrigin="anonymous" />
                <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />

                <link rel="stylesheet" href="/_next/static/style.css" />
                <meta name="description" content="View Local information about an address including epc, population, house prices, crime and much more." />
                <meta name="google-site-verification" content="WdS4Z6EBmpQwp-mES6S5_gv77-uQEqOYT3YgD4FLfYE" />
                <meta itemProp="isFamilyFriendly" content="TRUE" />
                <meta itemProp="accessibilityControl" content="fullKeyboardControl" />
                <meta itemProp="accessibilityControl" content="fullMouseControl" />
                <meta itemProp="accessibilityControl" content="fullTouchControl" />
                <meta itemProp="accessibilityFeature" content="alternativeText" />
                <meta itemProp="accessibilityFeature" content="structuralNavigation" />
                <meta itemProp="accessibilityHazard" content="noFlashingHazard" />
                <meta itemProp="accessibilityHazard" content="noMotionSimulationHazard" />
                <meta itemProp="accessibilityHazard" content="noSoundHazard" />
                <meta itemProp="copyrightYear" content={moment().format('YYYY')} />
                <meta itemProp="copyrightHolder" content="Housevault UK" />

                <meta itemProp="name" content="Housevault | Property Valuation | House Prices " />
                <meta itemProp="description" content="Property valuation and House Prices, House Buying / Selling Guides and much more..." />
                <meta itemProp="image" content="https://housevault.co.uk/static/housevault-logo.svg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@housevaultuk" />
                <meta name="twitter:title" content="Housevault | Property Valuation | House Prices" />
                <meta name="twitter:description" content="Property valuation and House Prices, House Buying / Selling Guides and much more..." />
                <meta name="twitter:creator" content="@housevaultuk" />
                <meta name="twitter:image:src" content="https://housevault.co.uk/static/housevault-logo.svg" />


            </Head>
            <body>
                <Main />
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                        crossOrigin="anonymous"></script>
                <NextScript />
            </body>
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </html>
        )
    }
}