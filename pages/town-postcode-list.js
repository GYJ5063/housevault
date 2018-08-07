import fetch from "isomorphic-fetch";
import React from "react";
import _ from 'lodash';
import Link from 'next/link'
import Layout from '../components/Layout'


class TownPostcodeList extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {

        if (_.isEmpty(this.props.towns)) {
            return 'Loading';
        }
        return (
            <div className="container  list-page-padding">
                <Layout>
                <h1>List of Towns</h1>
                <p>You can browse our listings by town, click on the town name below to see all the postcodes in this town. </p>
                    { _.chunk(this.props.towns,3) .map( ( t ) => (
                        <div key={t.index} className="row">
                            { t.map( ( towns ) => (
                                <div key={ towns.town } className="col">
                                    <Link route='town' href={"/town?town=" +  towns.town} as={'/town/'+ towns.town }  >
                                        <a>
                                            { towns.town }
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
TownPostcodeList.getInitialProps = async ({ req }) => {
    const res = await fetch(process.env.BACKEND_URL + "towns");
    const json = await res.json();

    return { towns: json.data }
};

export default TownPostcodeList