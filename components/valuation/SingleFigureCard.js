import React from "react";

export default (props) => {
    return (
        <div className="card">
            <div className="card-body text-center">
                {props.name}<br/>
                <h3>{props.value}</h3>
            </div>
        </div>
    );
}
