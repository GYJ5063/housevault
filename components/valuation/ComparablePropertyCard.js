import moment from "moment";
import React from "react";
import _ from "lodash";

export default (props) => {
    return (
        <div className="card comparable-property-card mb-3"  key={props.property.id}  >
            <img className="card-img-top" src={"https://maps.googleapis.com/maps/api/streetview?size=600x300&location="+props.property.address_1+"+"+props.property.postcode+'+UK'+"&fov=60&pitch=5&key=AIzaSyDpdQ4Wb1S8CIVn8fu6-2n53rbIZEFkQn0"} alt="Card image cap"></img>
            <div className="card-header text-white bg-info mb-3">{_.replace(props.property.address_1,',','')}{', '}{props.property.postcode}</div>
            <div className="card-body">
                <h5 className="card-title text-center">{'Current Market Value'}<br />
                    {'£'}{props.property.current_valuation.toLocaleString()}</h5>
                {props.property.house_type_out}{' with '}{props.property.rooms - 2}{' bedrooms and '}{props.property.size}{'sqm of living space was last sold for £'}{props.property.sold_price.toLocaleString()}{' on the '}{moment(props.property.sold_date).format('Do MMMM YYYY')}{'.'}<br />
            </div>
            <div className="card-footer text-muted"><strong>Located {props.property.distance < 1 ? ' within 25 meters' : props.property.distance  + 'm away'}</strong></div>
        </div>
    );
}


