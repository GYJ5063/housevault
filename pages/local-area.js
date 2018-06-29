import React from "react";
import Hospitals from "../components/Hospitals";
import PropertySidebar from "../components/PropertySidebar"

class LocalArea extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container list-page-padding">
                <div className="row">
                    <PropertySidebar />
                    <div className="col">
                        <h3>Closest Hospitals to this address </h3>
                        <Hospitals hospitallist={this.props.hospitals}/>
                    </div>
                </div>
        </div>
        );
    }
}
LocalArea.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch("http://www.housevault.test/api/address/" + postcode + "/" + address+'/hospitals');
    const json = await res.json();

    return { hospitals: json }
};
export default LocalArea;