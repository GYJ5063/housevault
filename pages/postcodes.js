import fetch from "isomorphic-fetch";
import React from "react";
import _ from 'lodash';
import Link from 'next/link'

class Postcodes extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {

        if (_.isEmpty(this.props.postcodes)) {
            return 'Loading';
        }
        return (
            <div className="container  list-page-padding">
                <h1>Postcode Lists</h1>
                <p>Choose a postcode from the list below to see all addresses registered in this postcode</p>
                    { _.chunk(this.props.postcodes,6) .map( ( p ) => (
                        <div key={p.index} className="row">
                            { p.map( ( postcode ) => (
                                <div key={ postcode.postcode_short } className="col">
                                    <Link href={ "/postcode-start/" + postcode.postcode_short  }>
                                        <a>{ postcode.postcode_short }</a>
                                    </Link>
                                </div>
                            ) ) }
                        </div>
                    ) ) }
            </div>
        )
    }
}
Postcodes.getInitialProps = async ({ req }) => {
    const res = await fetch('http://www.housevault.test/api/postcode');
    const json = await res.json();
    return { postcodes: json.data }
};

export default Postcodes