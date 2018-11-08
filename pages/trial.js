import Head from 'next/head'
import Layout from '../components/Layout'
export default () =>
    <div>
        <Head>
            <title>About Us | House Vault</title>
            <meta name="description" content="About House Vault and our bespoke property Machine Learning Algorithms" />
        </Head>
        <Layout>
        <div className="container list-page-padding">
            <h1>Try HouseVault for 7 days</h1>
            <p>If you want to try HouseVault's products without any obligation then sign up for a free trial account today.</p>

            <p>You'll be able to test all the available features on our Estate Agency application directly on your website.
                Drive traffic and generate sales leads for your business with our industry leading technology.</p>

            <h3>Features available during the trial</h3>
            <ul>
                <li>Sales Valuations</li>
                <li>Rental Valuations</li>
                <li>Customer branding</li>
                <li>Send reports directly to you and your customers</li>
                <li>Search and export all leads generated</li>
                <li>Full access to our Knowledge section</li>
            </ul>
            <h3>What happens after the trial</h3>
            <p>After you experience the benefits our product offers you and your prospective clients you can sign up to one of our packages.
            Depending on your agency size our packages start from only 95 per month.</p>
            <p>If you decide the product is not suitable you will still have full access to the account to view & download any leads you generated
                through our application. However you will no longer be able to generate new valuations or have access to our knowledge base.
            You can decide to upgrade to a paid version at anytime by contacting our team.</p>
        </div>
        </Layout>
    </div>