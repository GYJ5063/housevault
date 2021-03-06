import React from "react";
import LocalAreaList from "../components/LocalAreaList";
import PropertyMenu from "../components/PropertyMenu"
import fetch from "isomorphic-fetch";
import Layout from '../components/Layout'
import _ from 'lodash'
class LocalArea extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (

                <Layout>
                    <PropertyMenu url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.building_number}/>


                    <div className="container list-page-padding">
                        <h2>Local Area</h2>
                        <div className="card">
                            <div className="card-body">
                                <h3>Closest hospitals to this address</h3>
                                <p>{ _.first(this.props.hospitals).name } is the closest hospital to {this.props.property.building_number +' '+ this.props.property.thoroughfare + ',' + this.props.property.postcode  } and is just {_.round(_.first(this.props.hospitals).distance) } miles away</p>
                                <LocalAreaList list={this.props.hospitals}/>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3>Closest Primary Schools to this address </h3>
                                <p>{ _.first(this.props.primary_schools).name } is the closest hospital to {this.props.property.building_number +' '+ this.props.property.thoroughfare + ',' + this.props.property.postcode  } and is just {_.round(_.first(this.props.primary_schools).distance) } miles away</p>

                                <LocalAreaList list={this.props.primary_schools}/>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3>Closest Secondary Schools to this address </h3>
                                <p>{ _.first(this.props.secondary_schools).name } is the closest hospital to {this.props.property.building_number +' '+ this.props.property.thoroughfare + ',' + this.props.property.postcode  } and is just {_.round(_.first(this.props.secondary_schools).distance) } miles away</p>

                                <LocalAreaList list={this.props.secondary_schools}/>
                            </div>
                        </div>
                    </div>
                </Layout>

        );
    }
}
LocalArea.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch(process.env.BACKEND_URL + "address/" + postcode + "/" + address+'/local-area');
    const json = await res.json();
    return { property: json.address, hospitals: json.hospitals, primary_schools: json.primary_schools, secondary_schools: json.secondary_schools }
};
export default LocalArea;