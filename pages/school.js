import React from "react";
import fetch from "isomorphic-fetch";
import _ from "lodash";
import EpcEnergyEfficiencyGraph from "../components/EpcEnergyEfficiencyGraph";
import EpcEnvironmentalImpactGraph from "../components/EpcEnvironmentalImpactGraph";
import PropertySidebar from "../components/PropertySidebar";
import Layout from '../components/Layout'
class School extends React.Component {


    render( ) {

        if(_.isEmpty(this.props.school)) {
            return (
                <div className="container list-page-padding">


                </div>
            )
        } else {
            return (
             <div>
                 <div className="container">
                     <h3 className="font-bolder">
                         <a href="/schools">
                             <i className="fas fa-arrow-alt-circle-left"></i>
                         </a>
                         {this.props.school.school_name}
                     </h3>
                     <h4 className="font-bolder blue-box container"><i className="fas fa-info-circle"></i> Details</h4>
                     <div className="col-lg-12">
                         <div className="row border-at-bottom">
                             <div className="col-lg-4 key-space">
                                 <i className="fas fa-school"></i> Phase
                             </div>
                             <div className="col-lg-4 value-space">
                                 {this.props.school.phase_of_education}
                             </div>
                         </div>
                         <div className="row border-at-bottom">
                             <div className="col-lg-4 key-space">
                                 <i className="fas fa-building"></i> Type
                             </div>
                             <div className="col-lg-4 value-space">
                                 {this.props.school.type_of_education}
                             </div>
                         </div>
                         <div className="row border-at-bottom">
                             <div className="col-lg-4 key-space">
                                 <i className="fas fa-object-group"></i> Minor Group
                             </div>
                             <div className="col-lg-4 value-space">
                                 {this.props.school.minor_group}

                             </div>
                         </div>
                         <div className="row border-at-bottom">
                             <div className="col-lg-4 key-space">
                                 <i className="fas fa-graduation-cap"></i> Roll Size
                             </div>
                             <div className="col-lg-4 value-space">
                                 {this.props.school.total_number_of_pupils}
                             </div>
                         </div>
                         <div className="row border-at-bottom">
                             <div className="col-lg-4 key-space">
                                 <i className="fas fa-transgender"></i> Gender
                             </div>
                             <div className="col-lg-4 value-space">
                                 {this.props.school.gender}

                             </div>
                         </div>
                         <div className="row border-at-bottom">
                             <div className="col-lg-4 key-space">
                                 <i className="fas fa-dice-six"></i> Sixth Form
                             </div>
                             <div className="col-lg-4 value-space">
                                 {this.props.school.sixth_form}
                             </div>
                         </div>
                         <div className="row border-at-bottom">
                             <div className="col-lg-4 key-space">
                                 <i className="fas fa-clipboard-list"></i> Unique Reference Number (URN)
                             </div>
                             <div className="col-lg-4 value-space">
                                 {this.props.school.urn}
                             </div>
                         </div>
                         <div className="row border-at-bottom">
                             <div className="col-lg-4 key-space">
                                 <i className="fas fa-birthday-cake"></i> Ages
                             </div>
                             <div className="col-lg-4 value-space">
                                 {this.props.school.agel} - {this.props.school.ageh}
                             </div>
                         </div>
                     </div>
                 </div>



                 <div className="container">
                     <h4 className="font-bolder font-red blue-box container"><i
                         className="fas fa-clipboard-check"></i> Latest OFSTED Inspection</h4>
                     <div className="col-lg-12 col-md-12 col-xs-12">
                         <div className="row">
                             <div className="col-lg-4 key-space">
                                 Overall Effectiveness
                             </div>
                             <div className="col-lg-6 value-space">
                                 <div className={"rating-default rating-box-" + this.props.school.overall_effectiveness}>
                                     <div className="rating"></div>
                                 </div>
                                 <div className={"rating-default rating-box-n" + this.props.school.overall_effectiveness}>
                                     <div className="rating"></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>


             </div>
            );
        }
    }
}

School.getInitialProps = async ({ req, query: { school } }) => {
    const res = await fetch(process.env.BACKEND_URL + "school/" + school);
    const json = await res.json();
    console.log(json);
    return { school: json }
};

export default School;
