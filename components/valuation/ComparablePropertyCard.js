import moment from "moment";
import React from "react";
import _ from "lodash";

export default (props) => {
    return (
        <div className="card comparable-property-card"  key={props.property.id}  >
            <div className="card-header text-white bg-info mb-3">{_.replace(props.property.address_1,',','')}{', '}{props.property.postcode}</div>
            <div className="card-body">
                <h5 className="card-title text-center">{'Current Market Value'}<br />
                    {'£'}{props.property.current_valuation.toLocaleString()}</h5>
                {props.property.house_type}{' with '}{props.property.rooms}{' bedrooms and '}{props.property.size}{'sqm of living space was last sold for £'}{props.property.sold_price.toLocaleString()}{' on the '}{moment(props.property.sold_date).format('Do MMMM YYYY')}{'.'}<br />
            </div>
            <div className="card-footer text-muted"><strong>Located {props.property.distance < 1 ? ' within 25 meters' : props.property.distance  + 'm away'}</strong></div>
        </div>
    );
}


