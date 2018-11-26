import moment from "moment";
import React from "react";
import ComparableRentalCard from "./ComparableRentalCard";
import _ from "lodash";

export default (props) => (
<div>
    {
        _.isEmpty(props.rentals[0]) ? null : (
            <div>
                <div className="col-12 text-left">
                    <h2 className='mt-3 '>Comparable Rental Properties</h2>
                    <p>We have found the following 6 properties to be the most similar to your search, with a full list of comparables listed further down this report</p>
                </div>
                <div className="card-deck">
                    {
                        _.map(props.rentals, (cp, i) => (
                            <ComparableRentalCard property={cp} key={i}/>
                        )).slice(0,6)
                    }
                </div>
            </div>
        )
    }
</div>
);