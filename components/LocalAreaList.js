import fetch from "isomorphic-fetch";
import React from "react";
import moment from "moment/moment";
import _ from "lodash";

class LocalAreaList extends React.Component {

    render() {
        if (_.isEmpty(this.props.list)) {
            return 'Loading';
        }
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th className="text-right">Distance</th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.props.list.map( ( hospital ) => (
                            <tr key={ hospital.id } >
                                <td>{hospital.name}</td>
                                <td className="text-right">{_.round(hospital.distance,1)} miles</td>
                            </tr>
                        ) ) }
                    </tbody>
                </table>
            </div>
            );
    }
}



export default LocalAreaList;