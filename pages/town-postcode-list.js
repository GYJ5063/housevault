import fetch from "isomorphic-fetch";
import React from "react";
import _ from 'lodash';
import {Link} from '../routes'


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
                <h1>List of Towns</h1>
                <p>You can browse our listings by town, click on the town name below to see all the postcodes in this town. </p>
                    { _.chunk(this.props.towns,3) .map( ( t ) => (
                        <div key={t.index} className="row">
                            { t.map( ( towns ) => (
                                <div key={ towns.town } className="col">
                                    <Link route='town' params={{town: towns.town}} >
                                        <a>
                                            { towns.town }
                                        </a>
                                    </Link>
                                </div>
                            ) ) }
                        </div>
                    ) ) }
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