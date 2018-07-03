import React from "react";
import LocalAreaList from "../components/LocalAreaList";
import PropertySidebar from "../components/PropertySidebar"
import fetch from "isomorphic-fetch";

class LocalArea extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container list-page-padding">
                <div className="row">
                    <PropertySidebar url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.building_number}/>
                    <div className="col">
                        <div className="row">
                            <h3>Closest Hospitals to this address </h3>
                            <LocalAreaList list={this.props.hospitals}/>
                        </div>
                        <div className="row">
                            <h3>Closest Primary Schools to this address </h3>
                            <LocalAreaList list={this.props.primary_schools}/>
                        </div>
                        <div className="row">
                            <h3>Closest Primary Schools to this address </h3>
                            <LocalAreaList list={this.props.secondary_schools}/>
                        </div>
                    </div>

                </div>
        </div>
        );
    }
}
LocalArea.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch(process.env.BACKEND_URL + "address/" + postcode + "/" + address+'/local-area');
    const json = await res.json();
    return { property: json.address, hospitals: json.hospitals, primary_schools: json.primary_schools, secondary_schools: json.secondary_schools }
};
export default LocalArea;