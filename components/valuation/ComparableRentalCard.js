import moment from "moment";
import React from "react";
import _ from "lodash";

export default (props) => {
    return (
        <div className="card comparable-property-card"  key={props.property.id}  >
            <img className="card-img-top" src={props.property.front_image_url} alt="Card image cap"></img>
            <div className="card-header text-white bg-info mb-3">{props.property.display_address}</div>
            <div className="card-body">
                <h5 className="card-title text-center">{'Monthly Rental Value'}<br />
                {'£'}{props.property.price.toLocaleString()}</h5>
                {_.capitalize(props.property.furnished_state.toLocaleString())}{' '}{_.replace(props.property.property_type.toLocaleString(),'_',' ')} {' with '} {props.property.num_beds.toLocaleString()} {' bedrooms and '}
                {props.property.num_baths.toLocaleString()}{' bathrooms which was listed on '}{_.replace(props.property.available_from.toLocaleString(),'Available from ','')}
            </div>
            <div className="card-footer text-muted"><strong>Located {props.property.distance < 1 ? ' within 25 meters' : (props.property.distance.toFixed(0)*100) + 'm away'}</strong></div>
        </div>
    );
}