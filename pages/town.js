import fetch from "isomorphic-fetch";
import React from "react";
import _ from 'lodash';
import Link from 'next/link'
import Layout from '../components/Layout'
import Head from "next/head";
class Town extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        if (_.isEmpty(this.props.town)) {
            return 'Loading Postcodes';
        }
        return (
            <div className="container  list-page-padding">
                <Head>
                    <title>{this.props.name} Postcode List | House Vault</title>
                    <meta name="description" content={"All the postcodes listed for "+this.props.name} />
                </Head>
                <Layout>
                <h1>{this.props.name} Postcodes</h1>
                <p>Here is a list of all the postcodes available in {this.props.name} </p>
                { _.chunk(this.props.town,4) .map( ( t ) => (
                    <div key={t.index} className="row">
                        { t.map( ( postcode ) => (
                            <div key={ postcode.postcode } className="col">
                                <Link prerender href={"/street?postcode=" + postcode.postcode} as={'/postcode/'+postcode.postcode} >
                                    <a>
                                        { postcode.postcode }
                                    </a>
                                </Link>
                            </div>
                        ) ) }
                    </div>
                ) ) }
                </Layout>
            </div>
        )

    }
}
Town.getInitialProps = async ({ req , query: { town } }) => {

    const res = await fetch(process.env.BACKEND_URL + "town/" + town);
    const json = await res.json();
    return { town: json.data, name: town }
};

export default Town