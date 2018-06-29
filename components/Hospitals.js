import fetch from "isomorphic-fetch";
import React from "react";
import moment from "moment/moment";
import _ from "lodash";

class Hospitals extends React.Component {

    render() {
        if (_.isEmpty(this.props.hospitallist)) {
            return 'Loading';
        }
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Distance</th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.props.hospitallist.map( ( hospital ) => (
                            <tr key={ hospital.id } >
                                <td>{hospital.organisation_name}</td>
                                <td>{_.round(hospital.distance,1)} miles</td>
                            </tr>
                        ) ) }
                    </tbody>
                </table>
            </div>
            );
    }
}



export default Hospitals;